export interface Post {
    id: string;
    title: string;
    slug: string;
    content: string;
    excerpt: string;
    coverImage: string;
    authorId: string;
    status: "PUBLISHED" | "DRAFT";
    createdAt: string;
}
