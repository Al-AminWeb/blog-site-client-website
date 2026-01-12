// app/page.tsx
import { getPosts } from "@/lib/mock-api";
import BlogCard from "@/components/blog/BlogCard";
import { Search, Calendar, Filter } from "lucide-react";

export default async function HomePage() {
    const posts = await getPosts();

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Tech Insights & Tutorials
                    </h1>
                    <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                        Discover the latest in web development, cloud computing, and software engineering
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                            <input
                                type="search"
                                placeholder="Search articles, tutorials, and guides..."
                                className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Filters Bar */}
            <div className="bg-white border-b">
                <div className="max-w-6xl mx-auto px-4 py-4">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex items-center gap-2">
                            <Filter className="h-5 w-5 text-gray-500" />
                            <span className="text-sm font-medium text-gray-700">Filter by:</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {["All", "Frontend", "Backend", "DevOps", "Database", "Tutorial"].map((tag) => (
                                <button
                                    key={tag}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${tag === "All"
                                        ? "bg-blue-100 text-blue-700 border border-blue-200"
                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"}`}
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                        <div className="text-sm text-gray-500 flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{posts.length} articles published</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Post */}
            {posts.length > 0 && (
                <div className="max-w-6xl mx-auto px-4 py-8">
                    <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-2xl">
                        <div className="md:flex">
                            <div className="md:w-2/3 p-8 md:p-12">
                                <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-200 px-3 py-1 rounded-full text-sm mb-4">
                                    <span className="h-2 w-2 bg-blue-400 rounded-full"></span>
                                    Featured Article
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                    {posts[0].title}
                                </h2>
                                <p className="text-gray-300 text-lg mb-6">
                                    {posts[0].excerpt}
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                                        <div>
                                            <p className="text-white font-medium">Alex Johnson</p>
                                            <p className="text-gray-400 text-sm">{posts[0].createdAt}</p>
                                        </div>
                                    </div>
                                    <button className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                                        Read Article →
                                    </button>
                                </div>
                            </div>
                            <div className="md:w-1/3 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center p-8">
                                        <div className="text-6xl font-bold text-white/20 mb-4">•</div>
                                        <p className="text-white/80 text-lg">Featured Insight</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Main Content */}
            <main className="max-w-6xl mx-auto px-4 py-8">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Latest Articles</h2>
                        <p className="text-gray-600 mt-2">Stay updated with the latest trends and technologies</p>
                    </div>
                    <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option>Most Recent</option>
                        <option>Most Popular</option>
                        <option>Trending</option>
                    </select>
                </div>

                {/* Blog Grid */}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.slice(1).map((post, index) => (
                        <BlogCard key={post.id} post={post} index={index} />
                    ))}
                </section>

                {/* Newsletter Section */}
                <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 border border-blue-100">
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                            <div className="text-blue-600 text-2xl">✉️</div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Never miss an update
                        </h3>
                        <p className="text-gray-600 mb-8">
                            Subscribe to our newsletter and get the latest tech insights delivered straight to your inbox.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg">
                                Subscribe
                            </button>
                        </div>
                        <p className="text-sm text-gray-500 mt-4">
                            No spam. Unsubscribe at any time.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}