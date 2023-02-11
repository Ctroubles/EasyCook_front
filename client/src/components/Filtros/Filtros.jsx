import style from './Filtros.module.css'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import leftArrow from '../../assets/arrow-left-1-svgrepo-com.svg'
import {  getAllRecipes, getByDiet, getDiets, paginado , cardsContainerLoading } from '../../redux/actions/actions';
import { switchGlobalOrder, switchFilterOrder } from '../../helpers/Filtros.helpers';


const subirFiltro = {
    top: "-10vh"
  }

const Filtros = () =>{

    const widthDevice = useSelector(e=>e.widthDevice)

    const [scrollStatus, setScrollStatus] = useState(0)


    let prevScrollpos;
    window.onscroll = () =>{
        if (widthDevice < 1100) {
            if(prevScrollpos<window.pageYOffset) setScrollStatus(1);
            else if(prevScrollpos-10>window.pageYOffset) setScrollStatus(0);
        }
       

         prevScrollpos = window.pageYOffset;

    }

    // LO DE ARRIBA PARA EL RESPOSIVE DESIGN


    const dispatch =useDispatch()

    const [active,setActive] = useState(true) /// para aparecer y desaparacer la zona de filtros

    const globalOrder = useSelector(e=>e.orderType)

    const setFilterOrderStatus = switchFilterOrder(globalOrder)


    const [orderFilter, setOrderFilter] = useState({orderAZ:setFilterOrderStatus[0], healthScore: setFilterOrderStatus[1]})
    
    useEffect(()=>{
        dispatch(getDiets())
        setOrderFilter({orderAZ:setFilterOrderStatus[0], healthScore: setFilterOrderStatus[1]})
    },[globalOrder])


    const diets = useSelector(e=>e.diets)

    return(
        <aside id={style.Filtros} className={ active ? style.adminFiltros : undefined}  style={scrollStatus?subirFiltro:undefined}>  {/** PARA EL MOVIMIENTO DE LA SECCIÓN FILTROS */}

            <nav >

                 <select  onChange = { async(e)=> { dispatch(cardsContainerLoading(true)) ;await dispatch(getAllRecipes()) ; if(e.target.value!== 'All Diets') dispatch(getByDiet(e.target.value)) ; dispatch(paginado(0,8)) ; dispatch(cardsContainerLoading(false)) }}  >
                    <option selected value='All Diets' >All Diets</option>
                    {diets.map(e=> <option value={e.name} > {e.name} </option>)}
                 </select>

                <div id={style.healthZone}>
                    <label>HEALTH SCORE</label>
                    <div> 
                        <span id={style.spanHealthScore} >-</span>  
                        <input type="range" className={orderFilter.healthScore < 2 ? style.noSaludable  : orderFilter.healthScore > 2 ? style.saludable : undefined} onChange={(e)=>{  switchGlobalOrder({ orderAZ:'2' , healthScore:e.target.value } , dispatch)  }} min='1' max='3'  value={orderFilter.healthScore} /> 
                         <span id={style.spanHealthScore2} >+</span>  
                    </div>
                </div>
                    
                <div>
                     <label >ORDER</label>
                    
                    <div> 
                         <span className={style.spanAZ}>Z-A</span>  
                         <input type="range" id={orderFilter.orderAZ != '2' ? style.rangeBlue : undefined}  onChange={(e)=>{   switchGlobalOrder({ orderAZ:e.target.value , healthScore:'2' } , dispatch) }}  min='1' max='3' value={orderFilter.orderAZ} />
                         <span className={style.spanAZ}>A-Z</span>  </div>
                </div>


            </nav>

            <button onClick={()=>setActive(!active)}>
                 <span>F</span>
                 <span>I</span>
                 <span>L</span>
                 <span>T</span>
                 <span>E</span>
                 <span>R</span>
                 <span>S</span>
                  <img id={style.arrow} src={leftArrow} alt="" />
            </button>
       </aside>
    )
};


export default Filtros;







// { dispatch(orderA_Z()); dispatch(paginado(0,8))}