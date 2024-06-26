import { getUser } from "@/api/getUser";
import { loginHandler } from "@/api/loginHandler";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "username", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (credentials) {
          const { access } = await loginHandler(
            credentials?.username,
            credentials?.password
          );
          const user = await getUser(access);
          return {
            name: user.username,
            email: user.email,
            role: user.role,
          };
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_URL,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
