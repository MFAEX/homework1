const users = [{
        name: "Mehmet",
        age: 20,
    },
    {
        name: "Dilşad",
        age: 22,
    },
    {
        name: "Fatih",
        age: 22,
    },
    {
        name: "Mehmet",
        age: 17,
    },
    {
        name: "Mehmet",
        age: 40,
    }
];
/* array fonctions
push  => yeni bir eleman eklemek için
map => array içinde tek tek dönmek 
find => array içerinde arama işlemi yapar
filter => array içersinde verilen filitreye uygun eleman getirme
some => kriterlere herhangi birisi sağlıyorsa true döndürmek için  
every => kriterlere bütün array elemanları uyuyorsa true dönmek için 
includes => array altında arattırdığı ifade var mı yok mu onu kontrol etmek 
*/

/*
//PUSH
users.push("Rukiye");
console.log(users);
*/


//MAP
/* for kullanarak yapım         for (let i = 0; i < users.length; i++) {
    console.log(item[i]);
}*/
/*
users.map((item) => {
    console.log(item.name);
});  */

/*
//FIND 
const result = users.find((item) => item.name === "Mehmet" && item.age >= 20); // eğer namelerin hepsi meh olsaydı ve age 20 olsaydı ilk bulduğunu getirirdi
console.log(result); */

/*
//FILTER 

const filtered = users.filter(({ name, age }) => name === "Mehmet" && age > 19);
console.log(filtered); */

/*
//SOME sadece true ve false döner var olup olmadığına bakmak için kullabilriz
const some = users.some((item) => item.age === 22);
console.log(some); 
*/

/*
//EVERY
const every = users.every((item) => item.age > 19);
console.log(every); //hepsinin age 19dan büyükse true dön
 */

/*
//INCLUDES 
const meyveler = ["elma", "armut", "muz"];
const isIncluded = meyveler.includes("portakal");
console.log(isIncluded);
*/