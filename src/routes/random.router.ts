import {Router} from 'express'
import {tokenValidation} from '../middlewares/verifiToken.middlware';
const router:Router = Router();

import {randomup } from '../controllers/random.controller'
router.get('/', (req, res)=>{
    console.log("hello")
    res.send('hello')
})

router.get('/random',tokenValidation,randomup)
export default router;
