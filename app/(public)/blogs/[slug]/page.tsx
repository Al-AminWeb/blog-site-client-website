// app/blogs/[slug]/page.tsx
import { getPostBySlug, getRelatedPosts } from "@/lib/mock-api";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Calendar, Clock, Tag, Share2, Bookmark, User } from "lucide-react";
import Link from "next/link";

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const post = await getPostBySlug(params.slug);

    if (!post) {
        return {
            title: "Post Not Found",
        };
    }

    return {
        title: `${post.title} | Tech Blog`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            publishedTime: post.createdAt,
        },
    };
}

export default async function BlogDetailPage({ params }: { params: { slug: string } }) {
    const post = await getPostBySlug(params.slug);
    const relatedPosts = await getRelatedPosts(params.slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                        <Tag className="h-4 w-4" />
                        <span className="text-sm font-medium">{post.category}</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                        {post.title}
                    </h1>
                    <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                        {post.excerpt}
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                        <div className="flex items-center gap-2">
                            <User className="h-4 w-4" />
                            <span>{post.author?.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{post.createdAt}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>{post.readTime} min read</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="flex gap-8">
                    {/* Main Article */}
                    <article className="flex-1">
                        {/* Featured Image */}
                        <div className="mb-8">
                            <div className="aspect-video bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl overflow-hidden mb-6">
                                {/* Replace with actual image if available */}
                                <div className="w-full h-full flex items-center justify-center text-white">
                                    <div className="text-center">
                                        <div className="text-6xl mb-4">📝</div>
                                        <p className="text-xl font-semibold">{post.title}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex gap-2">
                                    {post.tags?.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-2">
                                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                                        <Bookmark className="h-5 w-5 text-gray-600" />
                                    </button>
                                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                                        <Share2 className="h-5 w-5 text-gray-600" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Article Content */}
                        <div className="prose prose-lg max-w-none">
                            <div className="text-gray-700 leading-relaxed space-y-6">
                                {post.content.split('\n').map((paragraph, index) => (
                                    <p key={index} className="text-lg">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>

                            {/* Code Example Section */}
                            <div className="my-12 bg-gray-900 rounded-xl p-6 overflow-x-auto">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-gray-400 text-sm">Example Code</span>
                                    <button className="text-blue-400 text-sm hover:text-blue-300">
                                        Copy
                                    </button>
                                </div>
                                <pre className="text-gray-200 text-sm">
                                    <code>{`// Example implementation
const BlogDetail = ({ post }) => {
    return (
        <article>
            <h1>{post.title}</h1>
            <div>{post.content}</div>
        </article>
    );
};`}</code>
                                </pre>
                            </div>

                            {/* Key Takeaways */}
                            <div className="my-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <span className="text-blue-600">📌</span> Key Takeaways
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <span className="text-blue-600 mt-1">✓</span>
                                        <span>Understand the core concepts behind {post.title.split(' ')[0]}</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-blue-600 mt-1">✓</span>
                                        <span>Implement practical solutions in your projects</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-blue-600 mt-1">✓</span>
                                        <span>Optimize performance and maintainability</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Author Bio */}
                        <div className="mt-12 pt-8 border-t border-gray-200">
                            <div className="flex items-start gap-4">
                                <div className="h-16 w-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                    {post.author?.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900">
                                        {post.author?.name}
                                    </h4>
                                    <p className="text-gray-600 mt-2">
                                        {post.author?.bio}
                                    </p>
                                    <div className="flex gap-4 mt-4">
                                        <span className="text-sm text-gray-500">5+ years experience</span>
                                        <span className="text-sm text-gray-500">•</span>
                                        <span className="text-sm text-gray-500">25+ articles</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside className="hidden lg:block w-80 space-y-8">
                        {/* Table of Contents */}
                        <div className="bg-white rounded-xl border border-gray-200 p-6">
                            <h3 className="font-bold text-lg text-gray-900 mb-4">Table of Contents</h3>
                            <nav className="space-y-2">
                                {["Introduction", "Getting Started", "Implementation", "Best Practices", "Conclusion"].map((item, index) => (
                                    <a
                                        key={index}
                                        href={`#${item.toLowerCase().replace(' ', '-')}`}
                                        className="block py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-2 rounded transition-colors"
                                    >
                                        {item}
                                    </a>
                                ))}
                            </nav>
                        </div>

                        {/* Related Posts */}
                        <div className="bg-white rounded-xl border border-gray-200 p-6">
                            <h3 className="font-bold text-lg text-gray-900 mb-4">Related Articles</h3>
                            <div className="space-y-4">
                                {relatedPosts.map((relatedPost) => (
                                    <Link
                                        key={relatedPost.id}
                                        href={`/blogs/${relatedPost.slug}`}
                                        className="group block"
                                    >
                                        <div className="p-3 hover:bg-gray-50 rounded-lg transition-colors">
                                            <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 line-clamp-2">
                                                {relatedPost.title}
                                            </h4>
                                            <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                                                <Clock className="h-3 w-3" />
                                                <span>{relatedPost.readTime} min read</span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Newsletter Sidebar */}
                        <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-6 text-white">
                            <h3 className="font-bold text-lg mb-3">Join our newsletter</h3>
                            <p className="text-blue-100 text-sm mb-4">
                                Get weekly updates on new articles and tutorials
                            </p>
                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-blue-200 mb-3"
                            />
                            <button className="w-full bg-white text-blue-600 font-semibold py-2 rounded-lg hover:bg-gray-100 transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </aside>
                </div>

                {/* Navigation */}
                <div className="mt-16 pt-8 border-t border-gray-200 flex justify-between">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                        ← Back to all articles
                    </Link>
                    <div className="flex gap-4">
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                            Like this article
                        </button>
                        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                            Share
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}