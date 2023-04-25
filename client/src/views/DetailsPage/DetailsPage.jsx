import style from './DetailsPage.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getRecipeDetail } from '../../redux/actions/actions';
import { Link } from 'react-router-dom';
import leftArrrow from '../../assets/left_arrow_morado.svg';
import blackArrowIcon from '../../assets/black_circle_arrow.svg'
import whiteArrowIcon from '../../assets/white_circle_arrow.svg'
import Loading from '../../components/Loading/Loading';
import { useState } from 'react';
import Footer from '../../components/Footer/Footer';




const darkStyle = {
    background: "#181517",
    color: "white"
}



const DetailsPage = (props) =>{

    const [loading,setLoading] = useState(true)

    const dispatch = useDispatch();

    const Diet = useSelector(e=>e.recipeDetail)

    const darkMode = useSelector(e=>e.DarkMode)


    useEffect(()=>{
        const ascynFuntion = async() =>{
            await   dispatch(getRecipeDetail(props.location))
            setLoading(false)

        }
        
        ascynFuntion()

    },[])

    const putSummary=(e)=>{
        if (e) e.innerHTML = Diet.resumenDelPlato
    }

    const putStepByStep = (e) =>{
        if(e) e.innerHTML = Diet.stepByStep
    }




    if (loading) {
        return <Loading/>
    } else{

        return(
            <div style={darkMode?darkStyle:undefined} id={style.Main} >
                <Link className={style.back} to='/home'><img src={leftArrrow} alt="leftArrow" /> </Link>
                <main id={style.MainDetails} className={darkMode?style.dark:undefined}>
                    
    
                    <h1>{Diet.name}</h1>
                    <div id={style.healthScoreContainer}>
                      <strong id={style.strong}>HealthScore: {Diet.healthScore}</strong>
                    </div>
    
    
                    <div id={style.sectionTop}>
                        <div>
                            <img id={style.img} src={Diet.imgUrl?Diet.imgUrl:'https://media.istockphoto.com/id/1223335636/es/vector/icono-vectorial-de-plato-en-estilo-plano-de-moda-bandeja-de-icono-de-la-comida-icono-del.jpg?s=170667a&w=0&k=20&c=wONmqlav5H61gqdNnEJfVL9TCnr9IDCmZ9jNFM7wRik='} alt="Img De referencia" />
                        </div>
                        <section>
                            <h2>Description</h2>
                            <p id={style.summary} ref={putSummary} className={darkMode?style.dark:undefined}></p>
                        </section>
                        
                    </div>
    
    
    
                    <div id={style.sectionBot} >
    
                        {Diet.stepByStep && <aside>
                            
                            <h2>Step by Step</h2>
                            <p ref={putStepByStep}></p>
                        </aside>}
                      
                        <section>
    
                            {Diet.dietTypes &&<div >
                                 <h2>Diets types</h2>
    
                                <ul >
                                     {Diet.dietTypes && Diet.dietTypes.map(e=> <div className={style.containerLi}> <img className={style.arrowIcon} src={darkMode?whiteArrowIcon:blackArrowIcon} alt="" /> <li>{e}</li> </div>)}
                                </ul>
                            </div>}
                           
                            {Diet.dishTypes &&<div>
                                <h2>Dishes types</h2>
                                <ul >
                                        {Diet.dishTypes && Diet.dishTypes.map(e=> <div className={style.containerLi}><img className={style.arrowIcon} src={darkMode?whiteArrowIcon:blackArrowIcon} alt="Arro icon" /> <li>{e}</li> </div> )}
                                 </ul>
                            </div>}
                        </section>
                    </div>
                   
                </main>  
                <Footer></Footer>
            </div>
        )
    };

    }
        
   

    

export default DetailsPage;