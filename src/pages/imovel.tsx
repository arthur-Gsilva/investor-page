import { ProgressBar } from '@/components/ProgressBar'
import styles from '../styles/imovel.module.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Layout } from '@/components/Layout'
import { ProjectItem } from '@/components/ProjectItem'
import { FinanceTable } from '@/components/FinanceTable'
import { Extract } from '@/components/Extract'
import { Documents } from '@/components/Documents'
import { GetServerSideProps } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]'


const Login = () => {

    const slidersPerView = {
        771: 1,
        813: 2,
        1000: 3
    }

    return(
        <Layout>
            <div className={styles.container}>

                <div className={styles.immobileInfo}>
                    <div className={styles.banner}>
                        <div className={styles.bannerInfo}>
                            <h1>IMÓVEL SPOT</h1>                      
                            <p>Previsão de entrega: outubro/2025</p>
                        </div>
                    </div>

                    <div className={styles.timeline}>
                        <div className={styles.timelineContent}>

                            <div className={styles.times}>
                                <h3>Cronograma Geral</h3>

                                <div className={styles.time}>
                                    Agosto 2022  <br /> <span>Lançamento do Empreendimento</span>
                                </div>
                                <div className={styles.time}>
                                    Fevereiro 2023  <br /> <span>Fechamento do grupo de investidores</span>
                                </div>
                                <div className={styles.time}>
                                    Outubro 2023  <br /> <span>Alvará de Construção e início das obras</span>
                                </div>
                                <div className={styles.time}>
                                    Outubro 2023  <br /> <span>Conclusão das obras e Protocolo de Habite-se</span>
                                </div>
                            </div>

                            <div className={styles.timeObservation}>
                                obs.: as datas planejadas podem sofrer
                                alterações pois dependem de atividades de
                                terceiros (prefeituras, cartórios, órgãos
                                ambientais, entre outros).
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.projects}>
                    <div className={styles.projectsContent}>
                        <h3>Projetos e aprovações</h3>

                        <div className={styles.projectsItems}>
                            <ProjectItem 
                                status={true}
                                title={"Meio Ambiente - DANC"}
                            />
                            <ProjectItem 
                                status={true}
                                title={"Projeto Arquitetónico"}
                            />
                            <ProjectItem 
                                status={true}
                                title={"Viabilidade da água e esgotos"}
                            />
                            <ProjectItem 
                                status={false}
                                title={"Corte de árvores"}
                            />
                            <ProjectItem 
                                status={false}
                                title={"Projetos Engenharia"}
                            />
                        </div>
                    </div>
                </div>
               
                <div className={styles.finance}>
                    <div className={styles.financeContent}>
                            <h3>Situação Financeira</h3>
                            <p>dados financeiros até abril/2023</p>

                            <div className={styles.tableContainer}>
                                <p>FLUXO DE CAIXA DO EMPREENDIMENTO </p>

                                <div className={styles.table}>
                                    <FinanceTable />
                                </div>
                            </div>
                    </div>
                </div> 

                <div className={styles.constructions}>
                    <div className={styles.constructionsContent}>
                        <h3>Andamento da Obra</h3>

                        <div className={styles.constructionsProgress}>
                            <ProgressBar 
                                title= {'PROJETOS'}
                                progress={35}
                            />
                            <ProgressBar 
                                title= {'SERVIÇOS INICIAIS'}
                                progress={70}
                            />
                            <ProgressBar 
                                title= {'ESCAVAÇÕES'}
                                progress={40}
                            />
                            <ProgressBar 
                                title= {'REBOCO'}
                                progress={80}
                            />
                            <ProgressBar 
                                title= {'CONTRAPISO'}
                                progress={0}
                            />
                            <ProgressBar 
                                title= {'ESQUADRIAS'}
                                progress={5}
                            />
                            <ProgressBar 
                                title= {'COBERTURAS'}
                                progress={50}
                            />
                            <ProgressBar 
                                title= {'PAVIMENTAÇÃO'}
                                progress={1}
                            />
                            <ProgressBar 
                                title= {'LIMPEZA'}
                                progress={20}
                            />
                        </div>
                    </div>
                </div>

                <div className={styles.immobileImages}>
                    <div className={styles.imagesContent}>

                        <h3>Imagens do empreendimento</h3>

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
                            spaceBetween={25}
                            className={styles.swiper}
                        >
                            <SwiperSlide className={styles.slide}>
                                <a href={'/image'} target='_blank' className={styles.slideItem}>
                                    <img src="/images/imovel.jpg" alt="" />
                                </a>
                            </SwiperSlide>
                            <SwiperSlide className={styles.slide}>
                                <a href={'/image'} target='_blank' className={styles.slideItem}>
                                    <img src="/images/imovel.jpg" alt="" />
                                </a>
                            </SwiperSlide>
                            <SwiperSlide className={styles.slide}>
                                <a href={'/image'} target='_blank' className={styles.slideItem}>
                                    <img src="/images/imovel.jpg" alt="" />
                                </a>
                            </SwiperSlide>
                            <SwiperSlide className={styles.slide}>
                                <a href={'/image'} target='_blank' className={styles.slideItem}>
                                    <img src="/images/imovel.jpg" alt="" />
                                </a>
                            </SwiperSlide>
                            <SwiperSlide className={styles.slide}>
                                <a href={'/image'} target='_blank' className={styles.slideItem}>
                                    <img src="/images/imovel.jpg" alt="" />
                                </a>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    
                </div>

                <div className={styles.payment}>
                    <div className={styles.paymentContent}>
                        <Extract title={"Extratos de Pagamentos da Unidade"}/>
                        <Extract title={"Extratos de Informativos Mensais"}/>
                    </div>
                </div>

                <div className={styles.documents}>
                    <div className={styles.documentsArea}>
                        <Documents title={'Documentos do empreendimento'}/>
                        <Documents title={'Downloads'}/>
                    </div>
                </div>
            </div>
        </Layout>
    )
}


export default Login