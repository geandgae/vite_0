// 일반함수 export
export function setupShop() {
  // 변수
  const shop = document.querySelector(".shop");
  const buy = shop.querySelector(".buy");
  const sell = shop.querySelector(".sell");
  const buyValue = document.getElementById("buyValue");
  const sellValue = document.getElementById("sellValue");
  const totalValue = document.getElementById("totalValue");
  const actionBtn = document.getElementById("actionBtn");

  // category
  const category = {
    food: "food",
    resource: "resource",
    goods: "goods",
    technology: "technology",
    luxury: "luxury"
  }
  // grades
  const grade = {
    a: "a",
    b: "b",
    d: "d",
    e: "e",
    f: "f",
  };
  // price
  const price = {
    v100: 100,
    v200: 200,
    v300: 300,
    v400: 400,
    v500: 500,
  };

  // itmeLists
  const itmeLists = {
    name01: {
      id: "item-id-01",
      name: "name01",
      price: price.v100,
      category: category.food,
      grade: grade.a,
      sale: false,
    },
    name02: {
      id: "item-id-02",
      name: "name02",
      price: price.v200,
      category: category.resource,
      grade: grade.b,
      sale: false,
    },
    name03: {
      id: "item-id-03",
      name: "name03",
      price: price.v300,
      category: category.goods,
      grade: grade.c,
      sale: false,
    },
    name04: {
      id: "item-id-04",
      name: "name04",
      price: price.v400,
      category: category.technology,
      grade: grade.d,
      sale: false,
    },
    name04: {
      id: "item-id-04",
      name: "name04",
      price: price.v400,
      category: category.technology,
      grade: grade.d,
      sale: false,
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
  // updateRandomPrices(itmeLists);
  setInterval(() => {
    // updateRandomPrices(itmeLists);
  }, 5000);


  console.log(shop);
}
