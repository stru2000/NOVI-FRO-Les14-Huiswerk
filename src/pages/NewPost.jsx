import './NewPost.css';

function NewPost() {
    return (
        <main>
            <h1>Nieuwe post</h1>
            <form>
                <div>
                    <label htmlFor="title">Titel: </label>
                    <input type="text" placeholder="Vul titel in" name="title" id="title" required />
                </div>

                <div>
                    <label htmlFor="sub-title">Subtitel: </label>
                    <input type="text" placeholder="Vul subtitel in" name="sub-title" id="sub-title" required />
                </div>

                <div>
                    <label htmlFor="author">Auteur: </label>
                    <input type="text" placeholder="Vul auteur in" name="author" id="author" required />
                </div>

                <div>
                    <label htmlFor="message">Bericht: </label>
                    <input type="text" placeholder="Typ bericht" name="message" id="message" required />
                </div>
            </form>
        </main>
    );
}

export default NewPost;