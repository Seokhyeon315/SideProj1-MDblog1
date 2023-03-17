import React from "react";
import Link from "next/link";
import Image from "next/image";

//get prop:post from blog/index.jsx
const Post = ({ post }) => {
    return (<>
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 gap-3">

                <Image className="w-full h-48 object-cover" src={post.frontmatter.cover_image} alt="" width={500} height={300} priority />
                <div className="p-4">
                    <div className="font-bold text-xl mb-2">{post.frontmatter.title}</div>
                    <div className="text-gray-700 text-base">Posted on: {post.frontmatter.date}</div>

                    <Link href={`/blog/${post.slug}`} legacyBehavior>
                        <a className="mt-2 bg-indigo-500 rounded-md text-white inline-block px-4 py-2 hover:bg-indigo-600">Read More</a>
                    </Link>
                </div>
            </div>


        </div>
    </>

    );
};

export default Post;


