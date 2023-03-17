import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'
import Markdown from 'markdown-to-jsx';
import Link from 'next/link';
import Image from 'next/image';

export default function PostPage({ frontmatter: { title, date, cover_image }, content }) {
    return (<>
        <div className='mt-20'>

            {/* blog content: center, flex,  */}
            <div className='flex flex-col justify-center items-center'>
                <div className='text-3xl font-semibold'>{title}</div>
                <div className=''>Posted on: {date}</div>
                <Image src={cover_image} alt="" width="500" height="300" />
                <div className='prose'>
                    <Markdown>{content}</Markdown>
                </div>

            </div>


            {/* Below here, add related page or other post lists with carosuel */}

        </div>
    </>
    );
}


//`getStaticPaths()` must be used with `getStaticProps()`
// Generates `/blog/${markdown file name}`
export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'))
    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.md', '')
        }
    }))

    return {
        paths,
        fallback: false
        // fallback handles non-accepted routes
    }
}

export async function getStaticProps({ params: { slug } }) {
    const markdownWithMeta = fs.readFileSync(path.join('posts', `${slug}.md`), 'utf-8')
    const { data: frontmatter, content } = matter(markdownWithMeta)
    return {
        props: {
            frontmatter,
            content
        }
    }
}