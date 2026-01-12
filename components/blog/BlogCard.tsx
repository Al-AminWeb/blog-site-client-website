// components/blog/BlogCard.tsx
import Link from "next/link";
import { Post } from "@/types/post";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface BlogCardProps {
    post: Post;
    index?: number;
}

export default function BlogCard({ post, index = 0 }: BlogCardProps) {
    const colors = [
        "from-blue-500 to-cyan-400",
        "from-purple-500 to-pink-500",
        "from-green-500 to-emerald-400",
        "from-orange-500 to-yellow-500",
        "from-red-500 to-pink-400",
        "from-indigo-500 to-blue-400",
    ];

    const colorClass = colors[index % colors.length];
    const readingTime = Math.ceil(post.content.split(" ").length / 200);

    return (
        <article
            aria-labelledby={`blog-title-${post.slug}`}
            className="group bg-white rounded-xl border border-gray-200 overflow-hidden
                       hover:shadow-xl transition-all duration-300 hover:-translate-y-1
                       focus-within:ring-2 focus-within:ring-blue-500"
        >
            {/* Header */}
            <div
                className={`relative h-48 overflow-hidden bg-gradient-to-br ${colorClass}`}
                aria-hidden="true"
            >
                {/* Decorative elements */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-white/20" />
                    <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-white/20" />
                </div>

                {/* Category */}
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm
                                 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category || "Technology"}
                </span>

                {/* Date */}
                <span className="absolute bottom-4 right-4 bg-black/30 backdrop-blur-sm
                                 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                    <Calendar className="h-3 w-3" aria-hidden="true" />
                    <time dateTime={post.createdAt}>{post.createdAt}</time>
                </span>
            </div>

            {/* Body */}
            <div className="p-6">
                {/* Meta */}
                <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" aria-hidden="true" />
                        {readingTime} min read
                    </span>
                    <span>
                        by {post.authorId.replace("user_", "Author ")}
                    </span>
                </div>

                {/* Title */}
                <h2
                    id={`blog-title-${post.slug}`}
                    className="text-xl font-bold text-gray-900 mb-3
                               group-hover:text-blue-600 transition-colors"
                >
                    {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-gray-600 mb-6 line-clamp-3">
                    {post.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    {/* Fake avatars (decorative) */}
                    <div className="flex items-center gap-2" aria-hidden="true">
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map((i) => (
                                <span
                                    key={i}
                                    className={`h-8 w-8 rounded-full border-2 border-white
                                        ${i === 1
                                        ? "bg-gradient-to-r from-blue-400 to-cyan-300"
                                        : i === 2
                                            ? "bg-gradient-to-r from-purple-400 to-pink-300"
                                            : "bg-gradient-to-r from-green-400 to-emerald-300"
                                    }`}
                                />
                            ))}
                        </div>
                        <span className="text-sm text-gray-500">
                            Popular
                        </span>
                    </div>

                    {/* CTA */}
                    <Link
                        href={`/blogs/${post.slug}`}
                        className="inline-flex items-center gap-2 text-blue-600 font-semibold
                                   focus:outline-none focus-visible:ring-2
                                   focus-visible:ring-blue-500 focus-visible:ring-offset-2
                                   hover:gap-3 transition-all"
                        aria-label={`Read full article: ${post.title}`}
                    >
                        <span className="text-sm">Read more</span>
                        <ArrowRight
                            className="h-4 w-4 transition-transform group-hover:translate-x-1"
                            aria-hidden="true"
                        />
                    </Link>
                </div>
            </div>
        </article>
    );
}
