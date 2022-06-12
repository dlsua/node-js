const path = require("path");

//현재 주소인데 자세한 경로를 찾기 위해선 따로 적어서 접근함.
console.log(__filename);
console.log(__dirname);
console.log(path.basename(__filename));

//js를 제외한 이름만 호출
console.log(path.basename(__filename, ".js"));

//확장자만 호출
console.log(path.extname("index.html"));

// index.html
// const filename = "index.html";
// filename.substring(filename.indexOf("."))

console.log(path.parse("/home/user/dir/file.txt"));
