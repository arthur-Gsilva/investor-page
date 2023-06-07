import styles from './styles.module.css'

export const FinanceTable = () => {
    return(
        <table className={styles.container}>
            <thead>
                <tr>
                    <th>Período</th>
                    <th>Novembro/2022</th>
                    <th>Dezembro/2022</th>
                    <th>Janeiro/2023</th>
                    <th>Favereiro/2023</th>
                    <th>Março/2023</th>
                    <th>Abril/2023</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <th>Receitas</th>
                    <td>R$ 123.456,00</td>
                    <td>R$ 123.456,00</td>
                    <td>R$ 123.456,00</td>
                    <td>R$ 123.456,00</td>
                    <td>R$ 123.456,00</td>
                    <td>R$ 123.456,00</td>
                </tr>

                <tr>
                    <th>Despesas/Custos</th>
                    <td>R$ 123.456,00</td>
                    <td>R$ 123.456,00</td>
                    <td>R$ 123.456,00</td>
                    <td>R$ 123.456,00</td>
                    <td>R$ 123.456,00</td>
                    <td>R$ 123.456,00</td>
                </tr>

                <tr>
                    <th>Saldo Acumulado</th>
                    <td>R$ 123.456,00</td>
                    <td>R$ 123.456,00</td>
                    <td>R$ 123.456,00</td>
                    <td>R$ 123.456,00</td>
                    <td>R$ 123.456,00</td>
                    <td>R$ 123.456,00</td>
                </tr>
            </tbody>
        </table>
    )
}