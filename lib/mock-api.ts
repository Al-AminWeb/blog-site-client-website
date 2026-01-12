import {posts} from "@/mock/posts";

export async function getPosts() {
    const categories = ["Frontend", "Backend", "DevOps", "Database", "Tutorial", "Best Practices"];

    return posts.map(post => ({
        ...post,
        category: categories[Math.floor(Math.random() * categories.length)],
        readTime: Math.ceil(post.content.split(" ").length / 200),
        author: {
            name: post.authorId === "user_1" ? "Alex Johnson" :
                post.authorId === "user_2" ? "Sarah Chen" :
                    post.authorId === "user_3" ? "Mike Rodriguez" :
                        post.authorId === "user_4" ? "Priya Patel" : "David Kim",
            avatar: `/avatars/${post.authorId}.png`,
            bio: "Full-stack developer passionate about clean code and user experience"
        },
        tags: ["JavaScript", "Web Development", "Tutorial"].slice(0, Math.floor(Math.random() * 3) + 1)
    }));
}

export async function getPostBySlug(slug: string) {
    const posts = await getPosts();
    return posts.find(post => post.slug === slug);
}

export async function getRelatedPosts(currentSlug: string) {
    const posts = await getPosts();
    const currentPost = posts.find(post => post.slug === currentSlug);

    if (!currentPost) return [];

    return posts
        .filter(post => post.slug !== currentSlug && post.category === currentPost.category)
        .slice(0, 3);
}