import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import fs from "fs";
import path from "path"; // fs 모듈과 path 모듈을 임포트

export default defineConfig({
  // root: "./dist", // 프로젝트 루트를 설정 (src 폴더)
  // build: {
  //   rollupOptions: {
  //     output: {
  //       // // 빌드된 JavaScript 파일의 이름
  //       // entryFileNames: "scripts/[name]-[hash].js",
  //       // // 빌드된 CSS 파일의 이름
  //       // chunkFileNames: "css/[name]-[hash].css",
  //       // // 빌드된 에셋 파일의 이름 (예: 이미지, 폰트)
  //       // assetFileNames: "assets/[name]-[hash].[ext]",
  //       // assetFileNames: ({ name }) => {
  //       //   const extType = name.split('.').pop();
  //       //   return `assets/${extType}/[name]-[hash].[ext]`;
  //       // },
  //       // 빌드된 JavaScript 파일의 이름
  //       entryFileNames: "scripts/[name].js",
  //       // 빌드된 CSS 파일의 이름
  //       chunkFileNames: "css/[name].css",
  //       // 빌드된 에셋 파일의 이름 (예: 이미지, 폰트)
  //       assetFileNames: "assets/[name].[ext]",
  //     },
  //   },
  //   outDir: "./dist", // 빌드 결과물 폴더 (dist)
  // },
  plugins: [
    createHtmlPlugin({
      inject: {
        // HTML 템플릿에 삽입할 데이터
        data: {
          title: "My Vite App!!",
          description: "Vite with vite-plugin-html",
          headTemplate: fs.readFileSync(path.resolve(__dirname, "partials/head.html"), "utf-8"),
          bodyTemplate: fs.readFileSync(path.resolve(__dirname, "partials/body.html"), "utf-8"),
        },
      },
    }),
  ],
  server: {
    open: true,
    port: 3200,
  },
});
