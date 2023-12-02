"use client"
import Link from "next/link"
function PostCard({ post }) {

    return (
        <div>
            <div key={post.id}>
                <Link href={`/posts/${post.id}`}>
                <h3>{post.id}. {post.title}</h3>
                </Link>
                <p>{post.body}</p>
                <button onClick={() => {
                    alert('Esto funciona')
                }}>Click</button>
            </div>
        </div>
    )

}

export default PostCard