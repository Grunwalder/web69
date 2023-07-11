import { Router } from "express";
import todoListController from "../../controllers/todolist.js";
const TodoListRouter = Router();

TodoListRouter.get('', todoListController.getALL);
TodoListRouter.get('/:id', todoListController.getOneById);
TodoListRouter.post('', todoListController.create);

export default TodoListRouter;