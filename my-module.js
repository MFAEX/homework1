/*function topla(a, b) {
    return a + b;
};
BİRİNCİ SEÇENEK
export default topla; */

/*const topla = function topla(a, b) {
    return a + b;
};
İKİNCİ SEÇENEK
export default topla;*/

/*const topla = (a, b) => {
    return a + b;
};
ÜÇÜNCÜ SEÇENEK
export default topla;*/

/*const topla = (a, b) => a + b;
DÖRDÜNCÜ SEÇENEK
export default topla;*/


/*const hello = name => {
    console.log("Hello" + name);
};

const topla = (a, b) => a + b;
export { hello, topla };*/


/*const hello = name => {
    // console.log("Hello" + name);
    console.log(`hello ${name}`);
};

const topla = (a, b) => a + b;
export { hello, topla };*/


/*const hello = name => {
    // console.log("Hello" + name);
    console.log(`hello ${name}`);
};

const topla = (a, b) => a + b;
const cikar = (a, b) => a - b;

export { hello, topla, cikar };*/



/*const hello = name => {
    // console.log("Hello" + name);
    console.log(`hello ${name}`);
};

export const topla = (a, b) => a + b;
export const cikar = (a, b) => a - b;
export const text = 'Text';
export const user = {
    name: "Mehmet",
    surname: "Apaydın"
};
export const users = [{
    name: "Ahmet",
    surname: "keskin"
}, {
    name: "Dilşad",
    surname: "Erdoğan"

}, {
    name: "Rukiye",
    surname: "Erdoğan"
}];

export default hello;*/



export default (name) => {
    // console.log("Hello" + name);
    console.log(`hello ${name}`);
};

const topla = (a, b) => a + b;
const cikar = (a, b) => a - b;
const text = "Text";
const user = {
    name: "Mehmet",
    surname: "Apaydın",
};
const users = [{
        name: "Fatih",
        surname: "Apaydın",
    },
    {
        name: "Dilşad",
        surname: "Erdoğan",

    },
    {
        name: "Rukiye",
        surname: "Erdoğan",
    },
];

export { topla, cikar, text, user, users };