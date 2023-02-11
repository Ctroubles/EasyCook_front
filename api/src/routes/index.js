const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

const {listByname, listById, createRecipe,getDiets} = require('../handlers/recipesHandler.js')


///////ACA TENGO QUE PONER LOS MIDDLEWARES CONTROLADORES

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.get('/recipes', listByname);
router.get('/recipes/:id', listById);
router.post('/recipes', createRecipe);
router.get('/diets',getDiets)

module.exports = router;
