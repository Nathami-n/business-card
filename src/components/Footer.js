import {FaTwitter, FaLinkedin, FaGithub} from 'react-icons/fa';

function Footer() {
    return (
        <footer className="card--footer">
            <ul className="footer--icons">
                <li><a href="#"> <FaLinkedin /></a></li>
                <li><a href = "#"> <FaTwitter /> </a></li>
                <li><a href="#">< FaGithub /></a></li>
            </ul>
        </footer>
    )

}
export default Footer