import styles from './styles.module.css'

import { ImDownload3 } from 'react-icons/im'

type Props = {
    title: string
}

export const Documents = ({ title }: Props) => {
    return(
        <div className={styles.container}>
            <h3>{title}</h3>

            <div className={styles.downloadArea}>
                <div className={styles.downloadItem}>
                    <p>
                        <ImDownload3 />
                        <span>Arquivo de download</span>
                    </p>
                </div>
                <div className={styles.downloadItem}>
                    <p>
                        <ImDownload3 />
                        <span>Arquivo de download</span>
                    </p>
                </div>
                <div className={styles.downloadItem}>
                    <p>
                        <ImDownload3 />
                        <span>Arquivo de download</span>
                    </p>
                </div>
                <div className={styles.downloadItem}>
                    <p>
                        <ImDownload3 />
                        <span>Arquivo de download</span>
                    </p>
                </div>
                <div className={styles.downloadItem}>
                    <p>
                        <ImDownload3 />
                        <span>Arquivo de download</span>
                    </p>
                </div>
                <div className={styles.downloadItem}>
                    <p>
                        <ImDownload3 />
                        <span>Arquivo de download</span>
                    </p>
                </div>
            </div>
        </div>
    )
}