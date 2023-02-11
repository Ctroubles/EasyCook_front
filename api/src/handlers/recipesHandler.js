const {
    buscarPorNombre,
    buscarPorId,
    spawnRecipe,
    obtainDiets,   } = require('../controllers/recipeFunciones');
    
const {Recipe} = require('../db');
const { laPrimeraMayuscula } = require('../utils/recipes.utils');


async function listByname (req, res){
    try {
        const {name} = req.query;
        // if(!name) throw new Error('Ingresa una receta')     COMENTADA POQUE QUIERO TRAER TODAS LAS RECES SI NO INGRESA UN NOMBRE PARA BUSCAR
        
        let respuesta = await buscarPorNombre(name)

        res.status(200).send(respuesta)
        
    } catch (error) {
        const test = error.message.includes('402')
        res.status(error.status? error.status : test ? 402 :400).send(error)
    }
}

async function listById(req,res){
    try {
        const {id} = req.params;
        
        const repuesta = await buscarPorId(id)
        
        res.status(200).send(repuesta)

    } catch (error) {
        const test = error.message.includes('402')
        res.status(error.status? error.status : test ? 402: 404).send(error)
    }
}


async function createRecipe(req,res){
    try {

        const {healthScore,  imgUrl , dietTypes } = req.body

        console.log((req.body.stepByStep));

        const name = laPrimeraMayuscula(req.body.name)
        const stepByStep = laPrimeraMayuscula(req.body.stepByStep)
        const resumenDelPlato = laPrimeraMayuscula(req.body.resumenDelPlato)

        
        const resultado = await spawnRecipe({name,resumenDelPlato, healthScore, stepByStep,
            imgUrl , dietTypes});
    
        res.status(200).send(resultado);
        
    } catch (error) {
        console.log(error);
        const test = error.message.includes('402')
        res.status(error.status?error.status:test?402:400).send(error)
    }

}

async function getDiets(req,res){
    try {
        const dietas = await obtainDiets()

        res.send(dietas)
        
    } catch (error) {
        res.status(400).send(error.message)
    }
}


module.exports = {
    listByname,
    listById,
    createRecipe,
    getDiets,
};






// {
// 	"message": "Request failed with status code 404",
// 	"name": "AxiosError",
// 	"stack": "AxiosError: Request failed with status code 404\n    at settle (C:\\Users\\Usuario\\Desktop\\BOOTCAMP\\PI\\PI\\PI-Food-main\\PI-Food-main\\api\\node_modules\\axios\\dist\\node\\axios.cjs:1859:12)\n    at BrotliDecompress.handleStreamEnd (C:\\Users\\Usuario\\Desktop\\BOOTCAMP\\PI\\PI\\PI-Food-main\\PI-Food-main\\api\\node_modules\\axios\\dist\\node\\axios.cjs:2723:11)\n    at BrotliDecompress.emit (node:events:525:35)\n    at endReadableNT (node:internal/streams/readable:1358:12)\n    at processTicksAndRejections (node:internal/process/task_queues:83:21)",
// 	"config": {
// 		"transitional": {
// 			"silentJSONParsing": true,
// 			"forcedJSONParsing": true,
// 			"clarifyTimeoutError": false
// 		},
// 		"adapter": [
// 			"xhr",
// 			"http"
// 		],
// 		"transformRequest": [
// 			null
// 		],
// 		"transformResponse": [
// 			null
// 		],
// 		"timeout": 0,
// 		"xsrfCookieName": "XSRF-TOKEN",
// 		"xsrfHeaderName": "X-XSRF-TOKEN",
// 		"maxContentLength": -1,
// 		"maxBodyLength": -1,
// 		"env": {
// 			"Blob": null
// 		},
// 		"headers": {
// 			"Accept": "application/json, text/plain, */*",
// 			"User-Agent": "axios/1.2.2",
// 			"Accept-Encoding": "gzip, compress, deflate, br"
// 		},
// 		"method": "get",
// 		"url": "https://api.spoonacular.com/recipes/782585dssdsd/information?apiKey=a2208de1976645f7ba7d92299aeb33f4"
// 	},
// 	"code": "ERR_BAD_REQUEST",
// 	"status": 404
// }