import axios from "axios";
 let url = "http://localhost:8080"

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


async function deleteUser(path) {
   try {
      let res = await axios.delete(`${url}/${path}`)
      return res
   } catch (error) {
        console.error(error);
   }
  
}



export{ getData, postData, deleteUser}