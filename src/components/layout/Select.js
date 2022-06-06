function Select({ text, name, options, handleOnChange, value }) {
    return (
        <div>
            <label htmlFor={name}>{text}</label>
            <select
                name={name}
                id={name}
                onChange={handleOnChange}
                value={value || ''}
            >
                <option disabled>Selecione um horário</option>
                {options.map((option) => (
                    <option value={option.name} key={option.id}>{option.name}</option>
                ))}
            </select>    
        </div>
    )
}

export default Select