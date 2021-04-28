import dotenv from 'dotenv'
dotenv.config();
console.log(process.env.TESTING)
import app from './app';
import './database';
function main(){
    app.listen(app.get('port'))
    console.log("server on port",app.get('port'))
}

main();
