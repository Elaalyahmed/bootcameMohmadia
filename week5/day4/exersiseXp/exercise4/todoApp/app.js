import { TodoList } from './todo.js';
const myTodoList = new TodoList();

myTodoList.addTask("Buy groceries");
myTodoList.addTask("Finish coding assignment");
myTodoList.addTask("Read a book");

myTodoList.markComplete(2);

console.log("My Tasks:");
myTodoList.listTasks().forEach(task => {
  console.log(`#${task.id} - ${task.description} [${task.status}]`);
});
