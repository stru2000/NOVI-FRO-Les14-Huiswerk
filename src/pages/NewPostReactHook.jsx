import './NewPost.css';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { calculateReadTime } from "../helpers/calculateReadTime.js";
import { InputField } from "../components/InputField.jsx";
import {TextAreaField} from "../components/TextAreaField.jsx";
import {Button} from "../components/Button.jsx";

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
            <h1>Nieuwe post met React Hook Form</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <InputField label="Titel" id="title" placeholder="Vul titel in" registration={register("title")} />

                <InputField label="Subtitel" id="sub-title" placeholder="Vul subtitel in" registration={register("subtitle")} />

                <InputField label="Auteur" id="author" placeholder="Vul auteur in" registration={register("author")} />

                <TextAreaField registration={register("content")} />

                <Button />
            </form>
        </main>
    );
}

export default NewPostReactHook;