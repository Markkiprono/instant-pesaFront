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
  Select,
  MenuItem,
  Alert,
  CircularProgress,
  Button,
  AppBar,
  Toolbar,
} from "@mui/material";
import { Form, Text } from "../../components/Auth/authElements";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { CheckoutContainer, CheckoutPageContainer } from "./CheckoutElements";
const Physical = () => {
  const [startDate, setStartDate] = useState(null);
  const [place, setPlace] = useState("");

  const isWeekend = (date) => {
    const day = date.getDay();
    return day !== 1 && day !== 2 && day !== 3 && day !== 4 && day !== 5;
  };

  const [phone, setPhone] = useState("");

  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const orderData = {
    start: startDate,
    phone,
    place,
    end: startDate,
    mode: "physical",
    amount: 15500,
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
  const data = { phone, amount: 15500 };
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
        console.log(err);
        setLoading(false);
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
      </AppBar>
      <CheckoutContainer>
        <h3 style={{ textAlign: "center", color: "#01bf71" }}>Physical</h3>

        <CheckoutPageContainer>
          <Form onSubmit={handleSubmit}>
            {error && <Alert severity="error">{errorMsg}!</Alert>}
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              filterDate={isWeekend} // disable weekdays
              minDate={new Date()}
              dateFormat="dd-MM-yyyy"
              customInput={<CustomInput />}
            />
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">
                Attend Class in
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
                label="Residence"
              >
                <MenuItem value="Nairobi">Nairobi</MenuItem>
                <MenuItem value="Nakuru">Nakuru</MenuItem>
                <MenuItem value="Eldoret">Eldoret</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
              <InputLabel htmlFor="filled-phone">Mpesa phone number</InputLabel>
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
              Proceed To pay 15,500
            </Button>
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

export default Physical;
