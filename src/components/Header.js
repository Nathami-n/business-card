import image from './images/business.png';

function Header() {
    return (
        <img
        src = {image}
        alt = 'logo'
        className='card--logo'
        >
        </img>
        
    )
}

export default Header