import styles from './styles.module.css'
import { useState } from 'react'

import { ImDownload3 } from 'react-icons/im'
import { AiOutlinePlus } from 'react-icons/ai'

export const Extract = () => {

    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)

    const toggleOpen = () => {
        open ? setOpen(false) : setOpen(true)
    }

    const toggleOpen2 = () => {
        open2 ? setOpen2(false) : setOpen2(true)
    }


    return(
        <div className={styles.container}>
            <h3>Extratos</h3>

            <div className={styles.paymentYear} onClick={toggleOpen}>
                <AiOutlinePlus /> 2022
            </div>

            <div className={styles.downloadArea} style={{height: open ? 'auto' : '0'}}>
                <div className={styles.downloadItem}>
                    <ImDownload3 />
                    <span>08/2022</span>
                </div>
                <div className={styles.downloadItem} >
                    <ImDownload3 />
                    <span>08/2022</span>
                </div>
                <div className={styles.downloadItem} >
                    <ImDownload3 />
                    <span>08/2022</span>
                </div>
                <div className={styles.downloadItem}>
                    <ImDownload3 />
                    <span>08/2022</span>
                </div>
                
            </div>

            <div className={styles.paymentYear} onClick={toggleOpen2}>
                <AiOutlinePlus /> 2023
            </div>

            <div className={styles.downloadArea} style={{height: open2 ? 'auto' : '0'}}>
                <div className={styles.downloadItem}>
                    <ImDownload3 />
                    <span>08/2022</span>
                </div>
                <div className={styles.downloadItem} >
                    <ImDownload3 />
                    <span>08/2022</span>
                </div>
                <div className={styles.downloadItem} >
                    <ImDownload3 />
                    <span>08/2022</span>
                </div>
                <div className={styles.downloadItem}>
                    <ImDownload3 />
                    <span>08/2022</span>
                </div>
            </div>
        </div>
    )
}