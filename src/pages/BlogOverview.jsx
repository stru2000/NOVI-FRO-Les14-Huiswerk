import './BlogOverview.css';
import data from '../constants/data.json'
import { BlogPostItem } from "../components/BlogPostItem.jsx";

function BlogOverview() {

    return (
        <main>
            <h1>Bekijk alle {data.length} posts op het platform</h1>

            <ul>
                {data.map((post) => (
                    <BlogPostItem key={post.id} post={post} />
                ))}
            </ul>
        </main>
    );
}

export default BlogOverview;