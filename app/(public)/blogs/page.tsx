// app/(public)/blogs/page.tsx
import { getPosts } from "@/lib/mock-api";
import BlogCard from "@/components/blog/BlogCard";

export default async function BlogsPage() {
    const posts = await getPosts();

    return (
        <section className="grid gap-6 md:grid-cols-3">
            {posts.map(post => (
                <BlogCard key={post.id} post={post} />
            ))}
        </section>
    );
}
