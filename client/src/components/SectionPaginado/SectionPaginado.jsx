import style from './Section.paginado.module.css'
import arrowLeft from '../../assets/arrow-left-1-svgrepo-com.svg'
import arrowRight from '../../assets/arrow-right-1-svgrepo-com.svg'
import grayArrowRigth from '../../assets/gray_arrow-right.svg'
import grayArrowLeft from '../../assets/gray_arrow-left.svg'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { paginado } from "../../redux/actions/actions";
import { range } from '../../utils/home.utils';
import { paginado as paginadoHelper } from '../../helpers/home.helpers';







const SectionPaginado = ()=>{



    const paginadoN =  5;


    // LO DE ARRIBA PARA EL RESPONSIVE DESIGN


    const dispatch = useDispatch()

    const [hijos,setHijos] = useState()

    const [testArray, setTestArray] = useState([])


    const [currentPaginadoState, setCurrentPaginadoState] = useState([0,paginadoN]) 


    const [arrowRightStatus, setArrowRigth] = useState(true)
    const [arrowLeftStatus, setArrowLeft] = useState(false)



    const orderStatus = useSelector(e=>e.orderType)

    const allRecipesLength = useSelector(e=>e.allRecipes.length)
    const indexsNumber = Math.ceil(allRecipesLength/9)
    const indexsArray= range(1,indexsNumber)



    const indexsArrayToShow = currentPaginadoState && paginadoHelper(indexsArray,currentPaginadoState[0],currentPaginadoState[1])







    const handleButtonClickNext = ()=>{
        if(currentPaginadoState[0] +paginadoN >= indexsNumber) return
        setCurrentPaginadoState([currentPaginadoState[0]+(paginadoN + 1 ), currentPaginadoState[1]+(paginadoN +1 )])
        dispatch(paginado((currentPaginadoState[0]+paginadoN+1)*9 , ((currentPaginadoState[0]+paginadoN+1)*9) +8 ))
        setArrowLeft(true)
    }
    const handleButtonClickBefore = ()=>{
        if(currentPaginadoState[0] <= 0)  return;
        setCurrentPaginadoState([currentPaginadoState[0]-(paginadoN+1),currentPaginadoState[1]-(paginadoN+1)])
        dispatch(paginado(currentPaginadoState[0]-(paginadoN+1) , currentPaginadoState[0]+8-(paginadoN+1)))
        setArrowRigth(true)
    }
 

    const handlerClick = (e)=>{
      if(e){  const target= e.target;
        const value = target.value-1;

        const foo=value*9


        dispatch(paginado(foo,foo+8)); 

        for(const i of hijos){
            i.classList.remove(style.indicesON)
        }
        target.classList.add(style.indicesON)
    }
    }






    useEffect(()=>{

        if(currentPaginadoState[0]+ (paginadoN*2+1) >= indexsNumber)setArrowRigth(false)
        if(currentPaginadoState[0]-(paginadoN) <= 0) setArrowLeft(false)



        setTestArray(indexsArrayToShow)

      if(indexsArrayToShow && hijos) {
        
            const index1 = hijos && hijos[0];

            for(const i of hijos){
                i.classList.remove(style.indicesON)
            }
             index1?.classList.add(style.indicesON)
      }

    },[allRecipesLength,orderStatus,hijos, arrowRightStatus, arrowLeftStatus ])


    const   getChildNodes = (e)=>{
        if(e)      setHijos(e.childNodes);
    }


    return(

        <footer id={style.paginadoSection}>
           <button  disabled={!arrowLeftStatus} onClick={(e)=>handleButtonClickBefore(e)} className={style.arrows}><img className={arrowLeftStatus? undefined:style.disableArrows} src={arrowLeftStatus?arrowLeft:grayArrowLeft} alt="Arrow left" style={{}} /></button>
            <ul ref={getChildNodes}>
                {/* <input type='submit' onClick={handlerClick} className={style.indicesON} value={1} /> */}
                {testArray && testArray.map((e)=> <input type='submit' onClick={(e)=>handlerClick(e)}  value={e} />)}
            </ul>
            <button disabled={!arrowRightStatus} onClick={(e)=>handleButtonClickNext(e)} type='submit' className={style.arrows}><img className={arrowRightStatus?undefined:style.disableArrows} src={arrowRightStatus?arrowRight:grayArrowRigth} alt="Arrow right" /></button>

        </footer>
    )
};

export default SectionPaginado;