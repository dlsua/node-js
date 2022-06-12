// .ics
// iCalendar
const ics = require("ics");
require("dotenv").config({ path: `nodemailer/.env` });
const nodemailer = require("./nodemailer");

const event = {
  start: [2022, 4, 30, 9, 30], //년, 월, 일, 시, 분
  duration: { hours: 1, minutes: 30 },
  title: "Node.js 스터디 모임",
  description: "개발자의품격 부트캠프 1기 스터티 모임",
  location: "제주도 더그레잇 3층",
  geo: { lat: 30.12, lon: 50.45 }, // lat:위도, lon:경도
  url: "http://thegreat.io",
  organizer: { name: "Seungwon Go", email: "seungwon.go@gmail.com" }, //주최자
  attendees: [
    {
      name: "한주하",
      email: "hanjuhaa@gmail.com",
      rsvp: true, //회신 여부
      role: "REQ-PARTICPANT", // 필수 참석자
    },
    {
      name: "윤여진",
      email: "indiayeojin@gmail.com",
      // rsvp: true, //회신 여부
      role: "OPT-PARTICPANT", // 선택 참석자
    },
  ],
};

const sendEmailWithIcs = async () => {
  ics.createEvent(event, async (error, value) => {
    if (error) {
      console.log(error);
      return;
    }

    console.log(value);
    const message = {
      from: "dlsuaqwe@gmail.com",
      to: "dlsuaqwe@gmail.com, hanjuhaa@gmail.com, indiayeojin@gmail.com",
      subject: "Node.js 스터디 모임",
      text: "개발자의품격 부트캠프 1기 스터티 모임",
      icalEvent: {
        filename: "invitaion.ics", // iCalendar 파일
        method: "REQUEST",
        content: value,
      },
    };

    await nodemailer.send(message); // 이메일 발송
  });
};

sendEmailWithIcs();
