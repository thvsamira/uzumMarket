// import { Genres } from "./components/genres";
import { CreateItem } from "./components/createItems";
// import { MakeCatalog } from "./components/modal";
import { makeFooter, makeHeader, modal} from "./components/required";
import { getData } from "./libs/http";
import { mainSwiper, reload } from "./libs/utils";

modal()
makeHeader()
mainSwiper()
makeFooter()

// const form = document.forms[0]
// const inputs = document.querySelectorAll('.required')

// form.onsubmit = (e) =>  {
//   e.preventDefault()

//   let user = {}
//   let fn = new FormData(form)
//   let token = generateToken();
//   let userId= localStorage.getItem('userId')

//   fn.forEach((value, key) => {
//     user[key] = value;
//   })
//   console.log(user);

// }

// function generateToken() {
//   const characters = "ADYUGKGLkhjgguaihfuuoh868658780"

//   let res = ""
//   for (let i = 0; i < 10; i++) {
//       let random = Math.floor(Math.random() * characters.length)
//       res += characters[random]
//   }
//   return res;
// }


getData('goods')
  .then(res => {    
        const categorizedGoods = {
            furniture: res.data.filter(item => item.type === 'furniture'),
            audio: res.data.filter(item => item.type === 'audio'),
            TV: res.data.filter(item => item.type === 'TV'),
            kitchen: res.data.filter(item => item.type === 'kitchen'),
            PC: res.data.filter(item => item.type === 'PC')
          };
        reload(categorizedGoods.furniture.slice(0,5), 'furniture', CreateItem)  
        reload(categorizedGoods.audio.slice(0,5), 'audio', CreateItem)  
        reload(categorizedGoods.TV.slice(0,5), 'TV', CreateItem)  
        reload(categorizedGoods.kitchen.slice(0,5), 'kitchen', CreateItem)  
        reload(categorizedGoods.PC.slice(5,10), 'PC', CreateItem)  
        // reload(res.data, 'dropdown', MakeCatalog)
      })
  .catch(error => console.error(error))
