// Khai bao function
// function sayHello() {
//     // logic code
// }


// Thuc thi function
// sayHello()

// function sayHello(name) {
//     console.log(`Hello ${name}`);
// }

// sayHello("Cuong");
// sayHello(`Huong`);
// sayHello(`Hieu`);

// ex1. Tao function tinh dien tich tam giac,
// function nay nhan dau vao la h: chieu CaretPosition, d: canh day

// function dienTich(h,d) {
//     let S = h*d/2;
//     console.log(`Dien tich ${S}`);
// }
// dienTich(3,4);


// ex2. Viet function nhan vao 2 so a va b.
// Function nay nay se in ra 1 mang cac so nguyen tu a -> b

// function dem(a,b) {
//     let arr =[];
//     if (a>b) {
        
//         for(i=a ; i>=b; i--) {
//             arr.push(i);
//         }
//     } else {
//         for(j=a; j<=b; j++) {
//             arr.push(j);
//         }
//     }
//     console.log(arr);
// }
// dem(3,7);
// dem(7,4);

//Ex3. Viet 1 function nhan vao 1 mang so,
// Tinh tong cac phan tu trong mang do

// function total(arr) {
//     let sum = 0;
//     for(i=0; i<arr.length; i++) {
//         sum = sum + arr[i];
//     }
//     console.log(`Tong: ${sum}`);   
// }
// total([1,4,5,7]);

//ex.4 Viet 1 function nhan vao 1 chuoi bat ki
// in ra ngich dao cua chuoi

// function reverseString(str) {
// // Cach 1 split
//     let newStr = str.split(``).reverse().join(``);
//     console.log(newStr);

// // Cach 2 Vong lap
//     let newStr2 = "";
//     for (i=str.length-1; i>=0; i--) {
//         newStr2 = newStr2 + str[i]
//     }
//     console.log(newStr2); 

// }
// reverseString(`Helloworld`);


// const person = {
//     name: "Peter",
//     age: 18,
//     sex: "Male",
//     sing: function(){
//         console.log("Sing llalalala");
//     },
//     sayHello: function(name){
//         console.log(`Hello ${name}`);
//     },
//     introduce: function(){
//         console.log(`My name is ${this.name}`);
//         console.log(this);
//         // this tro ve person
//     },
// };
// console.log(person.name);
// console.log(person.age);

// person.sing();
// person.sayHello("Huong");
// person.introduce();


// DOM --- Document object model
// Query html element (Lay html tu javascript)
// const app = document.getElementById("app");

// const demos = document.getElementsByClassName("demo");
// console.log(demos);

// const divs = document.getElementsByTagName("div");
// console.log(divs);
// const firstDiv = divs[0];
// console.log(firstDiv);

// Properties and methods ( phuong thuc va thuoc tinh quan trong)
// Children, innerHTML, innerText, id , firstChild, lastChild, parenElement, style
// console.dir(app);

// Properties
// .innerHTML, .innerText, .textContent
// console.log( app.innerHTML);
// console.log( app.innerText);
// console.log( app.textContent);

// app.innerHTML = `<b style = "color:red">Hello world modified</b>`;
// app.innerText = `<b style = "color:red">Hello world modified</b>`;

// .style
// console.log(app.style);
// app.style.font = "50px";
// app.style.backgroundColor = "blue";

// .id, .classList

// console.log(app.id);
// console.log(app.classList);
// app.classList.add("cl3");   // Them cl3
// console.log(app.classList);  
// app.classList.remove("cl3");   // Xoa phan tu
// console.log(app.classList);  


// .children, .parent

// const child = app.children[0];
// console.log(child.parentElement)

// Methos
// .remove() xoa phan tu
// .appendChild() them phan tu
// .createElement() tao phan tu

// const ul = document.getElementById("todo-list");
// console.log(ul);

// B1: Tạo ra 1 the li
// const li = document.createElement("li");
// console.log(li);
// // B2: Gán nội dung cho li
// li.innerText = "Đi ăn cơm";
// // B3 Gán nội dung li đã có nội dung vào trong thẻ ul
// const ul = document.getElementById("todo-list");
// ul.appendChild(li);  // Thêm li
// li.remove();          // Xóa li




// DOM even
// Click even
// Button
// const btn = document.getElementById("btn");
// console.log(btn);

// btn.onclick = function (){
//     alert("Hello world");
// };


// Input
// const btn = document.getElementById("btn");
// console.log(btn);
// const input = document.getElementById("input");
// console.log(input.value);
// btn.onclick = function() {
//     alert(input.value);
// }

// const btn = document.getElementById("btn");
// btn.onclick = function () {
//     const li = document.createElement("li");
//     const input = document.getElementById("input");
//     // Tao li
//     li.innerText = input.value;
//     // Gan li vao ul
//     const ul = document.getElementById("todo-list");
//     ul.appendChild(li);
//     // Reset input
//     input.value = "";
// }





