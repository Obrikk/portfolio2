import Night from '../../public/img/Night.png'
import LetterA from '../../public/img/letter-a.png'
import Light from '../../public/img/Light.png'

import '../scss/header.scss'
import Menu from './Menu'

import {useState} from 'react'


function Header() {

    const [isNight, setNightMode] = useState(false)



    return ( 
        <nav>
            <ul>
                <li>
                    <img src={LetterA} alt="Logo" className='letter-a' />
                </li>
                
                <li className='li-container'>
                    <img onClick={() => (setNightMode(!isNight))} src={isNight ? Night : Light} className='night-mode-btn' alt="button night mode" />
                    <Menu></Menu>

                </li>
                
            </ul>
        </nav>
     );
}

export default Header;