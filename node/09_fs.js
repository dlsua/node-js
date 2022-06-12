const fs = require("fs");
// filesystem
//비동기 방식
//비동기인데 왜 먼저 결과가 떠러어지는가
fs.readFile("./sample/text.txt", "utf8", (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
  // console.log(data+" 비동기 ");
});

//동기 방식
const data = fs.readFileSync("./sample/text.txt", "utf8");
console.log(data);
//동기식 데이터 추가
const txt = "동기식 파일 추가 테스트";
fs.writeFile("./sample/text_w.txt", txt, "utf8", (err) => {
  if (err) {
    throw err;
  }
  const data2 = fs.readFileSync("./sample/text_w.txt", "utf8");
  console.log(data2);
});

// fs.writeFileSync("./sample/text_w.txt", txt, "utf8") 동기방식
