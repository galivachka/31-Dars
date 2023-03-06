// const form = document.querySelector('.form'),
//     input = document.querySelector('.input'),
//     select = document.querySelector(".select")
// optionDollar = document.querySelector('.dollar'),
// optionRubl = document.querySelector('.rubl'),
// optionYuan = document.querySelector('.yuan'),
// optionDinor = document.querySelector('.dinor'),
// optionFunt = document.querySelector('.funt'),

// formBtn = document.querySelector('.btn'),
//     text = document.querySelector(".text");

// input.value = Number(input.value)

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     if (select.value === "dollar") {

//         text.textContent = `${input.value * 11000} so'mda`

//     } else if (select.value === "rubl") {

//         text.textContent = `${input.value * 69.38} so'mda`
//     }
//     if (select.value === "yuan") {

//         text.textContent = `${input.value * 1.646} so'mda`
//     } else if (select.value === "dinor") {

//         text.textContent = `${input.value * 37.034} so'mda`
//     }
//     if (select.value === "funt") {

//         text.textContent = `${input.value * 13.639} so'mda`
//     } else {
//         console.log("number kiriting");
//         text.textContent = "";
//     }

//  })


// 2 Uy Ishi

// const kun = document.querySelector(".kun"),
//     btn = document.querySelector(".btn"),
//     form = document.querySelector(".form"),
//     kun__text = document.querySelector(".kun__text")

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     switch (kun.value) {
//         case '1':

//             console.log("Monday");
//             kun__text.textContent = "Monday";
//             break;

//         case "2":
//             console.log("Tuseday");
//             kun__text.textContent = "Tuesday";
//             break;
//         case "3":
//             console.log("Wednesday");
//             kun__text.textContent = "Wednasday";
//             break;
//         case "4":
//             console.log("Thurday");
//             kun__text.textContent = "Thurday";
//             break;
//         case "5":
//             console.log("friday");
//             kun__text.textContent = "Friday";
//             break;
//         case "6":
//             console.log("Saturday");
//             kun__text.textContent = "Saturday";
//             break;
//         case "7":
//             console.log("Sunday");
//             kun__text.textContent = "Sunday";
//             break;

//         default:
//             console.log("Unday Yoq Anqov");
//             kun__text.textContent = "Bunday Yoq";
//             break;
//     }
// })



// console.log(kun.value);




// 3-1 Uy Ishi

// const pattern = /^\d{5}-\d{3}-\d{2}-\d{2}/;

// const myNumber = '99893-630-00-29';

// console.log(pattern.test(myNumber));

// 3-2 Uy Ishi
const form = document.querySelector(".form");
const pattern4 = /^\d+$/;
const passwordInp1 = document.querySelector(".passwordInp1");
const passwordInp2 = document.querySelector(".passwordInp2");
const summ1 = passwordInp1.match(pattern4);
const summ2 = passwordInp2.match(pattern4);

passwordInp1.value = Number(passwordInp1);
passwordInp2.value = Number(passwordInp2);

form.addEventListener('submit', (e) => {
    e.preventDefault();


    if (passwordInp1.value == passwordInp2.value) {
        console.log("Tasdiqlandi");
    } else if (passwordInp1.value > passwordInp2.value) {
        console.log("Ikkinchi Paroliz notog'ri");
    } else {
        console.log("Parol Notog'ri");
    }
})