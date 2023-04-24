import style from './Loading.module.css' 
 
 const Loading = ()=>{
    return(
         <div id={style.body}>
            <div className={style.center}>
                <div className={style.ring}></div>
                <span id={style.span}>Loading...</span> 
            </div>
         </div>
           
    )
}

export default Loading;