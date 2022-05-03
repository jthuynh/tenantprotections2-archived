import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TextArea = ({ btnType, boldText, regText, onClick, penPos }) => {
  return (
    <button type="button" className={btnType} onClick ={onClick}>
        <span className='bold-text-area'>{boldText}</span>
        <br/>
        <span className='reg-text-area'>{regText}</span>
        <FontAwesomeIcon icon={faPen} transform="shrink-4" className={`pen-icon ${penPos}`}/>
    </button>
  )
}

export default TextArea