import axios from "axios"
async function loadUsers(id) {
    const res = await axios.get(`https://adso-lookstyle.onrender.com/api/v1/users/${id}`)

    return res.data.data
}


async function Page({ params }) {
    const user = await loadUsers(params.userId)

    return (
        <div>
            <h1>{user.id}. {user.name}</h1>
        </div>
    )
}

export default Page