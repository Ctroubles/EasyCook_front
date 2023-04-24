import style from './Home.module.css'
import CardsContainer from "../../components/CardsCointainer/CardsContainer";
import SectionPaginado from "../../components/SectionPaginado/SectionPaginado"; 
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {cardsContainerLoading, getAllRecipes, stateOfSearchBar} from '../../redux/actions/actions'
import { paginado } from "../../redux/actions/actions";
import Filtros from '../../components/Filtros/Filtros';
import { useState } from 'react';
import NavBar from '../../components/NavBar/NavBar'
import Loading from '../../components/Loading/Loading';
import Footer from '../../components/Footer/Footer';

const darkStyle = {
    background: "#14021a",
};


const Home = () => {
    const dispatch = useDispatch()
    const [loading,setLoading]=useState(true)


    const stateSearchBar= useSelector(e=>e.stateOfSearchBar)

    const darkMode = useSelector(e=>e.DarkMode)

    useEffect(()=>{
        async function dispatches (){
            await  dispatch(getAllRecipes(stateSearchBar))
            
            dispatch(paginado(0,8));  

           
                setLoading(false)
            
            dispatch(cardsContainerLoading(false))
            

        }

        dispatches()

        return ()=> console.log('cleanUp')
        
    },[dispatch,stateSearchBar])

   


    if (loading) {
        return(
              <Loading/>
            )
    } else{
        return( 
            <div id={style.Body}>
                <NavBar/>
                <main style={darkMode ? darkStyle:undefined} id={style.Main} >
                    <Filtros/>
                    <div id={style.container}>
                        <CardsContainer/>
                        <SectionPaginado/>
                    </div>
                    <Footer></Footer>
                </main>
            </div>
        )
    }

 
};

export default Home;

