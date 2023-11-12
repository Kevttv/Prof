import React from 'react'
import axios from 'axios'

export default function Calendar() {

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