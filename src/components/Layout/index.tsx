import { ReactElement } from 'react'
import { Header } from '../Header'
import styles from './styles.module.css'
import { Footer } from '../Footer'

type Props = {
    children: ReactElement
}

export const Layout = ({children} : Props) => {
    return(
        <div className={styles.container}>
            <Header />

            <main className={styles.main}>
                {children}
            </main>

            <Footer />
        </div>
    )
}