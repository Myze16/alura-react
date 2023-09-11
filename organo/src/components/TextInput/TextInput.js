import './TextInput.css'

function TextInput({required, label, placeholder}) {
    return (
        <div className="text-input">
            <label>{label}</label>
            <input required={required} placeholder={placeholder}/>
        </div>
    )
}

export default TextInput;