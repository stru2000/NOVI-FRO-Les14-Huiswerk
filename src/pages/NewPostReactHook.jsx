import './NewPostReactHook.css';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { calculateReadTime } from "../helpers/calculateReadTime.js";
import { InputField } from "../assets/components/InputField.jsx";

function NewPostReactHook() {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    function onSubmit(data) {
        const newPost = {
            title: data.title,
            subtitle: data.subtitle,
            content: data.content,
            author: data.author,
            created: new Date().toISOString(),
            readTime: calculateReadTime(data.content),
            comments: 0,
            shares: 0
        };

        console.log(newPost);
        navigate("/blogoverview");
    }

    return (
        <main className="new-post">
            <h1>Nieuwe post</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <InputField label="Titel" id="title" placeholder="Vul titel in" registration={register("title")} />

                <InputField label="Subtitel" id="sub-title" placeholder="Vul subtitel in" registration={register("subtitle")} />

                <InputField label="Auteur" id="author" placeholder="Vul auteur in" registration={register("author")} />

                <label htmlFor="message">Bericht: </label>
                <textarea placeholder="Typ bericht" id="message" required minLength={300} maxLength={2000} {...register("content")} />

                <button type="submit">Verzenden</button>
            </form>
        </main>
    );
}

export default NewPostReactHook;