'use client'
import { data } from 'autoprefixer';
import axios from 'axios'
import React from 'react'
<<<<<<< HEAD

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";
=======
import axios from 'axios'
>>>>>>> e6d6a847d27e615a7989efe75976ff226c837365

export default function App() {
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data);
            console.log(data)
        });
    }, []);

    if (!post) return null;

<<<<<<< HEAD
    return (
        <div>
            <h1 className='text-red-800'>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
}
=======
    axios.get('https://adso-lookstyle.onrender.com/api/v1/users')
        .then((response) => {
            console.log(response.data)
        })
        .catch((error) => {
            console.log(error)
        })




    return (
        <div>
                
        </div>
    )
}



// axios.get('/user?ID=12345')
//   .then(function (response) {
//     // manejar respuesta exitosa
//     console.log(response);
//   })
//   .catch(function (error) {
//     // manejar error
//     console.log(error);
//   })
//   .finally(function () {
//     // siempre sera executado
//   });
>>>>>>> e6d6a847d27e615a7989efe75976ff226c837365
