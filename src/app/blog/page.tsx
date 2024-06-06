import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';
import { get } from '../actions/blog/get';
import { BlogData } from './BlogData';


export default async function Blog() {
    const post: any = await get()
    return (
        <main className="bg-[#021922] min-h-screen flex flex-col">
            <Navbar />
            <BlogData
                posts={post.content}
            />
            <Footer />
        </main>

    );
}
