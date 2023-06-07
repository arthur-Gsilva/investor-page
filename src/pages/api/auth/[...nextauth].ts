import NextAuth, { NextAuthOptions } from 'next-auth'
import CredencialProviders from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredencialProviders({
            id: 'credentials',
            credentials: {
                cpf: {label: 'cpf', type: 'number'},
                password: {label: 'Senha', type: 'password'}
            },
            //@ts-ignore
            authorize: async (credentials, req) => {
                if(credentials?.cpf === '12345678'){
                    const user = {
                        id: 123,
                        name: 'Arthur',
                        email: 'arthur@gmail.com',
                    }
                    return user
                }
                
                return null
            }
        })
    ]
}

export default NextAuth(authOptions)