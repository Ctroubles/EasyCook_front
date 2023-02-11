import axios from 'axios';
import {CHANGE_ORDER, DARK_MODE, GET_ALL_RECIPES, GET_DIETS, GET_RECIPE_DETAILS, LOADING_CARDS_CONTAINER, PAGINADO, RECIPES_BY_DIET, SET_WIDTH_DEVICE, STATE_OF_SEARCH_BAR} from './actions-types.js';


const url = "http://localhost";

export const setWidthDevice=(width)=>{
    return {type: SET_WIDTH_DEVICE, payload:width}
}



export const getAllRecipes = (name) =>{

    return async (dispatch)=>{
        const {data} = name? await axios.get(`${url}:3001/recipes?name=${name}`) : await axios.get(`${url}:3001/recipes/`)
        dispatch({type: GET_ALL_RECIPES, payload:data})
    } 
}


export const getDiets = ()=>{
    return async (dispatch)=>{
        const {data} = await axios.get(`${url}:3001/diets`);
        dispatch({type: GET_DIETS, payload: data});
    }
};

export const paginado = (start,end)=>{
    return {type: PAGINADO, payload: [start,end]} 
}


export const stateOfSearchBar= (toSearch)=>{
    return {type: STATE_OF_SEARCH_BAR, payload: toSearch}
}


export const getByDiet = (diet) =>{
    return {type: RECIPES_BY_DIET, payload:diet}
}

export const changeOrder = (orderType) => {
    return {type: CHANGE_ORDER, payload: orderType}
}


export const getRecipeDetail = (id) =>{
    return async (dispatch)=>{
        const {data} = await axios.get(`${url}:3001/recipes/${id}`)
        dispatch({type: GET_RECIPE_DETAILS, payload:data})
        
    }
};

export const cardsContainerLoading = (status)=>{
    return{type: LOADING_CARDS_CONTAINER, payload: status}
};


export const darkModeControl =() =>{
    return{type: DARK_MODE}
}