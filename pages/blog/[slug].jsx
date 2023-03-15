import fs from 'fs';
import path from 'path';


export default function PostPage() {
    return <div>post</div>
}


export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'))

    return {
        paths: [{ params: {} }]
    }
}


export async function getStaticProps() {

}