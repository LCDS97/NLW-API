import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { sign } from "jsonwebtoken";

import { compare } from "bcryptjs";

interface IAuthenticateRequest {
    email: string;
    password: string;
}


class AuthenticateUserService {

    async execute({email, password}: IAuthenticateRequest){
        const usersRepositories = getCustomRepository(UsersRepositories);

        const user = await usersRepositories.findOne({
            email
        });

        if(!user){
            throw new Error("Email/Password incorrect")
        }

        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch){
            throw new Error("Email/Password incorrect")
        }

        const token = sign({
            email: user.email
        }, "3f5d78c9055fcfb1d20630f3fc08e28a" , { // Colocar esse vlr em variavel de ambiente
            subject: user.id,
            expiresIn: "1d",
        });

        return token;
    }

}

export {AuthenticateUserService}