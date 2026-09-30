import { useState } from "react";

function BlogOverviewTest() {
    const [posts, setPosts] = useState([]);

    async function fetchPosts() {
        try {
            const response = await fetch("http://localhost:3001/blogposts");
            const data = await response.json();
            setPosts(data);
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }

    async function fetchPost6() {
        try {
            const response = await fetch("http://localhost:3001/blogposts/6");
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }

    async function addPost() {
        try {
            const response = await fetch("http://localhost:3001/blogposts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: "Wat gebruiker heeft ingevuld",
                    subtitle: "Wat gebruiker heeft ingevuld",
                    content: "Wat gebruiker heeft ingevuld, in dit geval minder dan 100 woorden",
                    author: "Voornaam achternaam",
                    created: "2023-09-21T09:30:00Z",
                    readTime: 1,
                    comments: 0,
                    shares: 0
                })
            });

            const data = await response.json();
            console.log("Post succesvol toegevoegd:", data);
        } catch (error) {
            console.error("Post toevoegen mislukt:", error);
        }
    }

    async function deletePost() {
        try {
            const response = await fetch("http://localhost:3001/blogposts/16", {
                method: "DELETE"
            });

            if (response.ok) {
                console.log("Post succesvol verwijderd");
            } else {
                console.error("Post verwijderen mislukt");
            }
        } catch (error) {
            console.error("Post verwijderen mislukt:", error);
        }
    }

    async function updatePost() {
        try {
            const response = await fetch("http://localhost:3001/blogposts/1");
            const post = await response.json();

            const updatedPost = {
                ...post,
                subtitle: "Deze subtitel is gewijzigd"
            };

            const updateResponse = await fetch("http://localhost:3001/blogposts/1", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedPost)
            });

            if (updateResponse.ok) {
                console.log("Post succesvol gewijzigd");
            } else {
                console.error("Post wijzigen mislukt");
            }
        } catch (error) {
            console.error("Post wijzigen mislukt:", error);
        }
    }

    return (
        <main>
            <h1>Blog API Test</h1>
            <button onClick={fetchPosts}>Alle posts ophalen</button>
            <p>Aantal opgehaalde posts: {posts.length}</p>
            <button onClick={fetchPost6}>Post 6 ophalen</button>
            <button onClick={addPost}>Nieuwe post toevoegen</button>
            <button onClick={deletePost}>Post verwijderen</button>
            <button onClick={updatePost}>Post wijzigen</button>

        </main>
    );
}

export default BlogOverviewTest;