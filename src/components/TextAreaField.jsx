import './InputField.css'

export function TextAreaField({registration, ...props}){

    return (
        <>
            <label htmlFor="message">Bericht: </label>
            <textarea placeholder="Type bericht" id="message" required minLength={300} maxLength={2000} {...registration} {...props} />
        </>
    );
}