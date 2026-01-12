// app/page.tsx
import { getPosts } from "@/lib/mock-api";
import BlogCard from "@/components/blog/BlogCard";
import { Search, Calendar, Filter } from "lucide-react";

export default async function HomePage() {
    const posts = await getPosts();

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* ================= HERO SECTION ================= */}
            <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15),_transparent_70%)]"></div>

                <div className="relative max-w-6xl mx-auto text-center py-20 px-4 text-white">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
                        Tech Insights & Tutorials
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
                        Discover modern web development, cloud computing, and real-world software engineering
                    </p>

                    {/* Search */}
                    <div className="max-w-2xl mx-auto">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-blue-200" />
                            <input
                                type="search"
                                placeholder="Search articles, tutorials, and guides..."
                                className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/10 backdrop-blur-md
                                           border border-white/20 text-white placeholder-blue-200
                                           focus:outline-none focus:ring-4 focus:ring-white/30
                                           transition-all"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= FILTER BAR ================= */}
            <section className="bg-white border-b sticky top-0 z-20">
                <div className="max-w-6xl mx-auto px-4 py-4">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex items-center gap-2 text-gray-700">
                            <Filter className="h-5 w-5" />
                            <span className="text-sm font-medium">Filter by</span>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {["All", "Frontend", "Backend", "DevOps", "Database", "Tutorial"].map((tag) => (
                                <button
                                    key={tag}
                                    className={`px-4 py-2 rounded-full text-sm font-medium
                                        transition-all hover:scale-105
                                        ${tag === "All"
                                        ? "bg-blue-600 text-white shadow"
                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    }`}
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>

                        <div className="flex items-center gap-1 text-sm text-gray-500">
                            <Calendar className="h-4 w-4" />
                            <span>{posts.length} articles</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= FEATURED POST ================= */}
            {posts.length > 0 && (
                <section className="max-w-6xl mx-auto px-4 py-10">
                    <div className="rounded-2xl overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800
                                    shadow-2xl hover:-translate-y-1 transition-all">
                        <div className="md:flex">
                            <div className="md:w-2/3 p-8 md:p-12">
                                <span className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-200
                                                 px-3 py-1 rounded-full text-sm mb-4">
                                    <span className="h-2 w-2 bg-blue-400 rounded-full"></span>
                                    Featured Article
                                </span>

                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                    {posts[0].title}
                                </h2>
                                <p className="text-gray-300 text-lg mb-8">
                                    {posts[0].excerpt}
                                </p>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></div>
                                        <div>
                                            <p className="text-white font-medium">Alex Johnson</p>
                                            <p className="text-gray-400 text-sm">{posts[0].createdAt}</p>
                                        </div>
                                    </div>

                                    <button className="bg-white/90 text-gray-900 font-semibold
                                                       px-6 py-3 rounded-lg
                                                       hover:bg-white hover:scale-105
                                                       transition-all shadow">
                                        Read Article →
                                    </button>
                                </div>
                            </div>

                            <div className="md:w-1/3 bg-gradient-to-br from-blue-500 to-purple-600
                                            flex items-center justify-center text-white/80 text-lg">
                                Featured Insight
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* ================= MAIN CONTENT ================= */}
            <main className="max-w-6xl mx-auto px-4 py-10">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                            Latest Articles
                        </h2>
                        <p className="text-gray-600 mt-1">
                            Fresh insights from the tech world
                        </p>
                    </div>

                    <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white
                                       focus:ring-2 focus:ring-blue-500">
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

                {/* ================= NEWSLETTER ================= */}
                <section className="mt-20 bg-white/70 backdrop-blur-xl border border-blue-100
                                    rounded-2xl p-10 shadow-lg">
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="w-16 h-16 mx-auto mb-6 rounded-full
                                        bg-blue-100 flex items-center justify-center text-2xl">
                            ✉️
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                            Never miss an update
                        </h3>
                        <p className="text-gray-600 mb-8">
                            Get curated tech articles straight to your inbox.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 rounded-lg border
                                           focus:ring-2 focus:ring-blue-500"
                            />
                            <button className="px-6 py-3 rounded-lg text-white font-semibold
                                               bg-gradient-to-r from-blue-600 to-indigo-600
                                               hover:from-blue-700 hover:to-indigo-700
                                               hover:scale-105 transition-all shadow">
                                Subscribe
                            </button>
                        </div>

                        <p className="text-sm text-gray-500 mt-4">
                            No spam. Unsubscribe anytime.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}
