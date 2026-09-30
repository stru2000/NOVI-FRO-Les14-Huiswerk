import './BlogOverview.css';
import { BlogPostItem } from "../components/BlogPostItem.jsx";
import { useEffect, useState } from "react";

function BlogOverview() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await fetch("http://localhost:3001/blogposts");
                const data = await response.json();

                console.log(data);
                setPosts(data);
            } catch (error) {
                console.error(error);
                setError("De blogposts konden niet worden opgehaald.");
            } finally {
                setLoading(false);
            }
        }

        fetchPosts();
    }, []);

    return (
        <main>
            <h1>Bekijk alle {posts.length} posts op het platform</h1>

            {loading && <p>Blogposts worden geladen...</p>}

            {error && <p>{error}</p>}

            <ul>
                {posts?.map((post) => (
                    <BlogPostItem key={post.id} post={post} />
                ))}
            </ul>
        </main>
    );
}

export default BlogOverview;