const API_URL = "https://api.oluwasetemi.dev"

export async function getPosts() {
    const response = await fetch(
        `${API_URL}/posts`
    )

    if (!response.ok) {
        throw new Error("Failed to fetch posts")
    }

    return response.json()
}

export async function getSinglePost(id:string) {
    const response = await fetch(
        `${API_URL}/posts/${id}`
    )

    if (!response.ok) {
        throw new Error("Post not found")
    }

    return response.json()
}