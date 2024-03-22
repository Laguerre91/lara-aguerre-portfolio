import * as Icon from 'react-bootstrap-icons';
import './ContactPage.css';

const ContactPage = () => {
    return (
        <section className='ContactPage'>
            <ul className='contact-list'>
                <div className='d-flex align-items-center mb-2'>
                    <Icon.Telephone />
                    <li className='ms-2'>+34 664290845</li>
                </div>
                <div className='d-flex align-items-center mb-2'>
                    <Icon.Envelope />
                    <li className='ms-2'>
                        <a href="mailto:aguerre.lara@gmail.com">aguerre.lara@gmail.com</a>
                    </li>
                </div>
                <div className='d-flex align-items-center mb-2'>
                    <Icon.Linkedin />
                    <a target='_blank' href="https://www.linkedin.com/in/lara-aguerre-developer/">
                        <li className='ms-2'>LinkedIn</li>
                    </a>
                </div>
                <div className='d-flex align-items-center mb-2'>
                    <Icon.Github />
                    <a target='_blank' href="https://github.com/Laguerre91/">
                        <li className='ms-2'>Github</li>
                    </a>
                </div>
            </ul>
        </section>
    );
};

export default ContactPage;
