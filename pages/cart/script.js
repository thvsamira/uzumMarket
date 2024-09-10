import {  CreateProductElement, DisplayImg} from "../../components/createItems";
import { makeModal } from "../../components/modal";
import { makeFooter, makeHeader } from "../../components/required";
import { getData } from "../../libs/http";
import { cartSwiper, mainSwiper, reload, totalQuantity } from "../../libs/utils";
import { catalog,  showUser } from "../../scripts/script";
cartSwiper()
mainSwiper()
makeHeader()
makeFooter()
catalog()
totalQuantity()
makeModal()

let slotId = localStorage.getItem('slotId')
getData(`goods?id=${slotId}`)
.then(res => {
  reload(res.data, 'product-cont', CreateProductElement)
  reload(res.data, 'item-swiper', DisplayImg)
})
.catch(error => console.error(error))

let token = localStorage.getItem("token")
getData(`users?token=${token}`)
.then(res => {
  showUser(res.data[0])

})
.catch(error => console.log(error))