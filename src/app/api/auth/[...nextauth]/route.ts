import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CognitoProvider from "next-auth/providers/cognito";

const handler = NextAuth({
    // Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        // ...add more providers here
        CognitoProvider({
            clientId: process.env.COGNITO_CLIENT_ID,
            clientSecret: process.env.COGNITO_CLIENT_SECRET,
            issuer: process.env.COGNITO_ISSUER,
            checks: ['nonce'],
        })
    ],
})

export { handler as GET, handler as POST }