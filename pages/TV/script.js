import { CreateItem } from "../../components/createItems";
import { makeFooter, makeHeader } from "../../components/required";
import { getData } from "../../libs/http";
import { reload } from "../../libs/utils";
makeFooter()
makeHeader()


getData('goods')
.then(res => {
    let category = res.data.filter(item => item.type == 'TV')
    reload(category, 'TV', CreateItem)
})
.catch(error => console.error(error)
)