import logo1 from '../assets/logo1.PNG'
import logo2 from '../assets/logo2.PNG'
import logo3 from '../assets/logo3.PNG'
import '../styles/Caracteristics.css'
import { useState } from 'react'

function Caracteristics() {
    const [isOpen1, setOpen1] = useState(false)
    const [isOpen2, setOpen2] = useState(false)
    const [isOpen3, setOpen3] = useState(false)
    return <div className='car-block'>
        
        
        {isOpen1 ? 
        <p>
            <div className='car-container' ><img src={logo1} alt='logo1' className='car-logo'  onMouseLeave={() => setOpen1(!isOpen1)}/> </div>
            <div className='car-block-texte'>
                <div className='car-texte'><strong>Une autonomie pour une mobilité sans limite</strong></div>
                <div className='car-texte'>Doté d’une double batterie ce vélo vous permettra d’allez jusqu’à <strong>150 km d’autonomie.</strong></div>
            </div>
        </p> 
        :
        <p>
            <div className='car-container'><img src={logo1} alt='logo1' className='car-logo'  onMouseEnter={() => setOpen1(!isOpen1)}/> </div>
            <div className='car-titre'>Autonomie</div>
        </p>    
        }

        <br></br>

        {isOpen2 ? 
        <p>
            <div className='car-container'><img src={logo2} alt='logo2' className='car-logo' align="left" onMouseLeave={() => setOpen2(!isOpen2)}/></div>
            <div className='car-block-texte'>
                <div className='car-texte'><strong>Capacité de chargement </strong></div>
                <div className='car-texte'>Ce n’est pas moins de 100 kg que vous pourrez transporter à l’arrière et ce sans aucune émission de CO2.</div>
            </div>
        </p>
        :
        <p>
            <div className='car-container'><img src={logo2} alt='logo2' className='car-logo' align="left" onMouseEnter={() => setOpen2(!isOpen2)}/></div>
            <div className='car-titre'>Chargement</div>
        </p>
        }
        
        <br></br>

        {isOpen3 ? 
        <p>
            <div className='car-container'><img src={logo3} alt='logo3' className='car-logo' align="left" onMouseLeave={() => setOpen3(!isOpen3)}/></div>
            <div className='car-block-texte'>
                <div className='car-texte'><strong>Meilleure durabilité</strong></div>
                <div className='car-texte'>La recherche de la durabilité n’est pas seulement un concept mais un quête perpétuelle pour VelyVelo.</div>
            </div>
        </p>
        :
        <p>
            <div className='car-container'><img src={logo3} alt='logo3' className='car-logo' align="left" onMouseEnter={() => setOpen3(!isOpen3)}/></div>
            <div className='car-titre'>Durabilité</div>
        </p>
        }
        
    </div>
}

export default Caracteristics