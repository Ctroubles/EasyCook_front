import style from './Form.module.css';
import { useState } from 'react';
import { validateForm } from '../../utils/createPage.utils';
import axios from 'axios'
import { useSelector } from 'react-redux';


let checkBoxesList =[]
const dietsPicks = []

const Form = ()=>{


    const [hsStatus, setHsStatus]=useState(65)

    const [recipeToSend, setRecipeToSend]=useState({
        name:'',
        resumenDelPlato:'',
        healthScore: hsStatus,
        stepByStep:'',
        imgUrl:undefined,
  
    })

    const [errorsForm, setErrorForm] = useState({})


    
    const handlerChange=(event)=>{
        const target = event.target.name;
        const value = event.target.value


        if(target=== 'healthScore') setHsStatus(value);


        setRecipeToSend({...recipeToSend,[target]:value})

        validateForm(target,value,setErrorForm,errorsForm, setRecipeToSend,recipeToSend)
    }


    const submitHandler= async(e)=>{
        e.preventDefault()

       for(const i in errorsForm ){
            if(errorsForm[i]!==""){
                alert('Corrige los datos')
                return
          }
       }

       for(const i in recipeToSend ){
        if(recipeToSend[i]===""){
           alert('Completa todos los campos')
           return
           }
        }

        const realSend = {...recipeToSend, dietTypes:[...dietsPicks]}

        await axios.post('http://localhost:3001/recipes/',realSend)
         .then(respuesta=> {
            setRecipeToSend({
                name:'',
                resumenDelPlato:'',
                healthScore:65,
                stepByStep:'',
                imgUrl:'',
            });

            checkBoxesList.forEach(e=>e.checked=false)

         })
         .then((e)=>setTimeout(()=>alert('Perfecto, ya registramos tu receta') ,1500))
         .catch(error=>alert('No se pudo Enviar tu receta, intenta cambiarle de nombre'))
    }

    const changeHandlder2=(event)=>{
        const target = event.target.name;


        let toDelete=0;
        dietsPicks.includes(target)? toDelete = dietsPicks.indexOf(target)+1: dietsPicks.push(target)
        if(toDelete) dietsPicks.splice(toDelete-1,1) 
        


    }


    const diets= useSelector(estado=>estado.diets)


    const getCheckboxesChilds= (e) =>{
       if(e) {
            const ulChilds= [...e.childNodes]

          if(ulChilds) checkBoxesList = ulChilds.map(e=>{
                                            const divChilds= e.childNodes;
                                            return divChilds[1]
                                        })
            } 
  
    }

    return(
        <div id={style.formContainer}>
        <form onSubmit={submitHandler}>
                <h1>Create your Recipe</h1>
                <section>
                    <div className={style.divsSmallImputs}>
                        <label htmlFor="name" >Nombre de tu receta: </label>
                        <input id='name' className={errorsForm.name && style.warning} onChange={handlerChange} value={recipeToSend.name} placeholder='Write your recipe Name...'  type="text" name="name"  autoComplete='off'/>
                    </div>
                    <p>{errorsForm.name && errorsForm.name}</p>

                    <div className={style.divsSmallImputs}>
                        <label htmlFor="healthScore">¿Qué tan saludable es?</label>
                        <input id='healthScore' className={style.rangeHealthScore} min="1" max="100" onChange={handlerChange} value={hsStatus} type="range"  name="healthScore" /> <label htmlFor="healthScore">{hsStatus}</label>
                    </div>
                    <p>{errorsForm.healthScore && errorsForm.healthScore}</p>

                    <div className={style.divsSmallImputs}>
                        <label htmlFor="imgUrl">Imagen demostrativa*</label>
                        <input id='imgUrl' className={errorsForm.imgUrl && style.warning} onChange={handlerChange} value={recipeToSend.imgUrl} placeholder='Enter a url of a reference image...' name="imgUrl" autoComplete='off' />
                    </div>
                    <p>{errorsForm.imgUrl && errorsForm.imgUrl}</p>

                    <div className={style.bigTextContainer}>
                        <div>
                            <label htmlFor="resumenDelPlato">Resumen del plato</label>
                            <textarea id='resumenDelPlato'  onChange={handlerChange} value={recipeToSend.resumenDelPlato} placeholder='Enter a quikly summary of your recipe...'  type="textarea" name="resumenDelPlato" className={style.textarea}/>
                        </div>
                        <p>{errorsForm.resumenDelPlato && errorsForm.resumenDelPlato}</p>

                        <div id={style.steps}>
                            <label htmlFor="stepByStep">Step by step</label>
                            <textarea id='stepByStep' onChange={handlerChange} value={recipeToSend.stepByStep} placeholder='Describe your recipe step by step...' type="text" name="stepByStep" className={style.textarea }/>
                        </div>
                        <p>{errorsForm.stepByStep && errorsForm.stepByStep}</p>

                    </div>

                </section>
                <ul id={style.dietsOptions} ref={getCheckboxesChilds}>
                    {diets.map(e=><div> <input onChange={changeHandlder2} name={e.id} id={e.id} type="checkbox" /> <label htmlFor={e.id}>{e.name}</label>  </div> )}
                </ul>

                <button id={style.sendButton} type="submit" value="Save">Enviar</button>
            </form>
        </div>
    )
};


export default Form;