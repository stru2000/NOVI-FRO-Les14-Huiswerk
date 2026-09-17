import './BlogOverview.css';
import {Link} from "react-router-dom";
import data from '../constants/data.json'

function BlogOverview() {

    return (
        <main>
            <h1>Blogoverview</h1>

            <ul>
                {data.map((post) => (
                    <li key={post.id}>
                        <p><Link to={`/posts/${post.id}`}>{post.title}</Link> ({post.author})</p>
                        <p>Reacties: {post.comments} - {post.shares} keer gedeeld</p>
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default BlogOverview;