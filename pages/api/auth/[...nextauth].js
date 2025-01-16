import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: "Ov23lidqDr9EUMqx9ApC",
            clientSecret: "3db58840b98ad737dd10c13fe89eec047eeb753f",
        }),
    ],
}

export default NextAuth(authOptions)