import React, { useState } from "react";
import moment from "moment";

const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState(moment());

  const scheduleData = [
    {
      time: "18:30",
      title: "Is It Wrong to Try to Pick Up Girls in a Dungeon? V",
      episode: "Episode 12",
    },
    { time: "21:00", title: "Blue Box", episode: "Episode 14" },
    { time: "23:15", title: "TRILLION GAME", episode: "Episode 14" },
    { time: "23:30", title: "Rurouni Kenshin -Kyoto Disturbance-", episode: "Episode 13" },
  ];

  const daysToShow = Array.from({ length: 7 }, (_, i) =>
    moment().startOf("week").add(i, "days")
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Estimated Schedule</h1>
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={() => setSelectedDate(selectedDate.clone().subtract(1, "days"))}
            className="text-white px-2 py-1 rounded bg-gray-700 hover:bg-gray-600"
          >
            &lt;
          </button>
          <div className="flex gap-2">
            {daysToShow.map((day, index) => (
              <div
                key={index}
                onClick={() => setSelectedDate(day)}
                className={`cursor-pointer px-4 py-2 rounded ${
                  day.isSame(selectedDate, "day") ? "bg-pink-500" : "bg-gray-700"
                }`}
              >
                <div className="text-center">{day.format("ddd")}</div>
                <div className="text-center text-sm">{day.format("MMM D")}</div>
              </div>
            ))}
          </div>
          <button
            onClick={() => setSelectedDate(selectedDate.clone().add(1, "days"))}
            className="text-white px-2 py-1 rounded bg-gray-700 hover:bg-gray-600"
          >
            &gt;
          </button>
        </div>
        <div className="text-right mb-4">
          <span className="bg-gray-700 px-4 py-2 rounded inline-block">
            {selectedDate.format("(GMT+05:30) DD/MM/YYYY hh:mm:ss A")}
          </span>
        </div>
        <ul>
          {scheduleData.map((event, index) => (
            <li
              key={index}
              className="flex justify-between items-center border-b border-gray-700 py-4"
            >
              <span>{event.time}</span>
              <span>{event.title}</span>
              <span>{event.episode}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Schedule;
