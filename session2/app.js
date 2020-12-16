console.log(`Hello world`);
// Boolean (true/false)

// let single = true;
// let flag = false;

//Branching (if-else)
// if(condition1) {
//     //logic
// } else if(condition2) {
//     //logic2
// }... else {
//     //logic n
// }

// Bieu thuc so sanh (==;!=, >, <)

// and (&&) / or (||)
// console.log(1==1 && 1>=2);
// console.log(1!=1 || 1<=2);

//ex1. Cho nguoi dung nhap vao tuoi
// neu tuoi <18, in ra man hinh (ban khong duoc vao bar)
// neu tuoi <21, in ra man hinh (ban khong duoc uong ruou)
// neu tuoi >=21, in ra man hinh (ban duoc uong mien phi)

// let age = Number(prompt(`Xin cho biet ban bao nhieu tuoi`));
// if(age<18) {
//     console.log(`Ban khong du tuoi vao bar`);
// } else if(age<21) {
//     console.log(`Ban duoc vao bar nhung khong duoc phep uong ruou`);
// } else {
//     console.log(`Ban duoc free`);
// };

//ex2. Cho nguoi dung nhap vao chieu cao va can nang. Tinh bmi

// let yourHeight = Number(prompt(`Nhap chieu cao cua ban (m)`));
// let yourWeight = Number(prompt(`Nhap can nang cua ban (kg)`));
// let bmi = yourWeight/(yourHeight*yourHeight);
// if (bmi < 18.5) {
//     console.log(`Ban qua gay`);
// } else if (bmi < 25) {
//     console.log(`Than hinh ban ra can doi`);
// } else {
//     console.log(`Ban bi thua can`);
// }

//Vong lap (loops)
// for - loops: vong lap biet truoc so lan lap

// for(let i=0; i<=10; i++) {
//     let dem = 0;
//     // console.log(i);
// // Ket hop if-else voi for-loops
//     if(i%2 == 0) {
//         dem = dem + 1;
//     };
//     if (dem ==0) {
//         console.log(`${i} la so le`);
//     }else {
//         console.log(`${i} la so chan`);
//     }  
// };


//While - loops: Vong lap khong biet truoc so lan lap;
let loop = true;
while(loop) {
    let usetInput = prompt(`Ban an com chua`);
    if (usetInput =="yes") {
        break;
    };
};



