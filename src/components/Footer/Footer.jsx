import logo from "../../assets/img/logoWhite.png"
import './footer.css';


function Footer(){
    return(
        <footer>
            <img className="logo" src={logo} alt="Logo MovieBox" />
            <p className="footerText">© 2024 MovieBox. All rights reserved</p>
        </footer>
    );
};

export default Footer;