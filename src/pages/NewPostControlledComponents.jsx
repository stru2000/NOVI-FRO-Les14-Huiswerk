import './NewPostControlledComponents.css';
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {calculateReadTime} from "../helpers/calculateReadTime.js";
import {InputField} from "../assets/components/InputField.jsx";

function NewPostControlledComponents() {

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

                <InputField label="Titel" id="title" placeholder="Vul titel in" value={title} onChange={(event) => setTitle(event.target.value)} />

                <InputField label="Subtitel" id="sub-title" placeholder="Vul subtitel in" value={subtitle} onChange={(event) => setSubtitle(event.target.value)} />

                <InputField label="Auteur" id="author" placeholder="Vul auteur in" value={author} onChange={(event) => setAuthor(event.target.value)} />

                <label htmlFor="message">Bericht: </label>
                <textarea placeholder="Typ bericht" name="message" id="message" required value={message} minLength={300} maxLength={2000} onChange={(event) => setMessage(event.target.value)} />

                <button type="submit">Verzenden</button>
            </form>
        </main>
    );
}

export default NewPostControlledComponents;