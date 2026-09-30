import './InputField.css';

export function InputField({ label, id, placeholder, registration, ...props }) {

    return (
        <>
            <label htmlFor={id}>{label}: </label>
            {/* registration bevat de gegevens van register(), inclusief de speciale ref */}
            <input type="text" id={id} placeholder={placeholder} required {...registration} {...props} />
        </>
    );

}