import { faFacebook, faTwitter, faInstagram, faYoutube, faTiktok} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot, faPhone, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HashLink } from "react-router-hash-link";
import logoWhiteImage from "./assets/logo-white.png";
import "./footerStyle.css";

const contacts = [
  { icon: faLocationDot, detail: "5570 Watsica Land, Brainville, Brazil" },
  { icon: faPhone, detail: "+55 (21) 4489-9898" },
  { icon: faEnvelope, detail: "adm@littlelemon.com.br" },
];

const socials = [
  { icon: faFacebook, name: "facebook" },
  { icon: faInstagram, name: "instagram" },
  { icon: faTwitter, name: "twitter" },
  { icon: faYoutube, name: "youtube" },
  { icon: faTiktok, name: "tiktok"}
];

const Footer = ({ navLinks }) => {
	return (
		<footer className="site-footer">
			<div>
				<img
					className="site-footer-logo"
					src={logoWhiteImage}
					alt="Little Lemon"
					/>
				<p>Since 1957</p>
			</div>
			<nav className="site-footer-nav">
				<h4>Map</h4>
				<ul>
					{
						navLinks.map(
							(navLink, index) => (
							<li key={index}>
								<HashLink
									to={navLink.path}>{navLink.name}
								</HashLink>
							</li>
						))
					}
			</ul>
			</nav>
			<div className="site-footer-contact">
				<h4>Contact us</h4>
				<address>
				{contacts.map((contact, index) => (
					<p key={index}>
						<FontAwesomeIcon icon={contact.icon} /> {contact.detail}
					</p>
				))}
			</address>
			</div>
			<div className="site-footer-social">
				<h4>Connect with us</h4>
				{socials.map((social, index) => (
					<a
						key={index}
						href={`https://www.${social.name}.com`}
						target="_blank"
						rel="noreferrer"
					>
						<FontAwesomeIcon icon={social.icon} size="lg" />
					</a>
				))}
			</div>
		</footer>
	);
};

export default Footer;
