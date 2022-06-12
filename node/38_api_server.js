const express = require("express");
const app = express();
require("dotenv").config({ path: "mysql/.env" });
const mysql = require("./mysql");
const uuidAPIKey = require("uuid-apikey");

// console.log(uuidAPIKey.create());
const accessKey = {
  apiKey: "YN7R7QW-KKKMZ0J-KKAT0AS-A2P2NBK",
  uuid: "f54f83df-9ce7-4f82-9cd5-a02b50ac2aae",
};

app.listen(3001, () => {
  console.log("API 서버가 3001번 포트로 시작되었습니다.");
});

app.get("/api/:apikey/category", async (req, res) => {
  if (uuidAPIKey.toUUID(req.params.apikey) !== accessKey.uuid) {
    console.log("비정상적인 API KEY를 사용했습니다.");
    return res.send("Access denied!");
  }

  const categoryList = await mysql.query("categoryList");
  res.send(categoryList);
});
