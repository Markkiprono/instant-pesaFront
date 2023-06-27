const axios = require("axios");
const Mpesa = require("../model/Mpesa");
const {
  uri,
  consumerSecret,
  ConsumerKey,
  envt,
  passKey,
  shortCode,
} = require("../services/services");
const createToken = async (req, res, next) => {
  const buffer = new Buffer.from(`${ConsumerKey}:${consumerSecret}`).toString(
    "base64"
  );
  const url = `https://${envt}.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials`;

  await axios
    .get(url, {
      headers: {
        authorization: `Basic ${buffer}`,
      },
    })
    .then((data) => {
      token = data.data.access_token;
      console.log(token);
      next();
    })
    .catch((err) => {
      res.status(400).json(err.message);
    });
};
const postStk = async (req, res, next) => {
  const phone = req.body.phone.substring(1);
  const amount = req.body.amount;

  const url = `https://${envt}.safaricom.co.ke/mpesa/stkpush/v1/processrequest`;

  const date = new Date();
  const timestamp =
    date.getFullYear() +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    ("0" + date.getDate()).slice(-2) +
    ("0" + date.getHours()).slice(-2) +
    ("0" + date.getMinutes()).slice(-2) +
    ("0" + date.getSeconds()).slice(-2);
  const password = new Buffer.from(shortCode + passKey + timestamp).toString(
    "base64"
  );
  const data = {
    BusinessShortCode: shortCode,
    Password: password,
    Timestamp: timestamp,
    TransactionType: "CustomerPayBillOnline",
    Amount: amount,
    PartyA: `254${phone}`,
    PartyB: shortCode,
    PhoneNumber: `254${phone}`,
    CallBackURL: `${uri}/token/call_back`,
    AccountReference: "InstantPesa",
    TransactionDesc: "Instant Pesa",
  };
  await axios
    .post(url, data, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
    .then((data) => {
      checkoutRequestID = data.data.CheckoutRequestID;
      res.status(200).json(data.data);
      next();
    })
    .catch((err) => {
      res.status(400).json(err.message);
      console.log(err);
    });
};

const userCallback = async (req, res) => {
  const { Body } = req.body;

  if (!Body.stkCallback.CallbackMetadata) {
    res.status(200).json("ok");
    return;
  }

  const amount = req.body.Body.stkCallback.CallbackMetadata.Item[0].Value;
  const code = req.body.Body.stkCallback.CallbackMetadata.Item[1].Value;

  const phone1 =
    req.body.Body.stkCallback.CallbackMetadata.Item[4].Value.toString().substring(
      3
    );
  const phone = `+254${phone1}`;

  // saving the transaction to db

  const mpesa = await Mpesa.create({ phone, code, amount });
  console.log(mpesa);
  res.status(200).json("ok");
};

const userResponse = async (req, res) => {
  const url = `https://${envt}.safaricom.co.ke/mpesa/stkpushquery/v1/query`;

  const date = new Date();
  const timestamp =
    date.getFullYear() +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    ("0" + date.getDate()).slice(-2) +
    ("0" + date.getHours()).slice(-2) +
    ("0" + date.getMinutes()).slice(-2) +
    ("0" + date.getSeconds()).slice(-2);
  const password = new Buffer.from(shortCode + passKey + timestamp).toString(
    "base64"
  );
  const data = {
    BusinessShortCode: shortCode,
    Password: password,
    Timestamp: timestamp,
    CheckoutRequestID: checkoutRequestID,
  };
  await axios
    .post(url, data, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
    .then((data) => {
      res.status(200).json(data.data);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err.message);
    });
};
const viewTransactions = async (req, res) => {
  const mpesa = await Mpesa.find();
  res.status(201).json(mpesa);
};

module.exports = {
  createToken,
  postStk,
  userResponse,
  userCallback,
  viewTransactions,
};
