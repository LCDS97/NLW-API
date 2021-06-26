import { getCustomRepository } from "typeorm";
import { TeamsRepositories } from "../repositories/TeamsRepositories";


class CreateTeamService {
    async execute(name: string){
        const teamsRepositories = getCustomRepository(TeamsRepositories);

        if(!name){
            throw new Error("Incorrect Team!");
        }

        const teamAlreadyExists = await teamsRepositories.findOne({name: name});

        if(teamAlreadyExists){
            throw new Error("Team already exists!");
        }

        const team = teamsRepositories.create({name});

        await teamsRepositories.save(team);

        return team;
    }
}

export {CreateTeamService}