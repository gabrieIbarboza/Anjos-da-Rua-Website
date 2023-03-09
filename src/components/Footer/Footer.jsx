import { ContactForm } from '../Forms/ContactForm/ContactForm';
import './Footer.scss';

export function AppFooter() {
    return (
        <footer>
            <div className="info">
                <img className="info__logo" src="../" alt="Logo Anjos da Rua" />
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti tempora eum qui ex similique velit possimus blanditiis sint aut voluptatum, quaerat aspernatur nesciunt doloremque minus? Delectus fugit officiis distinctio at?
                </p>
                <div className="info__socials">
                    <a href="https://instagram.com/anjos" className="info__social instagram">I</a>
                    <a href="https://facebook.com/anjos" className="info__social facebook">F</a>
                    <a href="https://youtube.com/anjos" className="info__social youtube">Y</a>
                </div>
            </div>
            <div className="contact">
                <ContactForm />
            </div>
            <div className="localization">
                <h3>Localização</h3>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.4290854941573!2d-46.5504573!3d-23.481049499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef57e68372f2d%3A0xbcd8404a559ff7ff!2sCol%C3%A9gio%20J%C3%BAlio%20Mesquita!5e0!3m2!1sen!2sbr!4v1678328368589!5m2!1sen!2sbr" width="80%" height="450"></iframe>
            </div>
            <h6>&copy; Bede & Klark</h6>
        </footer>
    )
}