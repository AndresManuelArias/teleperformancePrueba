import {Router} from 'express'
import {tokenValidation} from '../middlewares/verifiToken.middlware';
const router:Router = Router();

import {signup, signin, profile } from '../controllers/auth.controller'
router.get('/', (req, res)=>{
    console.log("hello")
    res.send('hello')
})

router.post('/signup',signup)
router.post('/signin',signin)
router.get('/profile',tokenValidation,profile)

export default router;