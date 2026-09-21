import './NewPost.css';
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {calculateReadTime} from "../helpers/calculateReadTime.js";

function NewPost() {

    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [author, setAuthor] = useState("");
    const [message, setMessage] = useState("");
    const readTime = calculateReadTime(message);
    const comments = 0;
    const shares = 0;

    const navigate = useNavigate();




    function handleSubmit (event) {
        event.preventDefault();
        const created = new Date().toISOString();

        const newPost = {
            title: title,
            subtitle: subtitle,
            content: message,
            author: author,
            created: created,
            readTime: readTime,
            comments: comments,
            shares: shares
        };

        console.log(newPost);
        navigate("/blogoverview");
    }

    return (
        <main className="new-post">
            <h1>Nieuwe post</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Titel: </label>
                <input type="text" placeholder="Vul titel in" name="title" id="title" required value={title} onChange={(event) => setTitle(event.target.value)} />

                <label htmlFor="sub-title">Subtitel: </label>
                <input type="text" placeholder="Vul subtitel in" name="sub-title" id="sub-title" required value={subtitle} onChange={(event) => setSubtitle(event.target.value)} />

                <label htmlFor="author">Auteur: </label>
                <input type="text" placeholder="Vul auteur in" name="author" id="author" required value={author} onChange={(event) => setAuthor(event.target.value)} />

                <label htmlFor="message">Bericht: </label>
                <textarea placeholder="Typ bericht" name="message" id="message" required value={message} minLength={300} maxLength={2000} onChange={(event) => setMessage(event.target.value)} />

                <button type="submit">Verzenden</button>
            </form>
        </main>
    );
}

export default NewPost;