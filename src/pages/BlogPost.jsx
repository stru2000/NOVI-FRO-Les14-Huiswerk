import './BlogPost.css';
import { useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import data from "../constants/data.json"

function BlogPost() {
    const { id } = useParams();
    const post = data.find(post => post.id === Number(id));

    return (
        <main>
            <p>{post.title} ({post.readTime} minuten)</p>
            <p>{post.subtitle}</p>
            <p>Geschreven door {post.author} op {post.created}</p>
            <p>{post.content}</p>
            <p>{post.comments} reacties - {post.shares} keer gedeeld</p>
            <p><Link to="/blogoverview">Terug naar de overzichtspagina</Link></p>
        </main>

    )
}

export default BlogPost;