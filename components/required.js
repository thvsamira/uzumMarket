export function makeHeader() {
    const header = document.querySelector('header')
    header.innerHTML = `
    <section class="first_header">
    <div class="container">
           <div class="header-box">
               <div class="left-header-cont">
                   <span>Город: <a href="" class="city-option">Samarkand</a></span>
                   <span class="punkt-vidachi">Пункты выдачи</span>
               </div>

               <div class="right-header-cont">
                   <a href="" class="sale-in-uzum">Продавайте на Uzum</a>
                   <a href="" class="none-decoration">Вопрос-ответ</a>
                   <a href="" class="none-decoration">Мои заказы</a>
               </div>
           </div>

    </div>
</section>

<section class="second-header">
    <div class="container">
        
        <div class="second-header">
            <div class="logo">
                <img src="/Group(2).png" alt="#">
            </div>

            <div class="dropdown">
                <button class="dropbtn">
                    <img src="" alt="">
                    Каталог
                </button>
                <div class="dropdown-content" id="dropdown">
                <a  href="/pages/furniture/" class="category">Мебель <span class="goods-numb">10 товаров</span></a>
                <a  href="/pages/PC/" class="category">Электроника <span class="goods-numb">10 товаров</span></a>
                <a  href="/pages/audio/" class="category">Наушники и аудиотехника <span class="goods-numb">10 товаров</span></a>
                <a  href="/pages/TV/" class="category">Телевизоры <span class="goods-numb">10 товаров</span></a>
                <a  href="/pages/kitchen/" class="category">Товары для кухни <span class="goods-numb">10 товаров</span></a>
                </div>
              </div>

              <form>
                <div class="form-box">
                    <input type="search"
                placeholder="Искать товары"
                name="search"
                id="search"
                >
                <button class="search-btn">
                    <img src="/Group 237728.png" alt="">
                </button>
                </div>
            </form>

            <div class="user-box active">
                <img src="/Group 237729.png" alt="">
                <span class="user-name">name</span>
            </div>

            <div class="fav-box active">
            <img src="/Untitled-5-28-128.webp" alt="">
            <a href="/pages/favourite/" class="favourite none-decoration active">Избранное</a>
            </div>
            <div class="basket-box active">
            <img src="/95-shopping-512.webp" alt="">
            <a href="/pages/basket/" class="korzina none-decoration">Корзина <span class="quantity"></span></a>
            </div>
        </div>
    </div>
</section>
    `
}

export function makeFooter() {
	let footer = document.querySelector("footer");
	footer.innerHTML = `
	
		<section class="footer">
				<div class="wrap">
					<div class="about-us">
						<h3>О нас</h3>
						<a href="#">Пункты выдачи</a>
						<a href="#">Вакансии</a>
					</div>

					<div class="users">
						<h3>Пользователям</h3>
						<a href="#">Связаться с нами</a>
						<a href="#">Вопрос - ответ</a>
					</div>

					<div class="for-entrepreneurs">
						<h3>Для предпринимателей</h3>
						<a href="#">Продавайте на Uzum</a>
						<a href="#">Вход для продавцов</a>
					</div>

					<div class="social">
						<h3>Скачать приложение</h3>
						<div class="download-app">
							<a href="#" class="appstore">
								<img src="/images/appstore.svg" alt="appstore" />
								<span>AppStore</span>
							</a>
							<a class="googleplay">
								<img src="/images/googleplay.svg" alt="googleplay" />
								<span>Google Play</span>
							</a>
						</div>

						<div class="social-links">
							<h3>Uzum в соцсетях</h3>
							<div class="social-links__apps">
								<a href="#">
									<img src="/images/socials/instagram.svg" alt="" />
								</a>

								<a href="#">
									<img src="/images/socials/telegram.svg" alt="" />
								</a>

								<a href="#">
									<img src="/images/socials/youtube.svg" alt="" />
								</a>

								<a href="#">
									<img src="/images/socials/facebook.svg" alt="" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class="footer__second">
				<div class="wrap">
					<div class="agreements">
						<div class="confidentiality">
							<a href="#">Политика конфиденциальности</a>
						</div>

						<div class="agreement">
							<a href="#">Пользовательское соглашение</a>
						</div>
					</div>

					<div class="copyright-text">
						<p>«2023© ООО «UZUM MARKET». ИНН 309376127. Все права защищены»</p>
					</div>
				</div>
			</section>

	`;
}

export function modal() {
	let modal = document.querySelector('.modal')
	modal.innerHTML = `

    <div class="modal__dialog">
      <div class="modal__content">
        <form action="#" name="account">
          <div data-close class="modal__close">&times;</div>
          <div class="modal__title">Введите ваши данные</div>
          <div class="modal__text">Отправим смс с кодом подтверждения</div>
          <input required placeholder="Ваше имя" name="name" type="text" class="modal__input required">
          <input required placeholder="Ваш номер телефона" name="phone" type="phone" class="modal__input required">
          <button class="btn btn_dark btn_min">Получить код</button>
          <p class="privacy-text">Авторизуясь, вы соглашаетесь c <a href="" class="blue-text">политикой <br>  
            обработки персональных данных</a> </p>
        </form>
      </div>
    </div>

	`

}

