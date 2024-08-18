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
                <div class="dropdown-content">
                <a href="#">Link 1</a>
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

            <a href="/pages/favourite/" class="favourite none-decoration active">Избранное</a>
            <a href="" class="korzina none-decoration active">Корзина <span class="quantity">3</span></a>
        </div>
    </div>
</section>
    `
}