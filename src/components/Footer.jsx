import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitter,faLinkedin,faCodepen,faGithub} from '@fortawesome/free-brands-svg-icons'

export default function Footer(){
	return(
		<>
			<footer>
				<FontAwesomeIcon icon={faTwitter} className="footer--icons" />
				<FontAwesomeIcon icon={faLinkedin} className="footer--icons" />
				<FontAwesomeIcon icon={faCodepen} className="footer--icons" />
				<FontAwesomeIcon icon={faGithub} className="footer--icons" />
			</footer>	
		</>
	)
}