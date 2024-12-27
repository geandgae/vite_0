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
      minify: false,
      inject: {
        // HTML 템플릿에 삽입할 데이터
        data: {
          title: "My Vite App!!",
          description: "Vite with vite-plugin-html",
          headTemplate: fs.readFileSync(path.resolve(__dirname, "partials/head.html"), "utf-8"),
          bodyTemplate: fs.readFileSync(path.resolve(__dirname, "partials/body.html"), "utf-8"),
          envTest: process.env.VITE_APP_NAME,
        },
      },
    }),
  ],
  // define: {
  //   // Vite의 `import.meta.env`로 환경 변수 설정
  //   "import.meta.env.VITE_APP_NAME": JSON.stringify(process.env.VITE_APP_NAME), // 클라이언트에서 접근 가능한 방식으로 설정
  // },
  // build: {
  //   minify: false, // 전체 빌드에서 minify 비활성화
  // },
  // build: {
  //   minify: false, // 빌드 시 압축을 비활성화
  //   rollupOptions: {
  //     output: {
  //       // preserveModules: true, // ES 모듈을 유지하여 원본 코드 구조 그대로 유지
  //       entryFileNames: "[name].js", // 번들링된 JS 파일의 이름을 원본 그대로
  //       chunkFileNames: "[name].js", // 청크 파일의 이름을 원본 그대로
  //       assetFileNames: "[name][extname]", // 자산 파일 이름을 원본 그대로
  //     },
  //   },
  // },
  // build: {
  //   esbuild: {
  //     minify: false,  // esbuild에서 직접 minify를 비활성화
  //   },
  // },
  server: {
    open: true,
    port: 3200,
  },
});
