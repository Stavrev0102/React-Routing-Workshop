
const baseUrl = 'http://localhost:3030/jsonstrore'
export const create = async(gameData) => {

   const response =  fetch(`${baseUrl}/games`, {
    method:'POST',
    headers:{
       'content-type':'application/json'
    },
     body:JSON.stringify(gameData)
   });

   const result = await response.json()

   return result;
}