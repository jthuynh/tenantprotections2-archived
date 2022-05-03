import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TimelineItem = ({ btnType, boldText, regText, onClick }) => {
  return (
    <div className={`timeline-container ${btnType}`} onClick={onClick}>
      <div className="timeline-icon"></div>
      <div className="timeline-body">
        <p className="timeline-title">
          {<span className="reg-text-area">{regText}</span>}
          {<span className="bold-text-area left">${boldText}</span>}
          {<FontAwesomeIcon icon={faPen} className='pen-icon rent-pen-pos'/>}
        </p>
      </div>
    </div>


  )
}

export default TimelineItem