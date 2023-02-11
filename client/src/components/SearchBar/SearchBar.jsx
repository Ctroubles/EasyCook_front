import styles from './SearchBar.module.css'
import logoLupa from '../../imgs/logos/lupa.png';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  cardsContainerLoading, stateOfSearchBar } from '../../redux/actions/actions';
import { useEffect } from 'react';



const SearchBar = ()=>{
    const dispatch= useDispatch()

    const SearchBarStatus = useSelector(e=>e.stateOfSearchBar)
    
    const [toSearch,setToSearch] = useState(SearchBarStatus)

    const handlerChange = (e) =>{
        const value = e.target.value
        setToSearch(value)
    }


    const handlerSubmit=async(e)=>{
        e.preventDefault()
        if(toSearch!==""){
            dispatch(stateOfSearchBar(toSearch))    
            dispatch(cardsContainerLoading(true))
        }
       
    }


    useEffect(()=>{
        return ()=>dispatch(stateOfSearchBar(''))
    },[])


    return(
        <div id={styles.SearchBarContainer}>
            <div className={styles.divSearchBar}>
                <input onChange={handlerChange} type="text" placeholder="Busca una receta" name="name" autoComplete='off' value={toSearch}/>
            </div>
                <button id={styles.button} onClick={handlerSubmit} type="submit"><img src={logoLupa} alt="Lupa logo" /></button>
        </div>
    )
};

export default SearchBar

