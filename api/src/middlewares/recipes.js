const {Router}=require ('express');

const router = Router();

router.get('/',(res,req)=>{
    req.status(200).send('estamos en la ruta recipes')
})



module.exports = router;