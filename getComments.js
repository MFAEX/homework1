/*setInterval(() => {
    console.log("Nasılsın? her saniye soracağım.");
}, 1000);*/
/*const sayHi = () => {
    console.log("Merhaba");
};

sayHi();*/
/*const sayHi = (cb)=> {
    cb();
};

sayHi(()=> {
    console.log("Hello")
});*/
/*import fetch from "node-fetch";

fetch("https://jsonplaceholder.typicode.com/users")
    .then((data) => data.json())
    .then((users) => console.log(users));*/
/* //fetch içinde fetch kullanma
import fetch from "node-fetch";

fetch("https://jsonplaceholder.typicode.com/users")
    .then((data) => data.json())
    .then((users) => {
        console.log("Users Yuklendi!", users);
        fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then((data) => data.json())
            .then((posts) => console.log("Post Yuklendi!", posts));
    }); */
/*import fetch from "node-fetch";

async function getData() {
    const data = await (
        await fetch("https://jsonplaceholder.typicode.com/users")
    ).json();
    console.log(data);
}
getData(); */
/*import fetch from "node-fetch";

async function getData() {
    const users = await (
        await fetch("https://jsonplaceholder.typicode.com/users")
    ).json();

    const post1 = await (
        await fetch("https://jsonplaceholder.typicode.com/posts/1")
    ).json();

    const post2 = await (
        await fetch("https://jsonplaceholder.typicode.com/posts/2")
    ).json();

    console.log("users", users);
    console.log("post1", post1);
    console.log("post2", post2);
}
getData();*/
/*//anonim fonksiyon
(async() => {
    const users = await (
        await fetch("https://jsonplaceholder.typicode.com/users")
    ).json();

    const post1 = await (
        await fetch("https://jsonplaceholder.typicode.com/posts/1")
    ).json();

    const post2 = await (
        await fetch("https://jsonplaceholder.typicode.com/posts/2")
    ).json();

    console.log("users", users);
    console.log("post1", post1);
    console.log("post2", post2);
})(); */
/*// axios kullanımı
import axios from "axios";

(async() => {
    const { data: users } = await
    axios("https://jsonplaceholder.typicode.com/users");

    const { data: post1 } = await axios("https://jsonplaceholder.typicode.com/posts/1");

    const { data: post2 } = await axios("https://jsonplaceholder.typicode.com/posts/2");

    console.log("users", users);
    console.log("post1", post1);
    console.log("post2", post2);
})(); */
export const getComments = (number) => {
    return new Promise((resolve, rejact) => {
        if (number === 1) {
            resolve({ text: "Selam" }); // sadece string değil int, obje de gönderebilirsin!
        }
        rejact("Bir hata oluştu!");
    });
};