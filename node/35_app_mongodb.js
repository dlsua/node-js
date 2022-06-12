const express = require("express");
require("dotenv").config({ path: "mongodb/.env" });
const mongoDB = require("./mongodb");
const app = express();

app.use(
  express.json({
    limit: "50mb", // 최대 50메가
  })
); // 클라이언트 요청 body를 json으로 파싱 처리

app.listen(3000, () => {
  console.log("3000번 포트로 서버가 시작되었습니다.");
});

app.get("/api/customers", async (req, res) => {
  const customers  = await mongoDB.find("customers");
  res.send(customers);
});
//key: name value : ~~ 조건. 고정코드
app.get("/api/customers/:name", async (req, res) => {
  const customers = await mongoDB.find("customers", {
    name: new RegExp(req.params.name, "i"),
  });
  res.send(customers);
});

app.get("/api/customer/:_id", async (req, res) => {
  const customer = await mongoDB.findById("customers", req.params._id);
  res.send(customer);
});
//postman 입력건
app.post("/api/customer", async (req, res) => {
  const r = await mongoDB.insertOne("customers", req.body.params);
  res.send(r);
});
//다중입력
app.post("/api/customers", async (req, res) => {
  const r = await mongoDB.insertMany("customers", req.body.params);
  res.send(r);
});

app.put("/api/customer/:_id", async (req, res) => {
  const r = await mongoDB.updateById(
    "customers",
    req.body.params,
    req.params._id
  );
  res.send(r);
});

app.delete("/api/customer/:_id", async (req, res) => {
  const r = await mongoDB.deleteById("customers", req.params._id);
  res.send(r);
});
