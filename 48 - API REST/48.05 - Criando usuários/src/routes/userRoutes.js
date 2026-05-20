import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

// Não deveria existir
// router.get('/', userController.index); // Lista usuários
// router.get('/:id', userController.show); // Lista usuário

router.post('/', userController.store);

export default router;
