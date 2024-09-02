import {  CreateProductElement, DisplayImg} from "../../components/createItems";
import { makeHeader } from "../../components/required";
import { getData } from "../../libs/http";
import { cartSwiper, mainSwiper, reload } from "../../libs/utils";
cartSwiper()
mainSwiper()
makeHeader()

let slotId = localStorage.getItem('slotId')
getData(`goods?id=${slotId}`)
.then(res => {
  reload(res.data, 'product-cont', CreateProductElement)
  reload(res.data, 'item-swiper', DisplayImg)
})
.catch(error => console.error(error))