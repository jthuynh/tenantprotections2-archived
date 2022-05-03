import PropTypes from 'prop-types';
import '../../src/index.css'

const Button = ({ btnType, text, onClick}) => {
    // console.log(btnType, text)
  return <button onClick={onClick} className={btnType} 
    type='button'>{text}</button>
};

Button.propTypes = {
    btnType: PropTypes.string,
    text: PropTypes.string.isRequired
};

Button.defaultProps = {
    background: '#172F6E'
};

export default Button