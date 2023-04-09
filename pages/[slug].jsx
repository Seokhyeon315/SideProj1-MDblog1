import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'
import Markdown from 'markdown-to-jsx';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';


// Disable right-click for image
if (typeof window !== 'undefined') {
    window.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });
}


export default function PostPage({ frontmatter: { title, date, cover_image }, content, currentUrl }) {
    return (<>
        <Head>
            <link rel="canonical" href={`https://scifit.org${currentUrl}`} />
        </Head>
        <div className='mt-20 sm:mt-28'>

            {/* blog content: center, flex,  */}
            <div className='flex flex-col justify-center items-center px-4'>
                <div className='text-2xl sm:text-3xl font-semibold mb-2'>{title}</div>
                <div className='text-sm sm:text-base mb-4'>Posted on: {date}</div>
                <Image src={cover_image} alt="" width="500" height="300" className='rounded-lg shadow-md' priority={true} />
                <div className='prose mt-6'>
                    <Markdown>{content}</Markdown>
                </div>

            </div>


            {/* Below here, add related page or other post lists with carosuel */}
            <div className="mt-10 sm:mt-20 flex flex-col items-center">
                <Link href="/">
                    <button className="text-lg font-medium mb-2 bg-teal-400 rounded-md p-2">See Other Posts</button>
                </Link>

                {/* Add carousel or other related posts list */}
            </div>

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
            content,

        }
    }
}