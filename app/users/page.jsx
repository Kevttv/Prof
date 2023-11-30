import axios from "axios"
import UserCard from '@/components/User/UserCard'
async function loadUsers() {
    const res = await axios.get('https://adso-lookstyle.onrender.com/api/v1/users')

    console.log(res.data)
    return res.data.data
} 

async function UserPage(){
    const users = await loadUsers()

    return (
            <div>
                {
                    users.map(user =>(
                            <UserCard user={user} key={user.id}/>
                        ))
                }
            </div>
        )
}

export default UserPage