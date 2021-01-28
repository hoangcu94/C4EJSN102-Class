// Array (C/R/U/D)
// Khai bao
// let arr = [];
// Creat su dung .push
// let movie = prompt(`nhap ten phim moi vao`);
// arr.push(movie);
// console.log(arr);

// Read
// for (let i = o; i<arr.length; i++) {
//     console.log(arr[i]);
// };

// Update
// let j = prompt(`vi tri can update`);
// arr[j] = prompt(`phim moi update`);
// console.log(arr);

// Delete su dung .splice
// let m = prompt(`vi tri can xoa`);
// let n = prompt(`so phan tu can xoa`);
// arr.splice(m,n);
// console.log(arr);

//Ex1 . Lam 1 ung dung todolist. Cho nguoi dung nhap vao 4 chu cai C/R/U/D/E.
// C - Hoi nguoi dung todo can them moi
//   - In ra cac phan tu trong mang todoList
// R - In ra cac phan tu trong mang todoList
// U - Hoi nguoi dung todolist can update
//     Update, in ra cac phan tu trong mang sau update
// D - Hoi nguoi dung todo can xoa

// let loop = true;
// let todoList = [`thuc day`, `an sang`, `di hoc`];
// while( loop ) {
//     let useInput = prompt(`Ban muon lam gi? C/R/U/D/E?`);
//         useInput = useInput.toUpperCase();
//     if (useInput == `C`) {
//         let newTodo = prompt(`Ban can them viec gi?`);
//         todoList.push(`${newTodo}`);
//     } else if (useInput == `R`) {
//         for (let i=0; i<todoList.length; i++) {
//             console.log(`${i}, ${todoList[i]}`);
//         }
//     } else if (useInput == `U`) {
//         let j = prompt(`Vi tri can update`);
//         todoList[j] = prompt(`Viec can thay the`);
//     } else if(useInput == `D`) {
//         let m = Number(prompt(`vi tri can xoa`));
//         let n = Number(prompt(`So viec can xoa`));
//         todoList.splice(m,n);
//     } else if (useInput == `E`) {
//         loop = false;
//     };
// };

const arr = [1,2,3,4,5];
// Tinh tong cac phan tu trong mang;
let total = 0;
// for(let i = 0; i < arr.length; i++) {
//     total+=arr[i];
// };
// console.log(total);

// Tinh tong cac phan tu chan trong mang
// for(let j = 0; j < arr.length; j++) {
//     if (arr[j]%2 == 0) {
//         total+=arr[j]
//     };
// };
// console.log(total);
// Tao 1 mang moi voi cac phan tu tang len 2 don vi
// let newArr = [];
// for(let i = 0; i<arr.length; i++) {
//     newArr[i] = arr[i] + 2;    
// };
// console.log(newArr);
// Tao mang moi nguoc voi mang cu
// for (let i = 0; i< arr.length; i++) {
//     newArr[i] = arr[arr.length-1-i];
// };
// console.log(newArr);
// Tim so len nhat trong mang
// let max = 0;
// for (let i = 0; i<arr.length; i++) {
//     if(max<arr[i]) {
//         max = arr[i];
//     }
// };
// console.log(max);


