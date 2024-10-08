import Photo from './Photo.jsx'
import Info from './Info.jsx'
import Buttons from './Buttons.jsx'

export default function Header(){
	return(
		<>
			<Photo />
			<div className="header--bottom">
				<Info />
				<Buttons />
			</div>
		</>
	)
}