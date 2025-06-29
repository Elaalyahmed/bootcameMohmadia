import React, { Component } from "react";
import "./Clock.css"; // نضيف ملف CSS خارجي

export default class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TheCurrentYear: "",
      month: "",
      DayOfTheWeek: "",
      DayOfTheMonth: "",
      hour: "",
      minute: "",
      second: "",
    };
  }

  componentDidMount() {
    this.updateDateTime();
    this.Interval = setInterval(this.updateDateTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.Interval);
  }

  updateDateTime = () => {
    const now = new Date();
    this.setState({
      TheCurrentYear: now.getFullYear(),
      month: now.toLocaleString("default", { month: "long" }),
      DayOfTheWeek: now.toLocaleString("default", { weekday: "long" }),
      DayOfTheMonth: now.getDate(),
      hour: now.getHours(),
      minute: now.getMinutes(),
      second: now.getSeconds(),
    });
  };

  render() {
    const {
      TheCurrentYear,
      month,
      DayOfTheWeek,
      DayOfTheMonth,
      hour,
      minute,
      second,
    } = this.state;

    return (
      <div className="clock-container">
        {/* السنة في الزاوية العلوية اليسرى */}
        <div className="top-left">
          <h2>{TheCurrentYear}</h2>
        </div>

        {/* التاريخ الكامل */}
        <div className="clock-center">
          <h3 className="rotate-text">{DayOfTheWeek}</h3>
          <h1>
            {DayOfTheMonth} / {month} / {TheCurrentYear}
          </h1>
          <h2>
            {hour.toString().padStart(2, "0")}:
            {minute.toString().padStart(2, "0")}:
            {second.toString().padStart(2, "0")}
          </h2>
        </div>

        {/* الشهر في الزاوية السفلية اليمنى */}
        <div className="bottom-right">
          <h2>{month}</h2>
        </div>
      </div>
    );
  }
}
