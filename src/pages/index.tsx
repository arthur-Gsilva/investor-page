import styles from '../styles/Home.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import "swiper/css/navigation";
import { Navigation } from "swiper";

import { BiMap } from 'react-icons/bi'
import Link from 'next/link';
import { Layout } from '@/components/Layout';

const Home = () => {

    const slidersPerView = {
        771: 1,
        813: 2,
        1000: 3
    }


    return(
        <Layout>
            <div className={styles.container}>
                <div className={styles.homeContent}>
                    <h1>Área do investidor</h1>
                    <h2>Empreendimentos</h2>

                    <div>
                        <Swiper
                            breakpoints={{
                                771: {
                                    slidesPerView: slidersPerView[771]
                                },
                                813: {
                                    slidesPerView: slidersPerView[813]
                                },
                                1000: {
                                    slidesPerView: slidersPerView[1000]
                                }
                            }}
                            
                            navigation={true}
                            modules={[Navigation]}
                            className={styles.swiper}
                        >
                            <SwiperSlide className={styles.slide}>
                                <Link href={'/login'} className={styles.slideItem}>
                                    <img src="/images/imovel.jpg" alt="" />
                                    <div className={styles.slideName}>
                                        <BiMap />
                                        imóvel spot
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide className={styles.slide}>
                                <Link href={'/login'} className={styles.slideItem}>
                                    <img src="/images/imovel.jpg" alt="" />
                                    <div className={styles.slideName}>
                                        <BiMap />
                                        imóvel spot
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide className={styles.slide}>
                                <Link href={'/login'} className={styles.slideItem}>
                                    <img src="/images/imovel.jpg" alt="" />
                                    <div className={styles.slideName}>
                                        <BiMap />
                                        imóvel spot
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide className={styles.slide}>
                                <Link href={'/login'} className={styles.slideItem}>
                                    <img src="/images/imovel.jpg" alt="" />
                                    <div className={styles.slideName}>
                                        <BiMap />
                                        imóvel spot
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide className={styles.slide}>
                                <Link href={'/login'} className={styles.slideItem}>
                                    <img src="/images/imovel.jpg" alt="" />
                                    <div className={styles.slideName}>
                                        <BiMap />
                                        imóvel spot
                                    </div>
                                </Link>
                            </SwiperSlide>
                            
                            
                        </Swiper>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Home