import {Router} from 'express'
const router:Router = Router();

import { searchMovie } from '../controllers/movies.controller'

router.get('/movies',(req,res)=>{
    console.log("hello")
    res.send('hello movie')
})
router.get('/movies/:titulo',searchMovie)

export default router;