import styles from './styles.module.css'

import { AiOutlineCheckCircle } from 'react-icons/ai'

type Props = {
    status: boolean
}

export const ProjectItem = ({ status }: Props) => {
    return(
        <div className={styles.container}>
            <div className={styles.iconArea} style={{color: status ? '#D4605D' : '#ccc'}}>
                <AiOutlineCheckCircle />
            </div>
            
            <div className={styles.projectInfo}>
                <h6>Meio Ambiente - DANC</h6>
                <p>status: {status ? 'Concluído' : 'Pendente'}</p>
            </div>
        </div>
    )
}