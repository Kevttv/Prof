import PostCard from "@/components/User/PostCard"

async function loadPost() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()

    // await new Promise((resolve) => setTimeout(resolve, 3000))

    return data
}

async function PostPage() {
    const posts =  await loadPost()
    return (
        <div>
            {
                posts.map(post =>(
                    <PostCard post={post} key={post.id}/>
                ))
            }
        </div>
    )

}

export default PostPage
