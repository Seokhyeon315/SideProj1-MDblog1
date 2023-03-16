//This is where posts will be shown.
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import React from "react";
import Post from '@/components/Post';

const BlogHome = ({ posts }) => {

    return (<>
        <div className='mt-20'>
            <h1 className='text-center font-bold text-2xl'>SCIFIT Blog</h1>

            {/* List of all posts, grid */}
            <div className='mt-3 grid grid-cols-3 gap-4'>
                {posts.map((post, index) =>
                    <Post post={post} key={index} />
                )}
            </div>
        </div>
    </>
    );
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