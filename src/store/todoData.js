// import { observable } from 'mobx';

// export const storeTodoData = observable({
//   todoArr: [],

//   setTodoArr(updatedArr) {
//     this.todoArr = updatedArr;
//   },

//   addTodo(newTodo) {
//     this.todoArr.push(newTodo);
//   },

//   deleteTodo(id) {
//     this.todoArr = this.todoArr.filter(data => data.id !== id);
//   },

//   editTodo(editedObj) {
//     const updatedArr = this.todoArr.map(data => {
//       if (data.id === editedObj.id) {
//         return editedObj;
//       }

//       return data;
//     });

//     this.todoArr = updatedArr;
//   },
// });
