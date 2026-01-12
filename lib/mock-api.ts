import { posts } from "@/mock/posts";

export async function getPosts() {
    return posts.filter(p => p.status === "PUBLISHED");
}

export async function getPostBySlug(slug: string) {
    return posts.find(p => p.slug === slug);
}
