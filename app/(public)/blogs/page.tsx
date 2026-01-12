import { posts } from "@/mock/posts";

export async function generateStaticParams() {
    return posts.map(post => ({
        slug: post.slug,
    }));
}
