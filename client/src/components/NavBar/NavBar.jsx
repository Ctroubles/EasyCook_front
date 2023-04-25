import { Link } from "react-router-dom"
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Style.module.css";
import { useDispatch, useSelector } from "react-redux";
import moonIcon from '../../assets/Dark_mode_assets/moon-6695.svg'
import sunIcon from '../../assets/Dark_mode_assets/sun-1846.svg'
import { darkModeControl } from "../../redux/actions/actions";
import menuIcon from "../../assets/menu-icon.svg";
import { useState } from "react";
import { useEffect } from "react";
import { useMediaQuery } from '@material-ui/core';





const NavBar =()=>{

    const widthMobile = useMediaQuery('(max-width: 500px)');

    const [menuStatus, setMenuStatus] = useState(false)


    // lo de arriba es para el responsive design


    const dispatch = useDispatch()

    const darkMode = useSelector(e=>e.DarkMode)

    
    useEffect(()=>{
        
    },[])





    if (!widthMobile) {
        return(
            <div id={styles.header}>
                <Link className={styles.back} to="/">BACK</Link>
                <button onClick={()=>dispatch(darkModeControl())} id={styles.moon}><img src={darkMode ? sunIcon : moonIcon} alt="" /></button>
                    <div id={styles.searchBar}>
                        <SearchBar></SearchBar>
                    </div>
                <Link to={'/create'} className={styles.create}><span>CREATE</span></Link>
            </div>
        )
    }    
    else{
        return(
            <div id={styles.header}  >
                <div onClick={()=>setMenuStatus(!menuStatus)} id={styles.menuIcon}><img src={menuIcon} alt="menu-icon" /></div>
                <div id={styles.searchBar}>
                    <SearchBar></SearchBar>
                </div>
                <div id={styles.menuContaier} className={menuStatus ? styles.menuStatus : undefined}>
                    <button onClick={()=>dispatch(darkModeControl())} id={styles.moon}><img src={darkMode ? sunIcon : moonIcon} alt="" /></button>
                    <Link to={'/create'} className={styles.create}><span>CREATE</span></Link>
                </div>
            </div>
        )
    }
   
};


export default NavBar;