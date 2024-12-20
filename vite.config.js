import { defineConfig } from "vite";

export default defineConfig({
  root: "./", // 프로젝트 루트를 설정 (src 폴더)
  build: {
    rollupOptions: {
      output: {
        // // 빌드된 JavaScript 파일의 이름
        // entryFileNames: "scripts/[name]-[hash].js",
        // // 빌드된 CSS 파일의 이름
        // chunkFileNames: "css/[name]-[hash].css",
        // // 빌드된 에셋 파일의 이름 (예: 이미지, 폰트)
        // assetFileNames: "assets/[name]-[hash].[ext]",
        // assetFileNames: ({ name }) => {
        //   const extType = name.split('.').pop();
        //   return `assets/${extType}/[name]-[hash].[ext]`;
        // },
        // 빌드된 JavaScript 파일의 이름
        entryFileNames: "scripts/[name].js",
        // 빌드된 CSS 파일의 이름
        chunkFileNames: "css/[name].css",
        // 빌드된 에셋 파일의 이름 (예: 이미지, 폰트)
        assetFileNames: "assets/[name].[ext]",
      },
    },
    outDir: "./dist", // 빌드 결과물 폴더 (dist)
  },
  server: {
    open: true, // 개발 서버 시작 시 브라우저 자동 열기
    port: 3200, // 개발 서버 포트 설정
  },
});
