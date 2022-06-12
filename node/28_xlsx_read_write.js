const xlsx = require("xlsx");

const workbook = xlsx.readFile("./xlsx/customers.xlsx"); // 엑셀 파일 읽기
const firstSheetName = workbook.SheetNames[0]; // 첫번째 시트 이름
const firstSheet = workbook.Sheets[firstSheetName]; // 첫번째 시트
console.log(firstSheet["A2"].v);
firstSheet["B2"].v = "REDOLD"; // 이메일 주소 변경
firstSheet["A23"] = { t: "s", v: "Jeremy" }; // 새로운 셀을 기록

xlsx.writeFile(workbook, "./xlsx/test2.xlsx"); // 변경된 내용을 새로운 엑셀 파일로 생성
