import { CreateItem } from "../../components/createItems";
import { makeFooter, makeHeader } from "../../components/required";
import { getData } from "../../libs/http";
import { reload } from "../../libs/utils";
makeHeader()
makeFooter()

let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// Извлекаем их ID для запроса
const favoriteIds = favorites.map(item => item.id);

getData(`goods?id=${favoriteIds}`)
    .then(res => {
       reload(res.data, 'fav-slots', CreateItem)
console.log(favorites);
    })
    .catch(error => console.error(error));
