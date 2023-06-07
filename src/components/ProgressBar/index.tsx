import styles from './styles.module.css'

type Props = {
    title: string,
    progress: number
}

export const ProgressBar = ({title, progress}: Props) => {
    return(
        <div className={styles.container}>
            <div className={styles.progressName}>
                <h5>{title}</h5>
                <span>{progress}%</span>
            </div>

            <div className={styles.bar}>
                <div className={styles.barValue} style={{width: `${progress * 3}px`}}>

                </div>
            </div>
        </div>
    )
}
   