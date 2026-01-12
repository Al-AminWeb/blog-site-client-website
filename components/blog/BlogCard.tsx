// components/blog/BlogCard.tsx
import Link from "next/link";
import { Post } from "@/types/post";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface BlogCardProps {
    post: Post;
    index?: number;
}

export default function BlogCard({ post, index = 0 }: BlogCardProps) {
    // Color variations for different categories
    const colors = [
        "from-blue-500 to-cyan-400",
        "from-purple-500 to-pink-500",
        "from-green-500 to-emerald-400",
        "from-orange-500 to-yellow-500",
        "from-red-500 to-pink-400",
        "from-indigo-500 to-blue-400",
    ];

    const colorClass = colors[index % colors.length];
    const readingTime = Math.ceil(post.content.split(" ").length / 200); // Approximate reading time

    return (
        <Link href={`/blogs/${post.slug}`}>
            <div className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Image/Color Header */}
                <div className={`h-48 relative overflow-hidden ${colorClass} bg-gradient-to-br`}>
                    {/* Decorative pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-white/20"></div>
                        <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-white/20"></div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                            {post.category || "Technology"}
                        </span>
                    </div>

                    {/* Date */}
                    <div className="absolute bottom-4 right-4">
                        <div className="bg-black/20 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {post.createdAt}
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6">
                    {/* Meta Info */}
                    <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center gap-1 text-gray-500 text-sm">
                            <Clock className="h-4 w-4" />
                            <span>{readingTime} min read</span>
                        </div>
                        <div className="text-sm text-gray-500">
                            by {post.authorId.replace("user_", "Author ")}
                        </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-600 mb-6 line-clamp-3">
                        {post.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2">
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map((i) => (
                                    <div
                                        key={i}
                                        className={`h-8 w-8 rounded-full border-2 border-white ${i === 1 ? 'bg-gradient-to-r from-blue-400 to-cyan-300' : i === 2 ? 'bg-gradient-to-r from-purple-400 to-pink-300' : 'bg-gradient-to-r from-green-400 to-emerald-300'}`}
                                    />
                                ))}
                            </div>
                            <span className="text-sm text-gray-500">+{Math.floor(Math.random() * 50)} reading</span>
                        </div>

                        <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                            <span className="text-sm">Read more</span>
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </div>
                </div>

                {/* Hover Effect Indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
        </Link>
    );
}