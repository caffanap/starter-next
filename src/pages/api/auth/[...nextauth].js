import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const authOptions = {
    debug: true,
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/auth/login'
    },
    providers: [
        Credentials({
            async authorize(credentials) {
                const raw = {
                    email: credentials.email,
                    password: credentials.password
                }
                if (raw.email == 'admin@gmail.com' && raw.password == 'admin123') {
                    return {
                        id: 1,
                        name: "Admin",
                        email: raw.email,
                        token: "123"
                    }
                } else {
                    throw new Error("Email atau Password Anda Salah!")
                }
            },

        })
    ],
    callbacks: {
        jwt: async ({ token, user, trigger, session }) => { 
            user && (token.user = user)
            if (trigger === 'update') {
                if (session.status) {
                    token.user.status = session.status                    
                }
                if (session.name) {
                    token.user.name = session.name
                }
            }
            return token
        },
        session: async ({ session, token }) => {
            session.user = token.user
            return session
        }
    },
    session: {
        strategy: "jwt",
        maxAge: parseInt(process.env.NEXTAUTH_MAX_AGE),
        generateSessionToken: () => {
            return randomUUID?.() ?? randomBytes(32).toString("hex")
        }
    }
    
}

export default NextAuth(authOptions)