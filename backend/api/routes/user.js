import express from 'express';
import { createUser, deleteUser, userRegister,userLogin,  getAllUser, getSingleUser, updateUser } from '../controllers/userController.js';
import adminMiddlware from '../middlewares/adminMiddleware.js';
import userMiddlware from '../middlewares/userMiddleware.js';

// import user controller 

// init router 
const router = express.Router();

//route rest api
router.get('/', adminMiddlware,  getAllUser);
router.post('/', createUser );
router.get('/:id',userMiddlware, getSingleUser );
router.delete('/:id',userMiddlware,  deleteUser );
router.patch('/:id',userMiddlware, updateUser );

// user auth route
router.post('/login', userLogin);
router.post('/register', userRegister);



// export  router 
 export default router 