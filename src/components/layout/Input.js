function Input({ type, text, name, placeholder, handleOnChange, value, className, checked, required }) {
    return (
        <div className={className}>
            <label htmlFor={name}>{text}</label>
            <input type={type} name={name} id={name} placeholder={placeholder} onChange={handleOnChange} value={value} checked={checked} required={required} />
        </div>


    )
}

export default Input