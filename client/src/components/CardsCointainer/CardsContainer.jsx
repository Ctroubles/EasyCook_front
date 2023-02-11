import Card from "../Card/Card";
import styles from "./CardsContainer.module.css";
import {  useSelector } from "react-redux";
import { useEffect } from "react";
import LoadingSimple from "../LoadingSimple/LoadingSimple";


const darkStyle = {
    color: "#f3f3f3"
}


const CardsContainer =()=>{
    
    const recipesToShow = useSelector(state=>state.recipesToShow)

    const loading = useSelector(state=>state.loadings.cardsContainer)

    const darkMode = useSelector(state=>state.DarkMode);

    useEffect(() => {
        console.log("test");
      
        setTimeout(() => {
          window.scroll({
            behavior: "smooth",
            top: 0
          });
        }, 0);
      
        console.log("test2");
      }, [recipesToShow, loading]);


    if (loading) {
        return(
            <div id={styles.loadingContainer}>
                    <LoadingSimple></LoadingSimple>
            </div>
        )
    }else{
        return(
            <div className={styles.divCardsContainer} >
                {recipesToShow.length?recipesToShow.map(el=><Card id={el.id} name={el.name} healthScore={el.healthScore} diets={el.dietTypes} img={el.imgUrl?el.imgUrl:'https://media.istockphoto.com/id/1223335636/es/vector/icono-vectorial-de-plato-en-estilo-plano-de-moda-bandeja-de-icono-de-la-comida-icono-del.jpg?s=170667a&w=0&k=20&c=wONmqlav5H61gqdNnEJfVL9TCnr9IDCmZ9jNFM7wRik='} />)
                :<p style={darkMode?darkStyle:undefined} id={styles.recetaNoEncontrada}> Lo sentimos, no hay niguna receta con ese nombre :(</p>}
            </div>
        )
    }

    
};

export default CardsContainer;