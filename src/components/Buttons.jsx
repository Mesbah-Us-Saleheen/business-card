import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'

export default function Buttons(){
	return(
		<>
			<div className="header--buttons">
				<button id="btn-email"><FontAwesomeIcon icon = {faEnvelope} className="header--icons" />Email</button>
				<button id="btn-linkedin"><FontAwesomeIcon icon = {faLinkedin} className="header--icons" />Linkedin</button>
			</div>
		</>
	)
}