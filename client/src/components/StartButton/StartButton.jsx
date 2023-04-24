import { Link } from "react-router-dom";
import style from './StartButton.module.css'

const StartButton = () =>{
    return(
        <Link to='/home' className={style.LinkCreate}>
            <span className={style.span1}></span>
            <span className={style.span2}></span>
            <span className={style.span3}></span>
            <span className={style.span4}></span>
            START
        </Link>
    )

}

export default StartButton;