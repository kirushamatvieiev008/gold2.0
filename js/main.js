const btnsOpenOrder = document.querySelectorAll(".buyList");
const buyListInnerImg = document.querySelectorAll(".buyListInnerImg");

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

const orderOnMain = `<header>
      <div class="backHeader">
        <div class="container">
          <ul class="hatInfo">
            <li><div>Пн-Пт, 10:00-18:00</div></li>
            <li><a class="phoneToCall" href="#">09711111111</a></li>
            <li><a class="linkTg" href="#">@kyt_gold</a></li>
          </ul>
        </div>
      </div>
      <div class="backNav">
        <nav class="navigation">
          <!-- <div class="container"> -->
          <img class="logoHeader" src="./photos/logo.png" alt="#" />
          <ul class="ulNav">
            <li class="main"><a href="index.html">Головна</a></li>
            <li class="aboutUs"><a href="#">про нас</a></li>
            <li class="prices"><a href="products.html">каталог</a></li>
            <li class="sales"><a href="#">акції</a></li>
            <li class="contsctsNav"><a href="contacts.html">контакти</a></li>
          </ul>
          <!-- </div> -->
        </nav>
      </div>
    </header>
    <main>
      <div class="container containerorder">
        <div class="toPushAndMakeOrder red">
          <div class="positionating">
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
              </ul>
            </div>
            <div class="modal">
              <button class="closeModalBtn">
                <svg class="closeSvg">
                  <use href="photos/close.svg"></use>
                </svg>
              </button>
              <h3 class="modalHeader">оберіть спосіб оформлення замовлення</h3>
              <ul class="typesOf">
                <li>
                  <button class="makeOrderbyPhone" type="button">
                    зробити замовлення по телефону
                  </button>
                </li>
                <li>
                  <button class="makeOrderbyTg" type="button">
                    зробити замовлення через телеграм
                  </button>
                </li>
                <li>
                  <button class="makeOrderbyInst" type="button">
                    зробити замовлення через інстаграм
                  </button>
                </li>
              </ul>
              <a class="conectionSource phoneSource" href="#">0971111111</a>
              <a class="conectionSource tgSource" href="#">telegrammLink</a>
              <a class="conectionSource instSource" href="#">instaLink</a>
              <button class="help">?</button>
              <p class="helpInfo">
                для того що б закінчити замовлення вам необхідно подзвонити по
                номеру телефу що зазначений вище та повідомити індекс товару,
                також повідомте його кількість
              </p>
            </div>
          </div>
        </div>
        <div class="backDrop"></div>
        
        <div class="IDProduct">Product ID:<span>25878</span></div>
        <h2 class="anotherProduct">Інші товари</h2>
        <ul class="onotherProductsList">
          <li>
            <img
              class="imgShowlistBuyPage"
              src="./photos/goldTry.jpg"
              alt="#"
              />
              <h2 class="descriptionListBuyPage">
                Подарунковий золотий зливок Argor- <br />Heraeus 5
              </h2>
              <div class="flexItem">
                <p>Курс покупки</p>
                <p>147.20 $ /г</p>
              </div>
            <button class="buyList">Детальніше</button><br />
            <button class="buyList">Купити</button>
          </li>
          <li>
            <img
            class="imgShowlistBuyPage"
            src="./photos/goldTry.jpg"
              alt="#"
              />
            <h2 class="descriptionListBuyPage">
              Подарунковий золотий зливок Argor-<br />Heraeus 5
            </h2>
            <div class="flexItem">
              <p>Курс покупки</p>
              <p>147.20 $ /г</p>
            </div>
            <button class="buyList">Детальніше</button><br />
            <button class="buyList">Купити</button>
          </li>
          <li>
            <img
            class="imgShowlistBuyPage"
            src="./photos/goldTry.jpg"
            alt="#"
            />
            <h2 class="descriptionListBuyPage">
              Подарунковий золотий зливок Argor-<br />Heraeus 5
            </h2>
            <div class="flexItem">
              <p>Курс покупки</p>
              <p>147.20 $ /г</p>
            </div>
            <button class="buyList">Детальніше</button><br />
            <button class="buyList">Купити</button>
          </li>
        </ul>
      </div>
    </main>

    <footer>
      <div class="container">
        <div class="line"></div>
        <ul class="listFooter">
          <li>
            <p>© 2025. All Rights Reserved.</p>
          </li>
          <li>
            <ul class="inforeturn">
              <li><a href="#">Обмін і повернення</a></li>
              <li><a href="#">Оплата і доставка</a></li>
            </ul>
          </li>
          <li>
            <ul class="listSocmedia">
              <li>
                <a class="linksSocmedia1" href="#">
                  <svg class="ttSvg">
                    <use
                    href="photos/svgs/inst.svg"
                    width="20"
                    height="20"
                    ></use>
                  </svg>
                </a>
              </li>
              <li>
                <a class="linksSocmedia1" href="#">
                  <svg class="ttSvg">
                    <use href="photos/svgs/tt.svg" width="20" height="20"></use>
                  </svg>
                </a>
              </li>
              <li>
                <a class="linksSocmedia3" href="#">
                  <svg class="ttSvg">
                    <use href="photos/svgs/tg.svg" width="20" height="20"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </footer>`;

btnsOpenOrder.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    document.body.innerHTML = orderOnMain;
    // console.log(btn.parentElement.id);
    document.body.innerHTML = `<header>
      <div class="backHeader">
        <div class="container">
          <ul class="hatInfo">
            <li><div>Пн-Пт, 10:00-18:00</div></li>
            <li><a class="phoneToCall" href="#">09711111111</a></li>
            <li><a class="linkTg" href="#">@kyt_gold</a></li>
          </ul>
        </div>
      </div>
      <div class="backNav">
        <nav class="navigation">
          <!-- <div class="container"> -->
          <img class="logoHeader" src="./photos/newLogoKashtan.jpeg" alt="#" />
          <ul class="ulNav">
            <li class="main"><a href="index.html">Головна</a></li>
            <li class="aboutUs"><a href="#">про нас</a></li>
            <li class="prices"><a href="./products.html">каталог</a></li>
            <li class="sales"><a href="./buyPage.html">Продати золоті вироби</a></li>
            <li class="contsctsNav"><a href="./contacts.html">контакти</a></li>
          </ul>
          <!-- </div> -->
        </nav>
      </div>
    </header>
    <main>
      <div class="container containerorder">
        <div class="toPushAndMakeOrder red">
          <div class="positionating">
            <div class="borderImg">
              <img class="imgBuyPage" src="${
                catalog[btn.parentElement.id].photo
              }" alt="#" />
            </div>
            <div class="secondItem">
              <h3 class="deccriptionOrder">
                ${catalog[btn.parentElement.id].name}
              </h3>
              <div class="valueLine">
                <span class="ByuingLine">Курс покупки</span>
                <span class="priceByuingPage">${
                  catalog[btn.parentElement.id].buyIngPricePerGramm
                }/г</span>
              </div>
              <div class="valueLine2">
                <span class="ByuingLine2">Курс продажу</span>
                <span class="priceByuingPage2">${
                  catalog[btn.parentElement.id].sellingPerGramm
                } /г</span>
              </div>
              <p class="isPresent">Є в наявності</p>
              
              <button class="buy">Оформити Замовлення</button>
              
              <h2 class="plusInfo">Додаткова інформація</h2>
              <ul class="dopInfo">
                <li class="lisByuingPage1">
                  <div class="parametr newparametr1">Ціна покупки:</div>
                  <div>${catalog[btn.parentElement.id].totalPrice}</div>
                </li>
                <li class="lisByuingPage1">
                  <div class="parametr newparametr2">Ціна Продажу:</div>
                  <div>${catalog[btn.parentElement.id].sellingPrice}</div>
                </li>
                <li class="lisByuingPage2">
                  <div class="parametr newparametr3">Маса:</div>
                  <div>${catalog[btn.parentElement.id].weight}</div>
                </li>
                <li class="lisByuingPage3">
                  <div class="parametr newparametr4">Метал:</div>
                  <div>${catalog[btn.parentElement.id].metal}</div>
                </li>
                <li class="lisByuingPage4">
                  <div class="parametr newparametr5">Країна:</div>
                  <div>${catalog[btn.parentElement.id].country}</div>
                </li>
                <li class="lisByuingPage5">
                  <div class="parametr newparametr6">Виробник:</div>
                  <div>${catalog[btn.parentElement.id].mader}</div>
                </li>
                <li class="lisByuingPage6">
                  <div class="parametr">Статус запасів:</div>
                  <div>Є в наявності</div>
                </li>
              </ul>
            </div>
            <div class="modal">
              <button class="closeModalBtn">
                <svg class="closeSvg">
                  <use href="photos/close.svg"></use>
                </svg>
              </button>
              <h3 class="modalHeader">оберіть спосіб оформлення замовлення</h3>
              <ul class="typesOf">
                <li>
                  <button class="makeOrderbyPhone" type="button">
                    зробити замовлення по телефону
                  </button>
                </li>
                <li>
                  <button class="makeOrderbyTg" type="button">
                    зробити замовлення через телеграм
                  </button>
                </li>
                <li>
                  <button class="makeOrderbyInst" type="button">
                    зробити замовлення через інстаграм
                  </button>
                </li>
              </ul>
              <a class="conectionSource phoneSource" href="#">0971111111</a>
              <a class="conectionSource tgSource" href="#">telegrammLink</a>
              <a class="conectionSource instSource" href="#">instaLink</a>
              <button class="help">?</button>
              <p class="helpInfo">
                для того що б закінчити замовлення вам необхідно подзвонити по
                номеру телефу що зазначений вище та повідомити індекс товару,
                також повідомте його кількість
              </p>
            </div>
          </div>
        </div>
        <div class="backDrop"></div>
        
        <div class="IDProduct">Product ID:<span class="idNumbers">${
          catalog[btn.parentElement.id].idShow
        }</span></div>
        <h2 class="anotherProduct">Інші товари</h2>
        <ul class="onotherProductsList">
          <li id="5">
            <img
              class="imgShowlistBuyPage"
              src="./photos/goldTry.jpg"
              alt="#"
              />
              <h2 class="descriptionListBuyPage">
                Подарунковий золотий зливок Argor- <br />Heraeus 5
              </h2>
              <div class="flexItem">
                <p>Курс покупки</p>
                <p>147.20 $ /г</p>
              </div>
            <button class="buyListInside">Детальніше</button><br />
            <button class="buyListInside">Купити</button>
          </li>
          <li id="6">
            <img
            class="imgShowlistBuyPage"
            src="./photos/goldTry.jpg"
              alt="#"
              />
            <h2 class="descriptionListBuyPage">
              Подарунковий золотий зливок Argor-<br />Heraeus 5
            </h2>
            <div class="flexItem">
              <p>Курс покупки</p>
              <p>147.20 $ /г</p>
            </div>
            <button class="buyListInside">Детальніше</button><br />
            <button class="buyListInside">Купити</button>
          </li>
          <li id="7">
            <img
            class="imgShowlistBuyPage"
            src="./photos/goldTry.jpg"
            alt="#"
            />
            <h2 class="descriptionListBuyPage">
              Подарунковий золотий зливок Argor-<br />Heraeus 5
            </h2>
            <div class="flexItem">
              <p>Курс покупки</p>
              <p>147.20 $ /г</p>
            </div>
            <button class="buyListInside">Детальніше</button><br />
            <button class="buyListInside">Купити</button>
          </li>
        </ul>
      </div>
    </main>

    <footer>
      <div class="container">
        <div class="line"></div>
        <ul class="listFooter">
          <li>
            <p>© 2025. All Rights Reserved.</p>
          </li>
          <li>
            <ul class="inforeturn">
              <li><a href="#">Обмін і повернення</a></li>
              <li><a href="#">Оплата і доставка</a></li>
            </ul>
          </li>
          <li>
            <ul class="listSocmedia">
              <li>
                <a class="linksSocmedia1" href="#">
                  <svg class="ttSvg">
                    <use
                    href="photos/svgs/inst.svg"
                    width="20"
                    height="20"
                    ></use>
                  </svg>
                </a>
              </li>
              <li>
                <a class="linksSocmedia1" href="#">
                  <svg class="ttSvg">
                    <use href="photos/svgs/tt.svg" width="20" height="20"></use>
                  </svg>
                </a>
              </li>
              <li>
                <a class="linksSocmedia3" href="#">
                  <svg class="ttSvg">
                    <use href="photos/svgs/tg.svg" width="20" height="20"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </footer>`;

    const buyListInside = document.querySelectorAll(".buyListInside");
    const imgBuyPage = document.querySelector(".imgBuyPage");
    const deccriptionOrder = document.querySelector(".deccriptionOrder");
    const priceByuingPage = document.querySelector(".priceByuingPage");
    const priceByuingPage2 = document.querySelector(".priceByuingPage2");
    const newparametr1 = document.querySelector(".newparametr1");
    const newparametr2 = document.querySelector(".newparametr2");
    const newparametr3 = document.querySelector(".newparametr3");
    const newparametr4 = document.querySelector(".newparametr4");
    const newparametr5 = document.querySelector(".newparametr5");
    const newparametr6 = document.querySelector(".newparametr6");
    const idNumbers = document.querySelector(".idNumbers");

    buyListInside.forEach((btn) => {
      btn.addEventListener("click", (event) => {
        const liparent = btn.parentElement.id;
        imgBuyPage.source = `${catalog[liparent].photo}`;
        deccriptionOrder.textContent = catalog[liparent].name;
        priceByuingPage.textContent = catalog[liparent].buyIngPricePerGramm;
        priceByuingPage2.textContent = catalog[liparent].sellingPerGramm;
        newparametr1.textContent = catalog[liparent].totalPrice;
        newparametr2.textContent = catalog[liparent].sellingPrice;
        newparametr6.textContent = catalog[liparent].mader;
        newparametr5.textContent = catalog[liparent].country;
        newparametr4.textContent = catalog[liparent].metal;
        newparametr3.textContent = catalog[liparent].weight;
        idNumbers.textContent = catalog[liparent].idShow;
      });
    });
    // console.log(btn.parentElement.index);

    const btnOpenModal = document.querySelector(".buy");
    const modal = document.querySelector(".modal");
    const backDrop = document.querySelector(".backDrop");
    const closeModal = document.querySelector(".closeModalBtn");

    const phoneSource = document.querySelector(".phoneSource");
    const tgSource = document.querySelector(".tgSource");
    const instSource = document.querySelector(".instSource");
    const sources = document.querySelectorAll(".conectionSource");
    const helpInfo = document.querySelector(".helpInfo");

    console.log(btnOpenModal);

    btnOpenModal.addEventListener("click", (event) => {
      event.preventDefault();
      modal.style.display = "block";
      document.body.style.overflow = "hidden";
      backDrop.style.display = "block";
    });

    closeModal.addEventListener("click", (evemt) => {
      modal.style.display = "none";
      document.body.style.overflow = "visible";
      backDrop.style.display = "none";
    });

    modal.addEventListener("click", (event) => {
      event.preventDefault();

      if (event.target.classList[0] === "makeOrderbyPhone") {
        sources.forEach((source) => {
          source.style.display = "none";
          helpInfo.style.display = "block";
          helpInfo.innerHTML = `для того що б закінчити замовлення вам необхідно подзвонити по
                номеру телефу що зазначений вище та повідомити індекс товару,
                також повідомте його кількість`;
        });
        phoneSource.style.display = "block";
      } else if (event.target.classList[0] === "makeOrderbyTg") {
        sources.forEach((source) => {
          source.style.display = "none";
          helpInfo.innerHTML = `для того що б закінчити замовлення вам необхідно перейти за посиланням та написати нашим працівникам ID товару (знаходиться трохи нижче картинки)
       і зазначити його кількість, після чого замовлення буде готове :)`;
          helpInfo.style.display = "block";
        });
        tgSource.style.display = "block";
      } else if (event.target.classList[0] === "makeOrderbyInst") {
        sources.forEach((source) => {
          source.style.display = "none";
          helpInfo.innerHTML = `для того що б закінчити замовлення вам необхідно перейти за посиланням та написати нашим працівникам ID товару (знаходиться трохи нижче картинки)
       і зазначити його кількість, після чого замовлення буде готове :)`;
          helpInfo.style.display = "block";
        });

        instSource.style.display = "block";
      }

      // console.log(event.target.classList);
    });

    backDrop.addEventListener("click", (event) => {
      modal.style.display = "none";
      document.body.style.overflow = "visible";
      backDrop.style.display = "none";
    });
  });
});

buyListInnerImg.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    document.body.innerHTML = orderOnMain;
  });
});
