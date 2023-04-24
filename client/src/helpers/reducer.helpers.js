
export function sortAZ(arr1,arr2){
    const result=[];

 
    for (const i of arr1){

        for (const receta of arr2){

           if( i === receta.name) result.push(receta)
        }
    }


    return result;
};


export function sort_1_2(arr1,arrayCompleto){
    const result=[];
    const arrCompleto = [...arrayCompleto]
    const arrHealthScore = [...arr1]


    for (const i of arrHealthScore){

        for (const receta of arrCompleto){
           const index = arrCompleto.indexOf(receta);  // sacamos el index del elemento para 'eliminarlo', ya ya no vuelva
           
           if( i === receta.healthScore) {
            result.push(receta)
            
            arrCompleto[index] = 'descartado'
        }
        }
    }



    return result;
};




export function searchByDiet(allRecipes, diet){
    const result= [];

    for(const receta of allRecipes){
        for(const dieta of receta.dietTypes){
            if(dieta.name === diet) result.push(receta)
        };
    }


    return result;

}



export const funcionOrdenamiento = (payload, recetasctuales) =>{

    const arrayCompleto = [...recetasctuales];

    let resultado;

    let arrOrdenado;

    switch (payload) {

        case 1:
            arrOrdenado = arrayCompleto.map(e=>e.healthScore).sort((a,b)=>b-a)  ///obtenemos un de healthScores de las recetas (ascendentemente)

            resultado = [...sort_1_2(arrOrdenado, arrayCompleto)]

            break;
        case 2:
            arrOrdenado = arrayCompleto.map(e=>e.healthScore).sort((a,b)=>a-b)

            resultado = [...sort_1_2(arrOrdenado, arrayCompleto)]

            break;
        case 3:
            arrOrdenado = arrayCompleto.map(e=>e.name).sort().reverse()

            resultado = [...sortAZ(arrOrdenado, arrayCompleto)]

            break;
        case 4:
            arrOrdenado = arrayCompleto.map(e=>e.name).sort()

            resultado= [...sortAZ(arrOrdenado, arrayCompleto)]
            break;
        default:
            break;
    }

    return resultado
};