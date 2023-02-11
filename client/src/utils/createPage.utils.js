const validateForm= (target,value,setErrorsForm,errorsForm, setRecipeToSend,recipeToSend)=>{

    if(value.length){
        switch (target) {
            case 'name':
                if(value.length > 50) setErrorsForm({...errorsForm,[target]:"El nombre debe contener menos de 50 characters"});
                else setErrorsForm({...errorsForm,[target]:""})
                break;

            case 'resumenDelPlato':
                if(value.length > 250) setErrorsForm({...errorsForm,[target]:"El resumen debe contener menos de 150 characters"});
                else setErrorsForm({...errorsForm,[target]:""})
                break;

            case 'healthScore':
                if(value > 100 || value < 0) setErrorsForm({...errorsForm,[target]:"HealthScore debe estár en un rango de 0-100"});
                else if(!value.length) setErrorsForm({...errorsForm,[target]:"El campo de HealthScore está vacío"})
                else setErrorsForm({...errorsForm,[target]:""})
                break;

            case 'stepByStep':
                if(value.length > 600) setErrorsForm({...errorsForm,[target]:"Step By Step requiere menos de 300 caracteres"});
                else setErrorsForm({...errorsForm,[target]:""})
                break;

            case 'imgUrl':
                var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
                var regex = new RegExp(expression);
                if(value.match(regex)) setErrorsForm({...errorsForm,[target]:""});
                else setErrorsForm({...errorsForm,[target]:"Debe ser una URL"});
                break;

        
            default:
                break;
        }
    }else if(target !=='imgUrl') setErrorsForm({...errorsForm,[target]:"El campo está vacío"})
            else{  
                  setErrorsForm({...errorsForm,[target]:''});
                  setRecipeToSend({...recipeToSend,[target]:undefined})
                }
};

export{
    validateForm,
};