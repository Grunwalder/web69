import { Router } from "express";
import todoListController from "../../controllers/todolist.js";
import { validateMiddleware } from "../../utilities/index.js";
import { validateGetTodo, validateUpdateTodo } from "../v1/validate.js";
const TodoListRouter = Router();



TodoListRouter.get('', todoListController.getALL);
TodoListRouter.get('/query', validateMiddleware(validateGetTodo), todoListController.getOneById);
TodoListRouter.post('', todoListController.create);
TodoListRouter.put('/:id', validateMiddleware(validateUpdateTodo),todoListController.update);

export default TodoListRouter;