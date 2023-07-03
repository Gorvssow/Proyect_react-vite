
const Button = (props) => {
    const {label = "btn", disabled=false} = props
    return (
        <button
            disabled={disabled}
            className={`bg-blue-600 border-double border-4 border-sky-500 ${disabled? 'opacity-25' : 'opacity-100'}`}>
            {label}
        </button>
    )
}
export default Button;