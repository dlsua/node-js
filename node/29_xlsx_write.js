const xlsx = require("xlsx");
const workbook = xlsx.utils.book_new(); // 가상의 엑셀 파일 생성

const customers = [
  { name: "고객명", email: "이메일", phone: "연락처" }, // 첫번째 행 - 컬럼명
  { name: "유재석", email: "ryu@gmail.com", phone: "010-0000-0001" },
  { name: "김종국", email: "kim@gmail.com", phone: "010-0000-0002" },
  { name: "송지효", email: "song@gmail.com", phone: "010-0000-0003" },
];

const firstSheet = xlsx.utils.json_to_sheet(customers, {
  header: ["name", "email", "phone"],
  skipHeader: true,
}); // skipHeader가 false 이면 엑셀시트의 첫번째 행에 header에 해당하는 name, email, phone 나오게 됨

firstSheet["!cols"] = [
  { wpx: 120 }, // name 열 너비
  { wpx: 250 }, // email 열 너비
  { wpx: 200 }, // phone 열 너비
];

xlsx.utils.book_append_sheet(workbook, firstSheet, "Customers");
xlsx.writeFile(workbook, "./xlsx/customers.xlsx");
