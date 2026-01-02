const btnsOpenOrder = document.querySelectorAll(".buyList");

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
            <li class="contsctsNav"><a href="#">контакти</a></li>
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
    </footer>`

btnsOpenOrder.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    document.body.innerHTML = orderOnMain;
  });
});


