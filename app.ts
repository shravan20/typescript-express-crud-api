import morgan from 'morgan';
import express from "express";
import userRouter  from "./src/routes/user";

let app = express();
app.use(morgan('dev'));


app.use('/user', userRouter)


const port = Number(process.env.PORT || 3000);
app.listen(port, () => {
    console.log('Express server started on port: ' + port);
});
