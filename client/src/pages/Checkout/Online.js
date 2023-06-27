import React, { useState } from "react";
import axios from "../../api/axios";
import { Axios } from "../../api/axios1";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { AiOutlineCalendar } from "react-icons/ai";
import {
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  Button,
  CircularProgress,
  Alert,
  AppBar,
  Toolbar,
} from "@mui/material";
import { CheckoutContainer, CheckoutPageContainer } from "./CheckoutElements";
import { Link } from "react-router-dom";
import { Form, Text } from "../../components/Auth/authElements";
import Swal from "sweetalert2";

const Online = () => {
  const [startDate, setStartDate] = useState(null);

  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };
  const [phone, setPhone] = useState("");

  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const users = JSON.parse(localStorage.getItem("user"));

  const userData = users?.user;

  const orderData = {
    start: startDate,
    phone,
    end: startDate,
    mode: "online",
    amount: 5500,
    user: userData._id,
    title: userData.name,
    email: userData.email,
  };

  var reqcount = 0;
  const stkPushQuery = (checkOutRequestID) => {
    const timer = setInterval(() => {
      reqcount += 1;
      if (reqcount === 20) {
        clearInterval(timer);
        setLoading(false);
        setErrorMsg("you took too long to pay");
        setError(true);
        return;
      }
      Axios.post("/token/userResponse", {
        CheckoutRequestID: checkOutRequestID,
      })
        .then((response) => {
          if (response.data.ResultCode === "0") {
            clearInterval(timer);
            //successfull payment
            setLoading(false);
            Swal.fire(
              "SUCCESS!",
              "We received your purchase request , we'll be in touch shortly!",
              "success"
            );
            axios
              .post("/api/v1/order/new", orderData)
              .catch((err) => console.log(err));
          } else if (response.errorCode === "500.001.1001") {
            console.log(response.errorMessage);
          } else {
            clearInterval(timer);
            setLoading(false);
            setError(true);
            setErrorMsg(response.data.ResultDesc);
            // console.log(response);
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
    }, 2000);
  };
  const data = { phone, amount: 5500 };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data.phone || !data.amount) {
      setError(true);
      setErrorMsg("please fill all fields");
      return;
    }
    if (phone.length !== 10) {
      setError(true);
      setErrorMsg("enter a valid phone number");
      return;
    }
    if (phone.substring(0, 2) !== "07") {
      if (phone.substring(0, 2) !== "01") {
        setError(true);
        setErrorMsg("start with 07.. or 01..");
        return;
      }
    }

    setError(false);
    setErrorMsg("");
    setLoading(true);
    Axios.post("/token", data)
      .then((res) => {
        stkPushQuery(res.data.CheckoutRequestID);
      })
      .catch((err) => {
        setError(true);
        setErrorMsg("something wrong happened..try later");
        setLoading(false);
        console.log(err);
      });
  };

  const CustomInput = ({ value, onClick }) => (
    <FormControl variant="standard" fullWidth>
      <InputLabel htmlFor="input">Book A Date</InputLabel>
      <Input
        required
        id="input"
        onClick={onClick}
        value={value}
        endAdornment={
          <InputAdornment position="end">
            <AiOutlineCalendar />
          </InputAdornment>
        }
      />
    </FormControl>
  );

  return (
    <>
      <AppBar
        position="static"
        style={{ background: "inherit", boxShadow: "none" }}
      >
        <Toolbar>
          <Button
            style={{ background: "#01BF71", color: "white" }}
            component={Link}
            to="/Academy"
          >
            Go Back
          </Button>
        </Toolbar>
      </AppBar>{" "}
      <CheckoutContainer>
        <h3 style={{ textAlign: "center", color: "#01bf71" }}>Online</h3>

        <CheckoutPageContainer>
          <Form onSubmit={handleSubmit}>
            {error && <Alert severity="error">{errorMsg}!</Alert>}
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              filterDate={isWeekday} // disable weekends
              minDate={new Date()}
              dateFormat="dd-MM-yyyy"
              customInput={<CustomInput />}
            />
            <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
              <InputLabel htmlFor="filled-phone">Mpesa phoneNumber</InputLabel>
              <Input
                required
                id="filled-phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </FormControl>
            <Button
              fullWidth
              type="submit"
              disabled={loading}
              style={{ background: "#01bf71", color: "white" }}
            >
              Proceed To pay 5,500
            </Button>{" "}
            {loading && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Text>Please await as we process your payment</Text>
                <CircularProgress color="success" />
              </div>
            )}
          </Form>
        </CheckoutPageContainer>
      </CheckoutContainer>
    </>
  );
};

export default Online;
