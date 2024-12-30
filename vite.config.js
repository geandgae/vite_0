import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import fs from "fs";
import path from "path"; // fs 모듈과 path 모듈을 임포트

// dotenv.config(); // .env 파일 로드

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
  define: {
    // define을 통해 전역으로 사용할 변수 정의 가능
    // __APP_ENV__: process.env.VITE_APP_ENV,
    __APP_ENV__: JSON.stringify(process.env.VITE_APP_ENV || 'development'),
  },
  plugins: [
    createHtmlPlugin({
      minify: false,
      inject: {
        // HTML 템플릿에 삽입할 데이터
        data: {
          title: "app!!",
          description: "plugin",
          headTemplate: fs.readFileSync(path.resolve(__dirname, "partials/head.html"), "utf-8"),
          bodyTemplate: fs.readFileSync(path.resolve(__dirname, "partials/body.html"), "utf-8"),
          // shopTemplate: fs.readFileSync("./partials/shop.html", "utf-8"),
          // shopTemplate: fs.readFileSync(path.resolve(__dirname, "partials/shop.html"), "utf-8"),
          // appName: import.meta.env.VITE_APP_NAME,
          envTest: process.env.VITE_APP_NAME, // 안됨... 바이트 자체에서 %% 지원 필요없음;
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
    // watch: {
    //   usePolling: true, // 폴링을 사용하여 변경 사항 감지
    //   interval: 100,    // 감지 주기 (ms)
    // },
    // hmr: {
    //   overlay: false, // 오류 화면 오버레이 비활성화
    // },
    open: true,
    port: 3200,
    // hmr: true,
  },
});
