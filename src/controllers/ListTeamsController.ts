import { Request, Response } from "express";
import { ListTeamsService} from "../services/ListTeamsService";

class ListTeamsController {
    async handle(request: Request, response: Response){
        const listTeamsService = new ListTeamsService();

        const teams = await listTeamsService.execute();

        return response.json(teams);
    }
}

export { ListTeamsController }