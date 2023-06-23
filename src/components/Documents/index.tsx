import styles from './styles.module.css'

import { ImDownload3 } from 'react-icons/im'

type Props = {
    title: string
}

export const Documents = ({ title }: Props) => {
    return(
        <div className={styles.container}>

            <details>
                <summary>{title}</summary>

                <div className={styles.downloadArea}>
                    <div className={styles.downloadItem}>
                        <p>
                            <ImDownload3 />
                            <span>Ata Assembleia 07/203</span>
                        </p>
                    </div>
                    <div className={styles.downloadItem}>
                        <p>
                            <ImDownload3 />
                            <span>Projeto Arquitetônico</span>
                        </p>
                    </div>
                    <div className={styles.downloadItem}>
                        <p>
                            <ImDownload3 />
                            <span>Projeto Topográfico</span>
                        </p>
                    </div>
                </div>
            </details>


        </div>
    )
}