import { Button } from "@mui/material";
import React from "react";
import "./course.css";
import { Link } from "react-router-dom";
const CourseData1 = [
  "Trade duration (fixed time trades)",
  "Investment (fixed investment)",
  "The verdict",
];

const CourseData2 = [
  "Up and down",
  "Touch and No touch",
  "In and Out",
  "Digits",
];

const CourseData3 = [
  "Trading assets",
  "Duration",
  "Stake",
  "Purchase",
  "Chart",
  "Contract",
];

const CourseData4 = [
  "Types of trading",
  "Entry spot and exit spot",
  "Rise and fall trading",
  "Stake and Risk management",
  "Emotions in trading",
  "Our trading strategy",
];

const CourseData5 = [
  "Smart charts and trading view",
  "Chart types",
  "Indicators",
  "Trend (short term and long term)",
  "Determining entry points",
];

const CourseData7 = [
  "Understanding binary bots",
  "Bot contracts ",
  "Managing trading bots for profitable trades",
];

const CourseOutline = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Course Outline</h1>
      <h3 style={{ textAlign: "center", marginTop: 10 }}>
        Book a session Below
      </h3>
      <div
        style={{
          display: "flex",
          marginTop: 20,
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <Button
          component={Link}
          to="/Academy/Offers/Online"
          style={{
            background: "#01BF71",
            color: "white",
            borderRadius: 14,
            marginRight: 20,

            padding: "10px 20px",
          }}
        >
          Book Online
        </Button>
        <Button
          component={Link}
          to="/Academy/Offers/Physical"
          style={{
            background: "#01BF71",
            color: "white",
            borderRadius: 14,
            marginLeft: 20,
            padding: "10px 20px",
          }}
        >
          Book Physical
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 30,
        }}
      >
        <ol>
          <li>
            Differentiate between binary options and forex
            <ul>
              {CourseData1.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </li>

          <li>
            Binary options trading offered in deriv.com/binary.com{" "}
            <ul>
              {CourseData2.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </li>

          <li>
            Trading layout (binary.com and deriv.com trading interface){" "}
            <ul>
              {CourseData3.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </li>

          <li>
            Trading in details{" "}
            <ul>
              {CourseData4.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </li>

          <li>
            Understanding charts and graphs
            <ul>
              {CourseData5.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </li>

          <li>
            Trading practically
            <ul>
              <li>live trading session</li>
            </ul>
          </li>

          <li>
            Trading bots{" "}
            <ul>
              {CourseData7.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </li>
        </ol>
      </div>
    </>
  );
};

export default CourseOutline;
