import { CreateItem } from "../../components/createItems";
import { makeFooter, makeHeader } from "../../components/required";
import { getData } from "../../libs/http";
import { reload } from "../../libs/utils";
makeFooter()
makeHeader()

getData('goods')
.then(res => {
    let category = res.data.filter(item => item.type === 'audio')
    reload(category, 'audio', CreateItem)
})
.catch(error => console.error(error)
)