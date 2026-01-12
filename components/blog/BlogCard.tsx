import Link from "next/link";
import { Post } from "@/types/post";

export default function BlogCard({ post }: { post: Post }) {
    return (
        <Link href={`/blogs/${post.slug}`}>
            <div className="border rounded-xl p-4 hover:shadow-md">
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p className="text-sm text-muted-foreground">{post.excerpt}</p>
            </div>
        </Link>
    );
}
