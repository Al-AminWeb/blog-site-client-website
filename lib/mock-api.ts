import {posts} from "@/mock/posts";

export async function getPosts() {
    // Add categories to posts
    const categories = ["Frontend", "Backend", "DevOps", "Database", "Tutorial", "Best Practices"];

    return posts.map(post => ({
        ...post,
        category: categories[Math.floor(Math.random() * categories.length)],
        // Add some mock engagement data
        likes: Math.floor(Math.random() * 100),
        views: Math.floor(Math.random() * 1000) + 100,
    }));
}