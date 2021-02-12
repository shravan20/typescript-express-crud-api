import * as express from "express";
import * as controllers  from "../controller/user";


const router = express.Router();

router.get('/', controllers.getUsers);

export = router;