import { CHANGE_ORDER, GET_ALL_RECIPES, GET_RECIPE_DETAILS, GET_DIETS, PAGINADO, RECIPES_BY_DIET, STATE_OF_SEARCH_BAR, LOADING_CARDS_CONTAINER, DARK_MODE, SET_WIDTH_DEVICE } from "../actions/actions-types";
import { paginado } from "../../helpers/home.helpers";
import { funcionOrdenamiento, searchByDiet,} from "../../helpers/reducer.helpers";

const initialState = {
     widthDevice: window.innerWidth,
     allRecipes : [],
     recipesToShow: [],
     diets:[],
     stateOfSearchBar:'',
     orderType:0,
     reserva:[],
     recipeDetail:{},
     loadings:{
        cardsContainer:true,
     },
     DarkMode: false
};


const rootReducer = (state = initialState, action)=>{
    switch (action.type) {
        case SET_WIDTH_DEVICE:
            return{
                ...state,
                widthDevice:action.payload,
            }
        
        case GET_ALL_RECIPES:
            let pay = action.payload
            if(state.orderType !== 0) pay = funcionOrdenamiento(state.orderType, pay);   // para conservar el tipo de ordenamiento
            return {
                ...state,
                allRecipes: pay,
                reserva: pay
            };

        case GET_DIETS:
            return{
                ...state,
                diets: action.payload
            };

        case PAGINADO:
            const allRecipes=state.allRecipes;
            const foo=paginado( allRecipes , action.payload[0],action.payload[1] )
            return{
                ...state,
                recipesToShow:foo
            };

        case STATE_OF_SEARCH_BAR:
            return{
                ...state,
                stateOfSearchBar:action.payload
            };

        case RECIPES_BY_DIET:

            let resul= searchByDiet(state.allRecipes, action.payload);
            if(state.orderType !== 0) resul = funcionOrdenamiento(state.orderType, resul);   // para conservar el tipo de ordenamiento
            return{
                ...state,
                allRecipes:resul,
                reserva:resul,
            };

        case CHANGE_ORDER:
            const nuevoOrdenamiento = action.payload!==0 ? funcionOrdenamiento(action.payload, state.allRecipes) : state.reserva;
            return{
                ...state,
                orderType:action.payload,
                allRecipes : nuevoOrdenamiento
            };

        case GET_RECIPE_DETAILS:
            return{
                ...state,
                recipeDetail:action.payload
            };

        case LOADING_CARDS_CONTAINER:
            return{
                ...state,
                loadings:{...state.loadings, cardsContainer : action.payload}
            }

        case DARK_MODE:
            return{
                ...state,
                DarkMode: !state.DarkMode
            }

        default:
            return{
                ...state
            };
    };

};


export default rootReducer;