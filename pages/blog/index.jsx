//This is where posts will be shown.
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import React from "react";

const BlogHome = ({ posts }) => {
    console.log(posts)
    return <div className='mt-20'>
        <h1 className='text-center font-bold text-2xl'>SCIFIT Blog</h1>
        <div className='text-center'>Horizontal Carousel blog posts</div>

        {/* List of all posts */}
        <div className=''>
            {posts.map((post, index) =>
                <ul>
                    <li key={index}>{post.frontmatter.title}</li>
                </ul>
            )}
        </div>

    </div>;
};

export default BlogHome;


//Next JS is smart enough to know if I use fs in getStaticProps(), it will runs as servers-side
export async function getStaticProps() {
    //Get files from the posts dir
    const files = fs.readdirSync(path.join('posts'))

    //Get slug and frontmatter from posts
    const posts = files.map(filename => {
        //Create slug
        const slug = filename.replace('.md', '')

        //Get frontmatter of markdown file
        const mdWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
        const { data: frontmatter } = matter(mdWithMeta);

        return {
            slug,
            frontmatter,
        }
    })


    return {
        props: {
            posts
        }
    }
}