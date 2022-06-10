function Input({ type, text, name, placeholder, handleOnChange, value, className, checked }) {
    return (
        <div className={className}>
            <label htmlFor={name}>{text}</label>
            <input type={type} name={name} id={name} placeholder={placeholder} onChange={handleOnChange} value={value} checked={checked}/>
        </div>

        
    )
}

export default Input