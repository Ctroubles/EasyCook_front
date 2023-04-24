import styles from "./LandingPage.module.css";
import StartButton from "../../components/StartButton/StartButton";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import LandingLoading from "../../components/LandingLoading/LandingLoading";


const LandingPage = () => {
    const [loading,setLoading] =useState(true)

    useEffect(()=>{
        const asyncFunction = async () =>{
            setTimeout(()=>{
                setLoading(false)
            },2500)
        }

        asyncFunction()
    })

    if (loading) {
        return(
            <LandingLoading/>
        )
    }else{
        return (
            <div>
                    <div id={styles.cover}></div>
                  <div className={styles.divLanding}>
                        <main>
                            <section>
                                <h1>EASY COOK</h1>
                
                                <p>Para ti amante de la cocina, has llegado al lugar indicado. <br />
                                    En Easy Cook encontrarás las mejores recetas de cocina y podrás también compartir tus recetas para que mucha más gente la conozca.
                                </p>
                
                            </section>
                            <aside>
                                <StartButton  className={styles.linkLanding}> </StartButton>
                            </aside>
                        </main>
                        <footer>
                            <Link to={'/knowMe'} className={styles.CONOCEME}>CONOCEME</Link>
                        </footer>
                    </div>
            </div>
            
          
        )

    }

  
};


export default LandingPage;