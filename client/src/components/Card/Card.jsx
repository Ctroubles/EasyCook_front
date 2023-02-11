import React from "react";
import { Link } from "react-router-dom";
import style from "./Card.module.css";
import { connect } from "react-redux";






function dietsString (arr){

     const arrayDiets = arr.map(el=>el.name);
     let stringDiets = arrayDiets.join('   |   ');

     return stringDiets

    
}


const addBr=(e)=>{
    let string ='';
 if(e){ string = e.innerText;
      if(string.length > 35){
          for (let i = 35; i >= 0; i--) {
                  if(string[i] === ' '){
                      let arr= string.split('')
              
                      arr.splice(i,0, '<br>')
      
                      let stringBr=arr.join('')
                      
                      e.innerHTML=stringBr;

                      e.style.cssText= '';
                      
                      return 
                  }  
          }
       }else{
          e.style.cssText= 'display:flex ; justify-content:center ; align-items:center';
       }
      }
  }



class Card extends React.Component {


    render(){

        const  testRef=(e)=>{
            addBr(e);
        }

        return(
            <Link to={`/details/${this.props.id}`} className={style.card} >
                      <mark className={this.props.healthScore >= 50 ? style.green : style.red}> <strong > {this.props.healthScore}</strong> </mark>
                       <h4 id={this.props.darkMode?style.tituloCard:undefined} ref={testRef}>{this.props.name}</h4>
                     <div id={style.imgContainer}><img src={this.props.img} alt="Imagen referencial" /> </div>   
                    <span>
                    <p>{this.props.diets && dietsString(this.props.diets)}</p>
                    </span>
            </Link>
        )
    }
    
};

const mapDispatchToProps =(dispatch)=>{
    return{
        // getRecipeDetail: (id)=> dispatch(getRecipeDetail(id))
    }
}

const mapStateToProps=(state)=>{
    return{
        darkMode: state.DarkMode
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);



