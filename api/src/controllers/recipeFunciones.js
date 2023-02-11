const { Op } = require("sequelize");
const {Recipe,DietType} = require('../db.js');

const { getRecipesFromApi, getRecipeDetail,getDataApi} = require('../helpers/recipeUtils.js')


const buscarPorNombre = async(name)=>{
  const statement={
    include:{
      model:DietType,
      through: {
        attributes: []   /// para que no me traiga los timestamps
      }
    },
  };
  name? statement.where={
        name:{[Op.iLike]:`%${name}%`},
    }: null

  const bd = await Recipe.findAll(statement)

  let api = await getRecipesFromApi()
   name ?api = api.filter(element => element.name.toLowerCase().includes(name.toLowerCase())):null

  
  return [...bd, ...api];

}



const buscarPorId = async (id)=>{
  let info;

    if (id.length > 4) {

      info = await getRecipeDetail(id)

    } else {

      info = await Recipe.findByPk(id,{
        include:{
          model:DietType,
          attributes:["name"],
          through: {
            attributes: []
          }
        },
      }); 
      
      const test = info.dietTypes.map(el=>el.name);

      // info.dataValues.dietTypes = '2'


    }

    !info? info="No existe ninguna receta con ese id, bro" : null


    return info;
 
}



const obtainDiets = async()=>{
    
  const apiData = await getDataApi();

  dietsRaw = apiData.map(el=> el.diets)

  diets = dietsRaw.reduce((acc,el)=>Array.from(new Set([...acc,...el])),[])

  diets = diets.map(e=> e =  e[0].toUpperCase() + e.substring(1)) 



  diets.forEach(element => {
    DietType.findOrCreate({
      where:{
        name:element
      }
    })
  });

  const allDiets = await DietType.findAll()

  return allDiets;

}




const spawnRecipe = async(body) => {
  try {
   
    const dietTypes = body.dietTypes;

    const newRecipe =  await Recipe.create(body);

    await obtainDiets()

    await newRecipe.addDietTypes(dietTypes)

    return newRecipe;


  } catch (error) {

    if (error.message.includes('duplicada')) {
        const error = new Error('Ya existe esta receta');
        error.status= 406;
        throw error
    } else{
        throw error
    }
  }
}








module.exports = {
  buscarPorNombre,
  buscarPorId,
  spawnRecipe,
  obtainDiets,
}