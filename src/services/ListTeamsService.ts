import { getCustomRepository } from "typeorm";
import { TeamsRepositories } from "../repositories/TeamsRepositories";
import { classToPlain} from "class-transformer";


class ListTeamsService {
    async execute(){
        const teamsRepositories = getCustomRepository(TeamsRepositories);

        const teams = await teamsRepositories.find();

        return classToPlain(teams);
    }
}

export {ListTeamsService}