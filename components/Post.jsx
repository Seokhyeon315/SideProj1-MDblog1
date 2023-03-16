import React from "react";
import Link from "next/link";
import Image from "next/image";

//get prop:post from blog/index.jsx
const Post = ({ post }) => {
    return (<div className="max-w-sm rounded overflow-hidden shadow-lg">
        <Image className="w-full" src={post.frontmatter.cover_image} alt="" width="500" height="350" />
        <div className="px-6 py-4">
            <div className="font-bold text-lg mb-2">{post.frontmatter.title}</div>
            <div className="mb-2">Posted on: {post.frontmatter.date}</div>
            <Link href={`/blog/${post.slug}`} legacyBehavior>
                <a className="px-2 py-1 bg-green-400 rounded-md">Read More</a>
            </Link>
        </div>
    </div>
    );
};

export default Post;


