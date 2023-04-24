import { changeOrder, paginado } from "../redux/actions/actions";


export const switchGlobalOrder = (orderFilter, dispatch)=>{
    const {healthScore,orderAZ} = orderFilter;

    if(healthScore === '2' && orderAZ === '2'){  dispatch(changeOrder(0)); dispatch(paginado(0,8)) }

    if(healthScore !== '2'){
        switch (healthScore) {
            case '1':
                dispatch(changeOrder(2))
                dispatch(paginado(0,8))
                break;
            case '3':
                dispatch(changeOrder(1))
                dispatch(paginado(0,8))
                break
            default:
                break;
        }
    }

    switch (orderAZ) {

        case '1':
            dispatch(changeOrder(3))
            dispatch(paginado(0,8))
            break;
        case '3':
            dispatch(changeOrder(4))
            dispatch(paginado(0,8))
            break;
        default:
            break;
    }
};


export const switchFilterOrder = (globalOrder) =>{
    switch (globalOrder) {
        case 0:
            return['2','2'];
        
        case 1:
            return['2','3'];
        case 2:
            return['2','1'];
        case 3:
            return['1','2'];
        case 4:
            return['3','2'];
        default:
            break;
    }
};
