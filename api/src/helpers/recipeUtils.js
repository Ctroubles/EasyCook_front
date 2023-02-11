const axios = require('axios') ; 

const {API_KEY} = process.env;


const getDataApi = async ()=>await axios.get(`https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5`)
    .then(response => response.data
    )
    .then(data => data.results)

const getRecipesFromApi = async ()=>{
    const apiRaw = await getDataApi()

     
    apiClean = apiRaw.map(el => {
        return {
            id : el.id,
            imgUrl:el.image,
            name : el.title,
            dietTypes: el.diets.map(e=>{return{name:e=e[0].toUpperCase()+e.substring(1)}}),
            healthScore: el.healthScore,
            // resumenDelPlato: el.summary,
            // stepByStep: el.analyzedInstructions[0]?el.analyzedInstructions[0].steps:null,
        }
    })

    return apiClean
}



const getRecipeDetail = async(id)=>{
    
    const recipeById = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`)
    .then(response => response.data)


    return   {
            id: recipeById.id,
            name: recipeById.title,
            imgUrl: recipeById.image,
            dishTypes: recipeById.dishTypes,
            dietTypes: recipeById.diets.map(e=>{return{name:e}}),
            resumenDelPlato: recipeById.summary,
            healthScore: recipeById.healthScore,
            stepByStep: recipeById.instructions,
        }
}

module.exports = {
     getRecipesFromApi,
     getRecipeDetail,
     getDataApi,
}
















// "stepByStep": [
//     {
//         "name": "",
//         "steps": [
//             {
//                 "number": 1,
//                 "step": "Rinse the cannellini beans and soak for 8 hours or overnight in several inches of water.",
//                 "ingredients": [
//                     {
//                         "id": 10716050,
//                         "name": "cannellini beans",
//                         "localizedName": "cannellini beans",
//                         "image": "cooked-cannellini-beans.png"
//                     },
//                     {
//                         "id": 14412,
//                         "name": "water",
//                         "localizedName": "water",
//                         "image": "water.png"
//                     }
//                 ],
//                 "equipment": [],
//                 "length": {
//                     "number": 480,
//                     "unit": "minutes"
//                 }
//             },
//             {
//                 "number": 2,
//                 "step": "Drain and rinse, then transfer to a medium saucepan and cover with fresh water.",
//                 "ingredients": [
//                     {
//                         "id": 14412,
//                         "name": "water",
//                         "localizedName": "water",
//                         "image": "water.png"
//                     }
//                 ],
//                 "equipment": [
//                     {
//                         "id": 404669,
//                         "name": "sauce pan",
//                         "localizedName": "sauce pan",
//                         "image": "sauce-pan.jpg"
//                     }
//                 ]
//             },
//             {
//                 "number": 3,
//                 "step": "Add the curry leaves or bay leaf and bring to a boil. Reduce heat to medium-low, cover, and simmer for 1 hour or until the beans are tender but not falling apart.",
//                 "ingredients": [
//                     {
//                         "id": 93604,
//                         "name": "curry leaves",
//                         "localizedName": "curry leaves",
//                         "image": "curry-leaves.jpg"
//                     },
//                     {
//                         "id": 2004,
//                         "name": "bay leaves",
//                         "localizedName": "bay leaves",
//                         "image": "bay-leaves.jpg"
//                     },
//                     {
//                         "id": 0,
//                         "name": "beans",
//                         "localizedName": "beans",
//                         "image": "kidney-beans.jpg"
//                     }
//                 ],
//                 "equipment": [],
//                 "length": {
//                     "number": 60,
//                     "unit": "minutes"
//                 }
//             },
//             {
//                 "number": 4,
//                 "step": "Drain and transfer to a large salad bowl.Meanwhile, snap the woody ends off of the asparagus spears and steam the spears for 6 minutes or until just tender but still retaining their crunch.",
//                 "ingredients": [
//                     {
//                         "id": 11011,
//                         "name": "asparagus",
//                         "localizedName": "asparagus",
//                         "image": "asparagus.png"
//                     }
//                 ],
//                 "equipment": [
//                     {
//                         "id": 404783,
//                         "name": "bowl",
//                         "localizedName": "bowl",
//                         "image": "bowl.jpg"
//                     }
//                 ],
//                 "length": {
//                     "number": 6,
//                     "unit": "minutes"
//                 }
//             },
//             {
//                 "number": 5,
//                 "step": "Transfer to the salad bowl.Now cook the mushrooms.",
//                 "ingredients": [
//                     {
//                         "id": 11260,
//                         "name": "mushrooms",
//                         "localizedName": "mushrooms",
//                         "image": "mushrooms.png"
//                     }
//                 ],
//                 "equipment": [
//                     {
//                         "id": 404783,
//                         "name": "bowl",
//                         "localizedName": "bowl",
//                         "image": "bowl.jpg"
//                     }
//                 ]
//             },
//             {
//                 "number": 6,
//                 "step": "Heat the oil in a large skillet over high heat. As soon as the oil is hot, drop in the mushrooms and cook, stirring constantly, for 5 minutes or until the mushrooms begin to brown and lose some of their liquid.",
//                 "ingredients": [
//                     {
//                         "id": 11260,
//                         "name": "mushrooms",
//                         "localizedName": "mushrooms",
//                         "image": "mushrooms.png"
//                     },
//                     {
//                         "id": 4582,
//                         "name": "cooking oil",
//                         "localizedName": "cooking oil",
//                         "image": "vegetable-oil.jpg"
//                     }
//                 ],
//                 "equipment": [
//                     {
//                         "id": 404645,
//                         "name": "frying pan",
//                         "localizedName": "frying pan",
//                         "image": "pan.png"
//                     }
//                 ],
//                 "length": {
//                     "number": 5,
//                     "unit": "minutes"
//                 }
//             },
//             {
//                 "number": 7,
//                 "step": "Transfer to the bowl with the asparagus.To make the dressing, combine the tarragon, lemon zest, garlic, lemon juice, olive oil and mustard in a small food processor or blender. Process until smooth.",
//                 "ingredients": [
//                     {
//                         "id": 9152,
//                         "name": "lemon juice",
//                         "localizedName": "lemon juice",
//                         "image": "lemon-juice.jpg"
//                     },
//                     {
//                         "id": 9156,
//                         "name": "lemon zest",
//                         "localizedName": "lemon zest",
//                         "image": "zest-lemon.jpg"
//                     },
//                     {
//                         "id": 11011,
//                         "name": "asparagus",
//                         "localizedName": "asparagus",
//                         "image": "asparagus.png"
//                     },
//                     {
//                         "id": 4053,
//                         "name": "olive oil",
//                         "localizedName": "olive oil",
//                         "image": "olive-oil.jpg"
//                     },
//                     {
//                         "id": 2041,
//                         "name": "tarragon",
//                         "localizedName": "tarragon",
//                         "image": "tarragon.jpg"
//                     },
//                     {
//                         "id": 2046,
//                         "name": "mustard",
//                         "localizedName": "mustard",
//                         "image": "regular-mustard.jpg"
//                     },
//                     {
//                         "id": 11215,
//                         "name": "garlic",
//                         "localizedName": "garlic",
//                         "image": "garlic.png"
//                     }
//                 ],
//                 "equipment": [
//                     {
//                         "id": 404771,
//                         "name": "food processor",
//                         "localizedName": "food processor",
//                         "image": "food-processor.png"
//                     },
//                     {
//                         "id": 404726,
//                         "name": "blender",
//                         "localizedName": "blender",
//                         "image": "blender.png"
//                     },
//                     {
//                         "id": 404783,
//                         "name": "bowl",
//                         "localizedName": "bowl",
//                         "image": "bowl.jpg"
//                     }
//                 ]
//             },
//             {
//                 "number": 8,
//                 "step": "Pour the dressing over the salad, season with salt and pepper, and toss.",
//                 "ingredients": [
//                     {
//                         "id": 1102047,
//                         "name": "salt and pepper",
//                         "localizedName": "salt and pepper",
//                         "image": "salt-and-pepper.jpg"
//                     }
//                 ],
//                 "equipment": []
//             },
//             {
//                 "number": 9,
//                 "step": "Serve at room temperature or chilled.",
//                 "ingredients": [],
//                 "equipment": []
//             }
//         ]
//     }
// ]