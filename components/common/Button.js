import {color} from '../../constant/primitive'

const buttonStyle = {
    backgroundColor: color.primary,

}
const Button = ({label, handleClick}) => (
        <button
            onClick={handleClick}
            style={buttonStyle}
            className="btn btn-default"
        >
            {label}
        </button>


);

export default Button;