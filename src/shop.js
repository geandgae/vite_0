// 일반함수 export
// export function setupShop() {
//   // let counter = 0
//   // const setCounter = (count) => {
//   //   counter = count
//   //   element.innerHTML = `count is ${counter}`
//   // }
//   // element.addEventListener('click', () => setCounter(counter + 1))
//   // setCounter(0)
//   console.log("setupShop");
// }


// 객체 export
const ShopModule = {
  setupShop() {
    console.log("setupShop");
  },
  init() {
    console.log("Shop initialized");
  },
  func1() {
    console.log("Function 1 executed");
  },
  func2() {
    console.log("Function 2 executed");
  },
};

// 객체를 내보내기
export default ShopModule;