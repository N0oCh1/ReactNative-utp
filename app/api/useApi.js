
const URL_POKE = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0/";



async function getPoke() {
  try{
    const response = await fetch (URL_POKE,{
      method: "GET",
    }).then(res=>res.json()).then(data=>data.results) 
   return await Promise.all (response.map(async item=>{
    return{
      name: item.name,
      detail: await getDetalle(item.url)
    }
   }))
  // eslint-disable-next-line no-unused-vars
  } catch(e){
    return "error poke"
  }

  async function getDetalle(url) {
    try{
      const response = await fetch(url,{method:"GET"}).then(res=>res.json()).then(data=>data)
      return response
    // eslint-disable-next-line no-unused-vars
    } catch(e){
      return "error detalle"
    }
    
  }
}
export {getPoke}