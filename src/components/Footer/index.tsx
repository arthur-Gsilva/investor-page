import styles from './styles.module.css'

import { AiOutlineInstagram } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { AiFillLinkedin } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'
import { SlEnvolopeLetter } from 'react-icons/sl'
import { FiMapPin } from 'react-icons/fi'

export const Footer = () => {
    return(
        <footer className={styles.container}>
            <div className={styles.footerContent}>
                <div className={styles.footerSocial}>
                    <div className={styles.socialLinks}>
                        <a href="#">
                            <AiOutlineInstagram />
                        </a>
                        <a href="#">
                            <BsFacebook />
                        </a>
                        <a href="#">
                            <AiFillLinkedin />
                        </a>
                    </div>

                    <p className={styles.socialText}>
                        JUNTE-SE A NÓS NAS REDES SOCIAIS
                        PARA DESCOBRIR TUDO O QUE A SEAZONE
                        ESTÁ PREPARANDO PARA VOCÊ
                    </p>
                </div>

                <div className={styles.footerReservations}>
                    <h5>Central de Reservas</h5>

                    <div className={styles.footerContacts}>
                        <div className={styles.footerContact}>
                            <h6>Sou hóspede:</h6>
                            <div className={styles.contact}>
                                <BsWhatsapp className={styles.contactIcon}/>
                                <p>+55 (00) 9999-9999</p>
                            </div>
                        </div>

                        <div className={styles.footerContact}>
                            <h6>Sou proprietário:</h6>
                            <div className={styles.contact}>
                                <BsWhatsapp className={styles.contactIcon}/>
                                <p>+55 (00) 9999-9999</p>
                            </div>
                            <div className={styles.contact}>
                                <SlEnvolopeLetter className={styles.contactIcon}/>
                                <p>contato@email.com</p>
                            </div>
                            <div className={styles.contact}>
                                <FiMapPin className={styles.contactIcon}/>
                                <p>Rua tal de tal lugar - 999</p>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className={styles.footerLogo}>
                    <img src="/images/logo-footer.png" alt="logo" />
                </div>
            </div>

            <div className={styles.creator}>
                feito por <a href="https://www.linkedin.com/in/arthurgabrielsilva/" target='_blank'>Arthur Gabriel</a>
            </div>
        </footer>
    )
}