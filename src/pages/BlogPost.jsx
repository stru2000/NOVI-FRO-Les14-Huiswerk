import './BlogPost.css';
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { formatDate } from "../helpers/formatDate.js";
import { ClockIcon, ArrowArcLeftIcon } from "@phosphor-icons/react";
import { PostStats } from "../components/PostStats.jsx";

function BlogPost() {
    const { id } = useParams();
    const [post, setPost] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchPost() {
            try {
                const response = await fetch(`http://localhost:3001/blogposts/${id}`);
                const data = await response.json();

                console.log(data);
                setPost(data);
            } catch (error) {
                console.error(error);
                setError("De blogpost kon niet worden opgehaald.");
            } finally {
                setLoading(false);
            }
        }

        fetchPost();
    }, [id]);

    async function deletePost() {
        try {
            const response = await fetch(`http://localhost:3001/blogposts/${id}`, {
                method: "DELETE"
            });

            if (response.ok) {
                console.log("Blogpost succesvol verwijderd");
                navigate("/blogoverview");
            } else {
                console.log("Blogpost verwijderen is mislukt");
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <main className="blog-post">
            {loading && <p>Blogpost wordt geladen...</p>}

            {error && <p>{error}</p>}

            {post?.title && (
                <>
                    <h1>{post.title}</h1>
                    <h2>{post.subtitle}</h2>
                    <p className="blog-post-info">Geschreven door {post.author} op {formatDate(post.created)}</p>
                    <p className="blog-post-read-time"><ClockIcon /> {post.readTime} minuten lezen</p>
                    <p className="blog-post-content">{post.content}</p>
                    <PostStats comments={post.comments} shares={post.shares} />
                    <button onClick={deletePost}>Verwijder post</button>
                    <Link className="blog-post-back-link" to="/blogoverview"><ArrowArcLeftIcon /> Terug naar de overzichtspagina</Link>
                </>
            )}
        </main>
    );
}

export default BlogPost;