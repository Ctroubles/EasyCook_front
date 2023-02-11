import style from './Loading.module.css' 
 
 const Loading = ()=>{
    return(
         <body id={style.body}>
            <div className={style.center}>
                <div className={style.ring}></div>
                <span id={style.span}>Loading...</span> 
            </div>
         </body>
           
    )
}

export default Loading;