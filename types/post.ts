// types/post.ts - Updated to include category
export interface Post {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    coverImage: string;
    authorId: string;
    status: "PUBLISHED" | "DRAFT";
    createdAt: string;
    category?: string; // Added
}