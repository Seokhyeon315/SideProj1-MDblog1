// //This is main homepage
//This is where posts will be shown.
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import React from "react";
import Post from '@/components/Post';
import { sortByDate } from '../utils'

const BlogHome = ({ posts }) => {

  return (<>
    <div className='mt-20'>
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className='text-center font-bold text-3xl'>SCIFIT Blog</h1>
      </div>


      {/* List of all posts, grid */}
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {posts.map((post, index) =>
            <Post post={post} key={index} />
          )}
        </div>
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
      posts: posts.sort(sortByDate),
    }
  }
}
