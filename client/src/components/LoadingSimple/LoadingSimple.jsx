import style from './LoadingSimple.module.css';
import {useSelector} from 'react-redux'



const darkStyle ={
    background : "#14021a",
}

const darkStyleSpan = {
    border : '5px solid #dadfe0',
}



const LoadingSimple = () =>{

    const darkMode = useSelector(e=>e.DarkMode)

    console.log(darkMode);
    return(
        <main style={darkMode ? darkStyle : undefined} id={style.Main}>
            <div className={style.loader}>
                <span style={darkMode ? darkStyleSpan : undefined} className={style.loader__element}></span>
                <span style={darkMode ? darkStyleSpan : undefined} className={style.loader__element}></span>
                <span style={darkMode ? darkStyleSpan : undefined} className={style.loader__element}></span>
            </div>
        </main>
    )
};

export default LoadingSimple;