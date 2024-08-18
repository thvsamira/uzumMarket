import axios from "axios";
 let url = " http://localhost:3001/"

async function getData(path) {
   try {
      let res = await axios.get(`${url}/${path}`)
      return res
   } catch (error) {
      console.error(error);
   }

}

async function postData(path, body) {
   try {
      let res = await axios.post(`${url}/${path}`, body)
      return res
   } catch (error) {
      console.error(error);
   }

}

export{ getData, postData}