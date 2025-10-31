import React, { useState } from "react";
import "./CalendarComponent.css";

function CalendarComponent() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysOfWeek = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

  const startOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const endOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );
  const startDay = startOfMonth.getDay() === 0 ? 6 : startOfMonth.getDay() - 1; // Monday start
  const totalDays = endOfMonth.getDate();

  const prevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const dates = [];
  for (let i = 0; i < startDay; i++) {
    dates.push(null);
  }
  for (let i = 1; i <= totalDays; i++) {
    dates.push(i);
  }

  const rows = [];
  for (let i = 0; i < dates.length; i += 7) {
    rows.push(dates.slice(i, i + 7));
  }

  const monthYear = currentDate.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  return (
    <div className="calendar-widget">
      <table className="calendar-table">
        <thead>
          <tr>
            {daysOfWeek.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((week, i) => (
            <tr key={i}>
              {week.map((date, j) => (
                <td key={j}>{date || ""}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="calendar-footer">
        <span className="calendar-prev" onClick={prevMonth}>
          « Prev
        </span>
        <span className="calendar-month">{monthYear}</span>
        <span className="calendar-next" onClick={nextMonth}>
          Next »
        </span>
      </div>
    </div>
  );
}

export default CalendarComponent;
