// import axios from "axios";

// async function getData(Number) {
//     const getUsers = async(Number) => {
//         const { data } = await axios("https://jsonplaceholder.typicode.com/users/" + Number);
//         console.log(data);
//     }

//     const getPost = async(Number) => {
//         const { data } = await axios("https://jsonplaceholder.typicode.com/posts?id=" + Number);
//         console.log(data);
//     }
//     const userId = await getUsers(Number);
//     const postUser = await getPost(Number);
//     return userId + postUser;
// }
// export default getData();

import axios from "axios";

async function getData(Number) {

    const getUsers = async(Number) => {
        const { data } = await axios("https://jsonplaceholder.typicode.com/users/" + Number);
        console.log(data);
    }


    const getPost = async(Number) => {
        const { data } = await axios("https://jsonplaceholder.typicode.com/posts?id=" + Number);
        console.log(data);
    }
    const userId = await getUsers(Number)
    const postUser = await getPost(Number)
    return userId + postUser
}

export default getData;