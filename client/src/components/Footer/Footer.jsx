import style from './Footer.module.css';
import fbIcon from "../../assets/Social Media/icons8-facebook.svg"

const Footer = () =>{
    return(
        <footer id={style.Footer}>
            <p>copyrigth ©2023  </p>
            <a id={style.imgContainer} href='https://www.facebook.com/cesar.troubles.3/' target="_blank" rel="noreferrer" ><img src={fbIcon} alt="FB icon" /></a>
            <p> Coded By César Troubles</p>
        </footer>
    )
};

export default Footer;