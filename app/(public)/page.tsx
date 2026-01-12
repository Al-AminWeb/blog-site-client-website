import { getPosts } from "@/lib/mock-api";
 import BlogCard from "@/components/blog/BlogCard";

export default async function HomePage() {
    const posts = await getPosts();

    return (
        <section className="grid md:grid-cols-3 gap-6">
            {posts.map(post => (
                <BlogCard key={post.id} post={post} />
            ))}
        </section>
    );
}
