function laPrimeraMayuscula(string){
    if(typeof(string)!== 'string') throw Error('El dato envíado no es un string')
    
    const String = string[0].toUpperCase() + string.substring(1)


    return String;
}

module.exports={
    laPrimeraMayuscula
}