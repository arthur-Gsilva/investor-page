import styles from './styles.module.css'

import { AiOutlineCheckCircle } from 'react-icons/ai'

type Props = {
    status: boolean,
    title: string
}

export const ProjectItem = ({ status, title }: Props) => {
    return(
        <div className={styles.container}>
            <div className={styles.iconArea} style={{color: status ? '#D4605D' : '#ccc'}}>
                <AiOutlineCheckCircle />
            </div>
            
            <div className={styles.projectInfo}>
                <h6>{title}</h6>
                <p style={{color: status ? "green" : "#D4605D"}}>
                    status: {status ? 'Concluído' : 'Pendente'}
                </p>
            </div>
        </div>
    )
}