const userModel =require('../models/mongoose.model')

const makeData=(req,response)=>{
    const {strDrink,strDrinkThumb}=req.body
    const slug =strDrink.toLowerCase().split(' ').join('-');
    const newUserModel= new userModel({
        strDrink:strDrink,
        slug:slug,
        strDrinkThumb:strDrinkThumb
    })
    newUserModel.sava();
    response.json(newUserModel)

}

const getData =(req,response)=>{
    userModel.find({},(error,userData)=>{
        if (error){
            response.send(error)
        }else{
            response.send(userData)
        }
    })
}
const deleteData =async (req,response)=>{
    const slug=req.prams.slug;
    userModel.remove({slug:slug},(error,userData)=>{
        if (error){
            response.send(error)
        }else{
            userModel.find({},(error,userData)=>{
                response.send(userData)

            })
        }
    })
 
}


const updateData= async (req,response)=>{
    const strDrink=req.body;
    const slug=req.prams.slug;
    userModel.find({slug:slug},(error,userData)=>{
        if (error){
            response.send(error)
        }else{
            userData[0].strDrink=strDrink
            userData[0].save();
            userData.find({},(error,userData)=>{
                response.send(userData)
            })
        }
    })
    
}
module.exports={makeData,getData,deleteData,updateData}