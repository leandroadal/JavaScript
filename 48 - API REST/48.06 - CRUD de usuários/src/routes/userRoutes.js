import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

// Não devem existir se não houver autenticação de admin, mas vamos deixar para mostrar o CRUD completo
router.get('/', userController.index); // Lista usuários
router.get('/:id', userController.show); // Lista usuário

// Rotas
router.post('/', userController.store);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

export default router;
