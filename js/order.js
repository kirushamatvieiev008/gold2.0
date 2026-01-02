// const btnOpenModal = document.querySelector(".buy");
// const modal = document.querySelector(".modal");
// const backDrop = document.querySelector(".backDrop");
// const closeModal = document.querySelector(".closeModalBtn");

// const phoneSource = document.querySelector(".phoneSource");
// const tgSource = document.querySelector(".tgSource");
// const instSource = document.querySelector(".instSource");
// const sources = document.querySelectorAll(".conectionSource");
// const helpInfo = document.querySelector(".helpInfo");

// console.log(btnOpenModal);

// btnOpenModal.addEventListener("click", (event) => {
//   event.preventDefault();
//   modal.style.display = "block";
//   document.body.style.overflow = "hidden";
//   backDrop.style.display = "block";
// });

// closeModal.addEventListener("click", (evemt) => {
//   modal.style.display = "none";
//   document.body.style.overflow = "visible";
//   backDrop.style.display = "none";
// });

// modal.addEventListener("click", (event) => {
//   event.preventDefault();

//   if (event.target.classList[0] === "makeOrderbyPhone") {
//     sources.forEach((source) => {
//       source.style.display = "none";
//       helpInfo.style.display = "block";
//       helpInfo.innerHTML = `для того що б закінчити замовлення вам необхідно подзвонити по
//                 номеру телефу що зазначений вище та повідомити індекс товару,
//                 також повідомте його кількість`;
//     });
//     phoneSource.style.display = "block";
//   } else if (event.target.classList[0] === "makeOrderbyTg") {
//     sources.forEach((source) => {
//       source.style.display = "none";
//       helpInfo.innerHTML = `для того що б закінчити замовлення вам необхідно перейти за посиланням та написати нашим працівникам ID товару (знаходиться трохи нижче картинки)
//        і зазначити його кількість, після чого замовлення буде готове :)`;
//       helpInfo.style.display = "block";
//     });
//     tgSource.style.display = "block";
//   } else if (event.target.classList[0] === "makeOrderbyInst") {
//     sources.forEach((source) => {
//       source.style.display = "none";
//       helpInfo.innerHTML = `для того що б закінчити замовлення вам необхідно перейти за посиланням та написати нашим працівникам ID товару (знаходиться трохи нижче картинки)
//        і зазначити його кількість, після чого замовлення буде готове :)`;
//       helpInfo.style.display = "block";
//     });

//     instSource.style.display = "block";
//   }

//   console.log(event.target.classList);
// });

// backDrop.addEventListener("click", (event) => {
//   modal.style.display = "none";
//   document.body.style.overflow = "visible";
//   backDrop.style.display = "none";
// });

const catalog = [
  {
    name: "Подарунковий золотий зливок Argor-Heraeus 5",
    photo: "photos/goldTry.jpg",
    buyIngPricePerGramm: "147.20$",
    sellingPerGramm: "162.54$",
    weight: "5Г",
    metal: "Золото",
    country: "Швейцарія",
    mader: "Argor-Heraeus",
    status: "Є в наявності",
    id: 0,
    idShow: 32058,
    totalPrice: "754.49$",
    sellingPrice: "722.55$",
  },
  {
    name: "Подарунковий золотий зливок Argor-Heraeus 5",
    photo: "photos/goldTry.jpg",
    buyIngPricePerGramm: "147.20$",
    sellingPerGramm: "162.54$",
    weight: "5Г",
    metal: "Золото",
    country: "Швейцарія",
    mader: "Argor-Heraeus",
    status: "Є в наявності",
    id: 1,
    idShow: 71717,
    totalPrice: "754.49$",
    sellingPrice: "722.55$",
  },
  {
    name: "Подарунковий золотий зливок Argor-Heraeus 5",
    photo: "photos/goldTry.jpg",
    buyIngPricePerGramm: "147.20$",
    sellingPerGramm: "162.54$",
    weight: "5Г",
    metal: "Золото",
    country: "Швейцарія",
    mader: "Argor-Heraeus",
    status: "Є в наявності",
    id: 2,
    idShow: 79800,
    totalPrice: "754.49$",
    sellingPrice: "722.55$",
  },
  {
    name: "Подарунковий золотий зливок Argor-Heraeus 5",
    photo: "photos/goldTry.jpg",
    buyIngPricePerGramm: "147.20$",
    sellingPerGramm: "162.54$",
    weight: "5Г",
    metal: "Золото",
    country: "Швейцарія",
    mader: "Argor-Heraeus",
    status: "Є в наявності",
    id: 3,
    idShow: 16400,
    totalPrice: "754.49$",
    sellingPrice: "722.55$",
  },
  {
    name: "Подарунковий золотий зливок Argor-Heraeus 5",
    photo: "photos/goldTry.jpg",
    buyIngPricePerGramm: "147.20$",
    sellingPerGramm: "162.54$",
    weight: "5Г",
    metal: "Золото",
    country: "Швейцарія",
    mader: "Argor-Heraeus",
    status: "Є в наявності",
    id: 4,
    idShow: 16964,
    totalPrice: "754.49$",
    sellingPrice: "722.55$",
  },
  {
    name: "Подарунковий золотий зливок Argor-Heraeus 5",
    photo: "photos/goldTry.jpg",
    buyIngPricePerGramm: "147.20$",
    sellingPerGramm: "162.54$",
    weight: "5Г",
    metal: "Золото",
    country: "Швейцарія",
    mader: "Argor-Heraeus",
    status: "Є в наявності",
    id: 5,
    idShow: 14425,
    totalPrice: "754.49$",
    sellingPrice: "722.55$",
  },
  {
    name: "Подарунковий золотий зливок Argor-Heraeus 5",
    photo: "photos/goldTry.jpg",
    buyIngPricePerGramm: "147.20$",
    sellingPerGramm: "162.54$",
    weight: "5Г",
    metal: "Золото",
    country: "Швейцарія",
    mader: "Argor-Heraeus",
    status: "Є в наявності",
    id: 6,
    idShow: 14652,
    totalPrice: "754.49$",
    sellingPrice: "722.55$",
  },
  {
    name: "Подарунковий золотий зливок Argor-Heraeus 5",
    photo: "photos/goldTry.jpg",
    buyIngPricePerGramm: "147.20$",
    sellingPerGramm: "162.54$",
    weight: "5Г",
    metal: "Золото",
    country: "Швейцарія",
    mader: "Argor-Heraeus",
    status: "Є в наявності",
    id: 7,
    idShow: 14205,
    totalPrice: "754.49$",
    sellingPrice: "722.55$",
  },
  {
    name: "Подарунковий золотий зливок Argor-Heraeus 5",
    photo: "photos/goldTry.jpg",
    buyIngPricePerGramm: "147.20$",
    sellingPerGramm: "162.54$",
    weight: "5Г",
    metal: "Золото",
    country: "Швейцарія",
    mader: "Argor-Heraeus",
    status: "Є в наявності",
    id: 8,
    idShow: 87594,
    totalPrice: "754.49$",
    sellingPrice: "722.55$",
  },
  {
    name: "Подарунковий золотий зливок Argor-Heraeus 5",
    photo: "photos/goldTry.jpg",
    buyIngPricePerGramm: "147.20$",
    sellingPerGramm: "162.54$",
    weight: "5Г",
    metal: "Золото",
    country: "Швейцарія",
    mader: "Argor-Heraeus",
    status: "Є в наявності",
    id: 9,
    idShow: 78025,
    totalPrice: "754.49$",
    sellingPrice: "722.55$",
  },
  {
    name: "Подарунковий золотий зливок Argor-Heraeus 5",
    photo: "photos/goldTry.jpg",
    buyIngPricePerGramm: "147.20$",
    sellingPerGramm: "162.54$",
    weight: "5Г",
    metal: "Золото",
    country: "Швейцарія",
    mader: "Argor-Heraeus",
    status: "Є в наявності",
    id: 10,
    idShow: 87978,
    totalPrice: "754.49$",
    sellingPrice: "722.55$",
  },
  {
    name: "Подарунковий золотий зливок Argor-Heraeus 5",
    photo: "photos/goldTry.jpg",
    buyIngPricePerGramm: "147.20$",
    sellingPerGramm: "162.54$",
    weight: "5Г",
    metal: "Золото",
    country: "Швейцарія",
    mader: "Argor-Heraeus",
    status: "Є в наявності",
    id: 11,
    idShow: 91472,
    totalPrice: "754.49$",
    sellingPrice: "722.55$",
  },
  {
    name: "Подарунковий золотий зливок Argor-Heraeus 5",
    photo: "photos/goldTry.jpg",
    buyIngPricePerGramm: "147.20$",
    sellingPerGramm: "162.54$",
    weight: "5Г",
    metal: "Золото",
    country: "Швейцарія",
    mader: "Argor-Heraeus",
    status: "Є в наявності",
    id: 12,
    idShow: 80005,
    totalPrice: "754.49$",
    sellingPrice: "722.55$",
  },
  {
    name: "Подарунковий золотий зливок Argor-Heraeus 5",
    photo: "photos/goldTry.jpg",
    buyIngPricePerGramm: "147.20$",
    sellingPerGramm: "162.54$",
    weight: "5Г",
    metal: "Золото",
    country: "Швейцарія",
    mader: "Argor-Heraeus",
    status: "Є в наявності",
    id: 13,
    idShow: 45127,
    totalPrice: "754.49$",
    sellingPrice: "722.55$",
  },
  {
    name: "Подарунковий золотий зливок Argor-Heraeus 5",
    photo: "photos/goldTry.jpg",
    buyIngPricePerGramm: "147.20$",
    sellingPerGramm: "162.54$",
    weight: "5Г",
    metal: "Золото",
    country: "Швейцарія",
    mader: "Argor-Heraeus",
    status: "Є в наявності",
    id: 14,
    idShow: 99872,
    totalPrice: "754.49$",
    sellingPrice: "722.55$",
  },
  {
    name: "Подарунковий золотий зливок Argor-Heraeus 5",
    photo: "photos/goldTry.jpg",
    buyIngPricePerGramm: "147.20$",
    sellingPerGramm: "162.54$",
    weight: "5Г",
    metal: "Золото",
    country: "Швейцарія",
    mader: "Argor-Heraeus",
    status: "Є в наявності",
    id: 15,
    idShow: 80225,
    totalPrice: "754.49$",
    sellingPrice: "722.55$",
  },
  {
    name: "Подарунковий золотий зливок Argor-Heraeus 5",
    photo: "photos/goldTry.jpg",
    buyIngPricePerGramm: "147.20$",
    sellingPerGramm: "162.54$",
    weight: "5Г",
    metal: "Золото",
    country: "Швейцарія",
    mader: "Argor-Heraeus",
    status: "Є в наявності",
    id: 16,
    idShow: 13287,
    totalPrice: "754.49$",
    sellingPrice: "722.55$",
  },
  {
    name: "Подарунковий золотий зливок Argor-Heraeus 5",
    photo: "photos/goldTry.jpg",
    buyIngPricePerGramm: "147.20$",
    sellingPerGramm: "162.54$",
    weight: "5Г",
    metal: "Золото",
    country: "Швейцарія",
    mader: "Argor-Heraeus",
    status: "Є в наявності",
    id: 17,
    idShow: 14581,
    totalPrice: "754.49$",
    sellingPrice: "722.55$",
  },
  {
    name: "Подарунковий золотий зливок Argor-Heraeus 5",
    photo: "photos/goldTry.jpg",
    buyIngPricePerGramm: "147.20$",
    sellingPerGramm: "162.54$",
    weight: "5Г",
    metal: "Золото",
    country: "Швейцарія",
    mader: "Argor-Heraeus",
    status: "Є в наявності",
    id: 18,
    idShow: 85481,
    totalPrice: "754.49$",
    sellingPrice: "722.55$",
  },
  {
    name: "Подарунковий золотий зливок Argor-Heraeus 5",
    photo: "photos/goldTry.jpg",
    buyIngPricePerGramm: "147.20$",
    sellingPerGramm: "162.54$",
    weight: "5Г",
    metal: "Золото",
    country: "Швейцарія",
    mader: "Argor-Heraeus",
    status: "Є в наявності",
    id: 19,
    idShow: 15379,
    totalPrice: "754.49$",
    sellingPrice: "722.55$",
  },
  {
    name: "Подарунковий золотий зливок Argor-Heraeus 5",
    photo: "photos/goldTry.jpg",
    buyIngPricePerGramm: "147.20$",
    sellingPerGramm: "162.54$",
    weight: "5Г",
    metal: "Золото",
    country: "Швейцарія",
    mader: "Argor-Heraeus",
    status: "Є в наявності",
    id: 20,
    idShow: 79513,
    totalPrice: "754.49$",
    sellingPrice: "722.55$",
  },
  {
    name: "Подарунковий золотий зливок Argor-Heraeus 5",
    photo: "photos/goldTry.jpg",
    buyIngPricePerGramm: "147.20$",
    sellingPerGramm: "162.54$",
    weight: "5Г",
    metal: "Золото",
    country: "Швейцарія",
    mader: "Argor-Heraeus",
    status: "Є в наявності",
    id: 21,
    idShow: 96325,
    totalPrice: "754.49$",
    sellingPrice: "722.55$",
  },
  {
    name: "Подарунковий золотий зливок Argor-Heraeus 5",
    photo: "photos/goldTry.jpg",
    buyIngPricePerGramm: "147.20$",
    sellingPerGramm: "162.54$",
    weight: "5Г",
    metal: "Золото",
    country: "Швейцарія",
    mader: "Argor-Heraeus",
    status: "Є в наявності",
    id: 22,
    idShow: 96847,
    totalPrice: "754.49$",
    sellingPrice: "722.55$",
  },
  {
    name: "Подарунковий золотий зливок Argor-Heraeus 5",
    photo: "photos/goldTry.jpg",
    buyIngPricePerGramm: "147.20$",
    sellingPerGramm: "162.54$",
    weight: "5Г",
    metal: "Золото",
    country: "Швейцарія",
    mader: "Argor-Heraeus",
    status: "Є в наявності",
    id: 23,
    idShow: 25010,
    totalPrice: "754.49$",
    sellingPrice: "722.55$",
  },
  {
    name: "Подарунковий золотий зливок Argor-Heraeus 5",
    photo: "photos/goldTry.jpg",
    buyIngPricePerGramm: "147.20$",
    sellingPerGramm: "162.54$",
    weight: "5Г",
    metal: "Золото",
    country: "Швейцарія",
    mader: "Argor-Heraeus",
    status: "Є в наявності",
    id: 24,
    idShow: 87975,
    totalPrice: "754.49$",
    sellingPrice: "722.55$",
  },
  {
    name: "Подарунковий золотий зливок Argor-Heraeus 5",
    photo: "photos/goldTry.jpg",
    buyIngPricePerGramm: "147.20$",
    sellingPerGramm: "162.54$",
    weight: "5Г",
    metal: "Золото",
    country: "Швейцарія",
    mader: "Argor-Heraeus",
    status: "Є в наявності",
    id: 25,
    idShow: 85749,
    totalPrice: "754.49$",
    sellingPrice: "722.55$",
  },
  {
    name: "Подарунковий золотий зливок Argor-Heraeus 5",
    photo: "photos/goldTry.jpg",
    buyIngPricePerGramm: "147.20$",
    sellingPerGramm: "162.54$",
    weight: "5Г",
    metal: "Золото",
    country: "Швейцарія",
    mader: "Argor-Heraeus",
    status: "Є в наявності",
    id: 26,
    idShow: 27848,
    totalPrice: "754.49$",
    sellingPrice: "722.55$",
  },
  {
    name: "Подарунковий золотий зливок Argor-Heraeus 5",
    photo: "photos/goldTry.jpg",
    buyIngPricePerGramm: "147.20$",
    sellingPerGramm: "162.54$",
    weight: "5Г",
    metal: "Золото",
    country: "Швейцарія",
    mader: "Argor-Heraeus",
    status: "Є в наявності",
    id: 27,
    idShow: 84765,
    totalPrice: "754.49$",
    sellingPrice: "722.55$",
  },
  {
    name: "Подарунковий золотий зливок Argor-Heraeus 5",
    photo: "photos/goldTry.jpg",
    buyIngPricePerGramm: "147.20$",
    sellingPerGramm: "162.54$",
    weight: "5Г",
    metal: "Золото",
    country: "Швейцарія",
    mader: "Argor-Heraeus",
    status: "Є в наявності",
    id: 28,
    idShow: 39754,
    totalPrice: "754.49$",
    sellingPrice: "722.55$",
  },
  {
    name: "Подарунковий золотий зливок Argor-Heraeus 5",
    photo: "photos/goldTry.jpg",
    buyIngPricePerGramm: "147.20$",
    sellingPerGramm: "162.54$",
    weight: "5Г",
    metal: "Золото",
    country: "Швейцарія",
    mader: "Argor-Heraeus",
    status: "Є в наявності",
    id: 29,
    idShow: 71654,
    totalPrice: "754.49$",
    sellingPrice: "722.55$",
  },
  {
    name: "Подарунковий золотий зливок Argor-Heraeus 5",
    photo: "photos/goldTry.jpg",
    buyIngPricePerGramm: "147.20$",
    sellingPerGramm: "162.54$",
    weight: "5Г",
    metal: "Золото",
    country: "Швейцарія",
    mader: "Argor-Heraeus",
    status: "Є в наявності",
    id: 30,
    idShow: 18765,
    totalPrice: "754.49$",
    sellingPrice: "722.55$",
  },
  {
    name: "Подарунковий золотий зливок Argor-Heraeus 5",
    photo: "photos/goldTry.jpg",
    buyIngPricePerGramm: "147.20$",
    sellingPerGramm: "162.54$",
    weight: "5Г",
    metal: "Золото",
    country: "Швейцарія",
    mader: "Argor-Heraeus",
    status: "Є в наявності",
    id: 31,
    idShow: 38146,
    totalPrice: "754.49$",
    sellingPrice: "722.55$",
  },
  {
    name: "Подарунковий золотий зливок Argor-Heraeus 5",
    photo: "photos/goldTry.jpg",
    buyIngPricePerGramm: "147.20$",
    sellingPerGramm: "162.54$",
    weight: "5Г",
    metal: "Золото",
    country: "Швейцарія",
    mader: "Argor-Heraeus",
    status: "Є в наявності",
    id: 32,
    idShow: 42510,
    totalPrice: "754.49$",
    sellingPrice: "722.55$",
  },
  {
    name: "Подарунковий золотий зливок Argor-Heraeus 5",
    photo: "photos/goldTry.jpg",
    buyIngPricePerGramm: "147.20$",
    sellingPerGramm: "162.54$",
    weight: "5Г",
    metal: "Золото",
    country: "Швейцарія",
    mader: "Argor-Heraeus",
    status: "Є в наявності",
    id: 33,
    idShow: 28577,
    totalPrice: "754.49$",
    sellingPrice: "722.55$",
  },
  {
    name: "Подарунковий золотий зливок Argor-Heraeus 5",
    photo: "photos/goldTry.jpg",
    buyIngPricePerGramm: "147.20$",
    sellingPerGramm: "162.54$",
    weight: "5Г",
    metal: "Золото",
    country: "Швейцарія",
    mader: "Argor-Heraeus",
    status: "Є в наявності",
    id: 34,
    idShow: 27481,
    totalPrice: "754.49$",
    sellingPrice: "722.55$",
  },
];

/*
          <div class="borderImg">
            <img class="imgBuyPage" src="photos/goldTry.jpg" alt="#" />
          </div>
          <div class="secondItem">
            <h3 class="deccriptionOrder">
              Подарунковий золотий зливок <br />
              Argor-Heraeus 5 г
            </h3>
            <div class="valueLine">
              <span class="ByuingLine">Курс покупки</span>
              <span class="priceByuingPage">144.48 $ /г</span>
            </div>
            <div class="valueLine2">
              <span class="ByuingLine2">Курс продажу</span>
              <span class="priceByuingPage2">162.54 $ /г</span>
            </div>
            <p class="isPresent">Є в наявності</p>

            <button class="buy">Оформити Замовлення</button>

            <h2 class="plusInfo">Додаткова інформація</h2>
            <ul class="dopInfo">
              <li class="lisByuingPage1">
                <div class="parametr">Ціна покупки:</div>
                <div>722.40$</div>
              </li>
              <li class="lisByuingPage1">
                <div class="parametr">Ціна Продажу:</div>
                <div>722.40$</div>
              </li>
              <li class="lisByuingPage2">
                <div class="parametr">Маса:</div>
                <div>5г</div>
              </li>
              <li class="lisByuingPage3">
                <div class="parametr">Метал:</div>
                <div>Золото</div>
              </li>
              <li class="lisByuingPage4">
                <div class="parametr">Країна:</div>
                <div>Швейцарія</div>
              </li>
              <li class="lisByuingPage5">
                <div class="parametr">Виробник:</div>
                <div>Argor-Heraeus</div>
              </li>
              <li class="lisByuingPage6">
                <div class="parametr">Статус запасів:</div>
                <div>Є в наявності</div>
              </li>
            </ul> */

            
            // console.log('hello');
            import {newVariant} from './comodity.js'
            // console.log(newDescision);

            console.log(newVariant);
            

            
            
            // export const buyListToex = 2;
            
            
            const toPushAndMakeOrder = document.querySelector(".toPushAndMakeOrder");
            
            const buyList = document.querySelectorAll(".buyList");
            export const newDescision = document.querySelector(".toPushAndMakeOrder");
            console.log(document.querySelector(".toPushAndMakeOrder"));
            

// buyList.forEach((btn) => {
//   btn.addEventListener("click", (event) => {
//     const idBtn = Number.parseInt(btn.id);
//     console.log(catalog[idOfBtn].name);

//     // event.preventDefault();

// toPushAndMakeOrder.innerHTML = `
    
    
//     `;
//   });
// });
