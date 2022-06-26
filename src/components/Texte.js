import '../styles/Texte.css'
import Caracteristics from './Caracteristics'
import Info from './interactions/info.js'
import velo from '../assets/velo.png'

function Texte() {
    const Title = <div className='title'>Le Q’be Gen4 : Bien plus loin qu’un simple vélo utilitaire.</div>;
    const Soustitre = <div className='subhead'>Plus d’innovations - plus de confort – Pas de compromis</div>

    return <div className='block'>
        <div className='block-texte'>
            {Title}
            {Soustitre}
            <div className='texte'>
                Inspiré de notre connaissance du marché, cette nouvelle génération se démarque de tous les vélos qui peuvent se faire ailleurs.
                <p>Conçu pour améliorer l’expérience livraison, ce vélo annonce une nouvelle génération de vélos à assistance électrique utilitaire qui conjugue design et performance</p>
            </div>

            <Caracteristics />

            <div className='texte'>
                Pour cette nouvelle génération, l’équipe Innovation a mis l’accent sur des composants permettant au vélo d’avoir le moins de réparations et maintenances malgré une utilisation intensive.
                <p>En combinant composants de moto et de vélo, le Q’be Gen4 a pris le meilleur des deux mondes pour répondre à vos besoins.</p>
            </div>
            
            <p align="center"><div className="button" onClick={Info}>En savoir plus sur le Q’be Gen4</div></p>
        </div>

            <img src={velo} alt="Velo" className='block-velo'/>
        
        
    </div>
}

export default Texte