export interface Post {
    title: string;
    date: string;
    order: number;
    badge: string;
    excerpt: string;
    slug: string;
}

export interface PageProps {
    page: {
        data: Post[];
        currentPage: number;
        totalPages: number;
    };
}
