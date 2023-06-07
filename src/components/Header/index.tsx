import styles from './styles.module.css'
import { useState } from 'react'


import { AiOutlineInstagram } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { AiFillLinkedin } from 'react-icons/ai'
import { BiMenu } from 'react-icons/bi'
import { FaRegWindowClose } from 'react-icons/fa'

export const Header = () => {

    const [menuOpened, setMenuOpened] = useState(false)

    return(
        <>
            <header className={styles.container}>
                <div className={styles.headerContent}>
                    <div className={styles.logo}>
                        <img src="/images/logo-header.png" alt="logo seazone" />
                    </div>


                    <button className={styles.headerButton}>
                        Quero anunciar meu imóvel
                    </button>

                    <div className={styles.headerButtons}>
                        <div className={styles.socials}>
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

                        <div className={styles.menuButton} onClick={() => setMenuOpened(true)}>
                            <BiMenu />
                        </div>
                    </div>
                </div>
                


                <div className={styles.menu} style={{right: menuOpened ? '0' : '-300px'}}>
                    <FaRegWindowClose className={styles.closeMenu} onClick={() => setMenuOpened(false)}/>

                    <nav className={styles.menuNav}>
                        <ul className={styles.menuList}>
                            <li className={styles.menuItem} onClick={() => setMenuOpened(false)}>
                                <a href="#">Quero me hospedar</a>
                            </li>
                            <li className={styles.menuItem} onClick={() => setMenuOpened(false)}>
                                <a href="#">sou proprietário</a>
                            </li>
                            <li className={styles.menuItem} onClick={() => setMenuOpened(false)}>
                                <a href="#">franqueado</a>
                            </li>
                            <li className={styles.menuItem} onClick={() => setMenuOpened(false)}>
                                <a href="#">sou investidor</a>
                            </li>
                            <li className={styles.menuItem} onClick={() => setMenuOpened(false)}>
                                <a href="#">sou incorporadora</a>
                            </li>
                            <li className={styles.menuItem} onClick={() => setMenuOpened(false)}>
                                <a href="#">Quero ser um parceiro</a>
                            </li>
                            <li className={styles.menuItem} onClick={() => setMenuOpened(false)}>
                                <a href="#">blog</a>
                            </li>
                            <li className={styles.menuItem} onClick={() => setMenuOpened(false)}>
                                <a href="#">quem somos</a>
                            </li>
                            <li className={styles.menuItem} onClick={() => setMenuOpened(false)}>
                                <a href="#">trabalhe conosco</a>
                            </li>
                            <li className={styles.menuItem} onClick={() => setMenuOpened(false)}>
                                <a href="#" className={styles.active}>sessao do investidor</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}