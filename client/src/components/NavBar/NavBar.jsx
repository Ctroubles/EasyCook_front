import { Link } from "react-router-dom"
import SearchBar from "../SearchBar/SearchBar";
import style from "./NavBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import moonIcon from '../../assets/Dark_mode_assets/moon-6695.svg'
import sunIcon from '../../assets/Dark_mode_assets/sun-1846.svg'
import { darkModeControl } from "../../redux/actions/actions";
import menuIcon from "../../assets/menu-icon.svg";
import { useState } from "react";
import { useEffect } from "react";

const NavBar =()=>{


    const width= useSelector(e=>e.widthDevice)

    const [menuStatus, setMenuStatus] = useState(false)


    // lo de arriba es para el responsive design


    const dispatch = useDispatch()

    const darkMode = useSelector(e=>e.DarkMode)

    
    useEffect(()=>{
        
    },[])


  

    



    if (width > 500) {
        return(
            <header id={style.header}>
                <Link className={style.back} to="/">BACK</Link>
                <button onClick={()=>dispatch(darkModeControl())} id={style.moon}><img src={darkMode ? sunIcon : moonIcon} alt="" /></button>
                    <div id={style.searchBar}>
                        <SearchBar></SearchBar>
                    </div>
                <Link to={'/create'} className={style.create}><span>CREATE</span></Link>
            </header>
        )
    }

    
    if (width <= 500){
        return(
            <header id={style.header}  >
                <div onClick={()=>setMenuStatus(!menuStatus)} id={style.menuIcon}><img src={menuIcon} alt="menu-icon" /></div>
                <div id={style.searchBar}>
                    <SearchBar></SearchBar>
                </div>
                <div id={style.menuContaier} className={menuStatus ? style.menuStatus : undefined}>
                    <button onClick={()=>dispatch(darkModeControl())} id={style.moon}><img src={darkMode ? sunIcon : moonIcon} alt="" /></button>
                    <Link to={'/create'} className={style.create}><span>CREATE</span></Link>
                </div>
            </header>
        )
    }
   
};


export default NavBar;