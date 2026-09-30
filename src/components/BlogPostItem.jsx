import './BlogPostItem.css'
import { Link } from "react-router-dom";
import { PostStats } from "../components/PostStats.jsx";

export function BlogPostItem({ post }) {

    return (
        <li className="post-item">
            <p><Link to={`/posts/${post.id}`}>{post.title}</Link> ({post.author})</p>
            <PostStats comments={post.comments} shares={post.shares} />
        </li>
    );
}