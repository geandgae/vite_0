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
  init() {
    const shop = document.querySelector(".shop");
    const buy = shop.querySelector(".buy");
    const sell = shop.querySelector(".sell");
    const buyValue = document.getElementById("buyValue");
    const sellValue = document.getElementById("sellValue");
    const totalValue = document.getElementById("totalValue");
    const actionBtn = document.getElementById("actionBtn");

    // 카테고리
    const categories = ["etc", "premium", "standard"]; // 다양한 카테고리 추가
    // 타입
    const types = ["type01", "type02", "type03"]; // 다양한 타입 추가
    // // category
    // const category = {
    //   etc: "etc",
    //   premium: "premium",
    // };
    // // type
    // const type = {
    //   type01: "type01",
    //   type02: "type02",
    // };
    // itmeName
    const itmeName = {
      name01: "box",
      name02: "box2",
    };
    // price
    const price = {
      v100: 100,
      v200: 200,
    };

    // itmeLists
    const itmeLists = {
      [itmeName.name01]: {
        id: "item-id-01",
        name: itmeName.name01,
        price: price.v100, // 기본가
        category: categories[0], // 가격영향 지표 1
        type: types[0], // 가격영향 지표 2
        sale: true, // 가격영향 지표 3
        // inc: "", // 증가그룹
        // dec: "" // 감소그룹
      },
      [itmeName.name02]: {
        id: "item-id-02",
        name: itmeName.name02,
        price: price.v200,
        category: categories[1],
        type: types[1],
        sale: true,
      },
    };
    console.log(itmeLists);

    

    // 랜덤 값 생성 함수
    function getRandomValue(arr) {
      const randomIndex = Math.floor(Math.random() * arr.length);
      return arr[randomIndex];
    }

    // 랜덤 Boolean 생성 함수
    function getRandomBoolean() {
      return Math.random() < 0.5; // 50% 확률로 true/false
    }

    // 가격 계산 함수
    function calculatePrice(base, category, type, sale) {
      let finalPrice = base;

      // 카테고리별 가격 변화
      if (category === "premium") {
        finalPrice += 50; // 프리미엄 카테고리 추가 요금
      } else if (category === "standard") {
        finalPrice += 20; // 스탠다드 카테고리 추가 요금
      }

      // 타입별 가격 변화
      if (type === "type02") {
        finalPrice += 30; // type02 추가 요금
      } else if (type === "type03") {
        finalPrice += 10; // type03 추가 요금
      }

      // 세일 적용
      if (sale) {
        finalPrice -= 20; // 세일 할인
      }

      return finalPrice;
    }

    // 랜덤 데이터 업데이트 함수
    function updateRandomPrices(itemLists) {
      for (const key in itemLists) {
        const item = itemLists[key];
        // 랜덤 값 설정
        item.category = getRandomValue(categories);
        item.type = getRandomValue(types);
        item.sale = getRandomBoolean();

        // 가격 업데이트
        item.price = calculatePrice(100, item.category, item.type, item.sale);

        console.log(item.name + ":" + item.price)
      }
    }

    // 가격 업데이트 적용
    updateRandomPrices(itmeLists);
    setInterval(() => {
      updateRandomPrices(itmeLists);
    }, 5000);

    const names = ["box", "container", "bag"];
    const itmeLists2 = {};
    names.forEach((name, index) => {
      itmeLists2[name] = {
        id: `item-id-${index}-${name}`,
        category: "etc",
        name,
      };
    });
    // console.log(itmeLists2);
  },
  setupShop() {
    console.log("setupShop");
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
