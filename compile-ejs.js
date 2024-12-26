import ejs from "ejs";
import fs from "fs";
import path from "path";

// ESM 환경에서 __dirname 대체
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const templatePath = path.resolve(__dirname, "./src/test.ejs");
const outputPath = path.resolve(__dirname, "./dist/index.html");

// EJS 템플릿 렌더링
ejs.renderFile(templatePath, { title: "My Page" }, (err, str) => {
  if (err) {
    console.error("EJS 렌더링 에러:", err);
    return;
  }
  fs.writeFileSync(outputPath, str);
  console.log("HTML 파일 생성 완료:", outputPath);
});

// cjs 방식 확장자 cjs 변환
// const ejs = require("ejs");
// const fs = require("fs");
// const path = require("path");

// const templatePath = path.resolve(__dirname, "index.ejs");
// const outputPath = path.resolve(__dirname, "dist/index.html");

// // EJS 템플릿 렌더링
// ejs.renderFile(templatePath, { title: "My Page" }, (err, str) => {
//   if (err) {
//     console.error("EJS 렌더링 에러:", err);
//     return;
//   }
//   fs.writeFileSync(outputPath, str);
//   console.log("HTML 파일 생성 완료:", outputPath);
// });
