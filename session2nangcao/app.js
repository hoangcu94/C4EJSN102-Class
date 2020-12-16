// Ex1. CHo nguoi dung nhap vao so bat ki.
// Kiem tra so do co am hay khong.
// neu am , in ra invalid input
// Neu duong , tinh giai thua cua so do

// let userInput = Number(prompt(`Moi ban nhap so:`));
// if (userInput < 0) {
//     console.log(`invalid input`);
// } else {
//     let giaiThua = 1;
//     for (let i=1; i<=userInput; i++) {
//         giaiThua = giaiThua*i;
//     };
//     console.log(`giai thua cua ${userInput} la ${giaiThua}`);
// };

//ex2. Cho nguoi dung nhap vao ten va tuoi
// Neu tuoi <18, in ra ban chua du tuoi de vao trang web nay
// Neu tuoi >=18 , hoi ban co muon dang nhap vao trang web nay khong?
// neu yes, in ban dang nhap thanh cong
// neu no, in ra ban khong dang nhap thanh cong

// let yourName = prompt(` Nhap ten cua ban`);
// let yourAge = Number(prompt(`Nhap tuoi cua ban`));
// if (yourAge < 18) {
//     console.log(`Ban chua du tuoi de vao trang web nay`);
// } else {
//     let loop = true;
//     while(loop){
//         let userInput = prompt(`ban co muon dang nhap vao trang web khong? yes/no?`);
//         if(userInput == `yes`) {
//             alert(`ban da dang nhap thanh cong`);
//         } else if (userInput == `no`) {
//             alert(`Ban khong dang nhap vao trang web`);
//             break;
//         } else{};
//     };    
// };

//Ex3. Cho nguoi dung nhap vao username va password
//Tao 1 bien username2 va passworld2 tam thoi o code
// Kiem tra username === username2 va password = password2;
// neu ca 2 deu giong thi in ra dang nhap thanh cong
//neu ca 2 sai thi in ra cai sai

// let userName = prompt(` nhap ten cua ban`);
// let password = prompt(`nhap password cua ban`);
// const admin = {
//     username2: `hoangcu`,
//     password2: `abcxyz`,
// };
// if(userName === admin.username2 && password === admin.password2) {
//     alert(`Ban da dang nhap thanh cong`);
// } else if(userName !== admin.username2) {
//     alert(`Ban nhap sai ten dang nhap`);
// } else {
//     alert(`ban nhap sai mat khau`);
// };

//Ex4. Tim hieu cach lay thu , ngay, thang va cau lenh switch/ case
//Cho nguoi dung nhap vao thang sinh va name
// Neu sinh thang 1,2,3 . name sinh vao mua xuan
// Neu thang 4,5,6 sinh mua he.
// Thang 7,8,9 sinh mua thu.
// Thang 10,11,12 sinh mua dong

// let yourName = prompt(`Ban ten gi?`);
// let month = Number(prompt(`Ban sinh thang may`));
// switch (month) 
// {
//     case 1 :
//     case 2 :
//     case 3 : {
//         alert(`${yourName} sinh vao mua xuan`);
//         break;
//     } ;
//     case 4 :
//     case 5 :
//     case 6 : {
//         alert(`${yourName} sinh vao mua ha`);
//         break;
//     } ;   
//     case 7 :
//     case 8 :
//     case 9 : {
//         alert(`${yourName} sinh vao mua thu `);
//         break;
//     } ;   
//     case 10 :
//     case 11 :
//     case 12 : {
//         alert(`${yourName} sinh vao mua dong`);
//         break;
//     };
//     default : {
//         alert(`${yourName} nhap sai thang sinh`);
//     };      
// };

//Ex5. Cho nguoi dung nhap 3 tham so a, b, c cua 1 phuong trinh
//Sau khi in ra ngiem thi hoi co muon su dung tiep khong
// Neu yes thi dung tiep
// Neu no thi ket thuc chuong trinh

// let loop = true;
// while(loop) {
//     let a = Number(prompt(`nhap a`));
//     let b = Number(prompt(`nhap b`));
//     let c = Number(prompt(`nhap c`));
//     if (a == 0) {
//         if (b == 0) {
//             if (c == 0) {
//                 console.log(`phuong trinh vo so ngiem`);
//             } else {
//                 console.log(`phuong trinh vo ngiem`);
//             };
//         } else {
//             console.log(`phuong trinh co nghiem la -${c}/${b}`);
//         };
//     } else {
//         let denta = b*b-(4*a*c);
//         if(denta < 0 ) {
//             console.log(`phuong trinh vo nghiem`);
//         } else if (denta == 0) {
//             console.log(`phuong trinh co nghiem kep la x = -${b}/(2*${a})`);
//         } else {
//             console.log(denta);
//             let d = Math.sqrt(denta);
//             console.log(`ngiem cua phuong trinh la:`);
//             console.log(`x1 = (-${b}-${d})/(2*${a})`);
//             console.log(`x2 = (-${b}+${d})/(2*${a})`);
//         };
//     };
//     let question = prompt(`Ban co muon tiep tuc khong`);
//     if (question == `no`) {
//         break;
//     };
// };


//Ex6. Cach truy cap vao tung phan tu cua chuoi
// Vd: const randomString = `Hello world`;
//  console.log(randomString[0]); => in ra chu H;

// Viet 1 chuong trinh cho nguoi dung nhap vao 1 chuoi bat ki
// In ra chuoi nguoc lai
// Sau khi ket thuc dung while xem co muon su dung tiep khong

// let randomString = prompt(`Moi ban nhap chuoi`);
// let newStr ="";
// for (let i =randomString.length - 1; i >= 0; i--) {
//     newStr = newStr + randomString[i];
// };
// console.log(newStr);