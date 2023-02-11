import style from './CreatePage.module.css';
import Form from '../../components/Form/Form';
import {Link} from 'react-router-dom' 
import backArrow from '../../assets/back-arrow-direction-down-right-left-up-svgrepo-com.svg'
import whiteBackArrow from '../../assets/white-back-arrow.svg'
import { useDispatch, useSelector } from 'react-redux';
import { getDiets } from '../../redux/actions/actions';
import { useEffect } from 'react';
import { useState } from 'react';
import LoadingSimple from '../../components/LoadingSimple/LoadingSimple';



const CreatePage = () => {
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(true)

    const width = useSelector(e=>e.widthDevice)

    useEffect(()=>{

        const asyncronFuntion = async () =>{
            await dispatch(getDiets());
            setLoading(false)
        }
        
        asyncronFuntion()

    },[])



    if(loading){
        return(
            <div id={style.loadingContainer}>
                   <LoadingSimple/>
            </div>
        )
    }

    return(
        <div id={style.divForm}>
            <Link id={style.backArrow} to='/home'><img  src={width>790?backArrow:whiteBackArrow} alt='Click para retroceder'></img></Link>
            <Form></Form>
        </div>
    )
};


export default CreatePage;