import './BlogPost.css';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import data from "../constants/data.json"
import { formatDate } from "../helpers/formatDate.js";
import { ClockIcon, ArrowArcLeftIcon } from "@phosphor-icons/react";
import { PostStats } from "../components/PostStats.jsx";

function BlogPost() {
    const { id } = useParams();
    const post = data.find(post => post.id === Number(id));

    return (
        <div className="blog-post-page">
            <main className="blog-post">
                <h1>{post.title}</h1>
                <h2>{post.subtitle}</h2>
                <p className="blog-post-info">Geschreven door {post.author} op {formatDate(post.created)}</p>
                <p className="blog-post-read-time"><ClockIcon /> {post.readTime} minuten lezen</p>
                <p className="blog-post-content">{post.content}</p>
                <PostStats comments={post.comments} shares={post.shares} />
                <Link className="blog-post-back-link" to="/blogoverview"><ArrowArcLeftIcon /> Terug naar de overzichtspagina</Link>
            </main>
            <footer>Blogventure © 2023 - ontwikkeld voor NOVI Hogeschool</footer>
        </div>
    )
}

export default BlogPost;