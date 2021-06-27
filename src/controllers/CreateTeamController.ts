import { Request, Response } from "express";
import { CreateTeamService } from "../services/CreateTeamService";

class CreateTeamController{
    async handle(request: Request, response: Response){
        const { name } = request.body;

        const createTeamService = new CreateTeamService();

        const team = await createTeamService.execute(name);

        return response.json(team);
    }
}

export {CreateTeamController}