import './NewPost.css';
import {useState} from "react";
// import {useNavigate} from "react-router-dom";
import {calculateReadTime} from "../helpers/calculateReadTime.js";
import {InputField} from "../components/InputField.jsx";
import {TextAreaField} from "../components/TextAreaField.jsx";
import {Button} from "../components/Button.jsx";
import {Link} from "react-router-dom";

function NewPostControlledComponents() {

    const [newPostId, setNewPostId] = useState(null);
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [author, setAuthor] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    //niet meer nodig
    //     const readTime = calculateReadTime(message);
    //     const comments = 0;
    //     const shares = 0;
    //     const navigate = useNavigate();




    async function handleSubmit(event) {
        event.preventDefault();

        const newPost = {
            title: title,
            subtitle: subtitle,
            content: message,
            author: author,
            created: new Date().toISOString(),
            readTime: calculateReadTime(message),
            comments: 0,
            shares: 0
        };

        try {
            const response = await fetch("http://localhost:3001/blogposts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newPost)
            });

            const data = await response.json();
            console.log(data);
            setNewPostId(data.id);
        } catch (error) {
            console.error(error);
            setError("Er is iets misgegaan bij het toevoegen van de blogpost.");
        }
    }


    return (
        <main className="new-post">
            <h1>Nieuwe post met Controlled Components</h1>

            {error && <p className="error-message">{error}</p>}

            {newPostId ? (
                <p>De blogpost is succesvol toegevoegd. Je kunt deze <Link to={`/posts/${newPostId}`}>hier</Link> bekijken.</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <InputField label="Titel" id="title" placeholder="Vul titel in" value={title} onChange={(event) => setTitle(event.target.value)} />
                    <InputField label="Subtitel" id="sub-title" placeholder="Vul subtitel in" value={subtitle} onChange={(event) => setSubtitle(event.target.value)} />
                    <InputField label="Auteur" id="author" placeholder="Vul auteur in" value={author} onChange={(event) => setAuthor(event.target.value)} />
                    <TextAreaField onChange={(event) => setMessage(event.target.value)} />
                    <Button />
                </form>
            )}
        </main>
    );
}

export default NewPostControlledComponents;