import { Layout } from '@/components/Layout';
import styles from '../styles/login.module.css'
import Link from 'next/link';

const Login = () => {
    return(
        <Layout>
            <div className={styles.container}>
                <div className={styles.loginContainer}>
                    <div className={styles.loginTitles}>
                        <h2>Área do Investidor</h2>
                        <h3>Imóvel sport</h3>
                    </div>

                    <div className={styles.loginContent}>
                        <div className={styles.formArea}>
                            <h5>Acesse para acompanhar o empreendimento</h5>

                            <form className={styles.form}>
                                <input type="number" placeholder='CPF/CNPJ'/>
                                <input type="password" placeholder='Senha'/>
                                <Link href={'/imovel'}>Entrar</Link>
                            </form>
                        </div>

                        <div className={styles.imgArea}>
                            <img src="/images/imovel.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Login