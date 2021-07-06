const  axios  = require("axios")
const Drink=require('../models/api.models')

const getDataFromApi =(request,reponse)=>{
    const apiUrl ='https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic'
  axios.get(apiUrl).then(response=>{
    const responseData = response.data.drinks.map(obj=>new Drink(obj));
    // console.log(response.data.drinks);
    // console.log(response.json(responseData));
    reponse.send(responseData)
   }).catch(error=>{
    reponse.send(error)
   })

}

module.exports=getDataFromApi