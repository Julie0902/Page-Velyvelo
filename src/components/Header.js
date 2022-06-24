import '../styles/Header.css'
import logo from '../assets/logo.webp'

function Header() {
    const Logo = <img src={logo} alt='logo' className='logo' />
    return <div className='header'>
        {Logo}
    </div>
}

export default Header