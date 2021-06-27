import { Request, Response } from "express";
import { CreateNoteTeamService } from "../services/CreateNoteTeamService";

class CreateNoteTeamController {
    async handle(request: Request, response: Response){
        const { team_id,  user_target,message} = request.body;
        const { user_id } = request;

        const createNoteTeamService = new CreateNoteTeamService();

        const note = await createNoteTeamService.execute({
            team_id, user_name: user_id, user_target, message
        })

        return response.json(note);
    }
}

export { CreateNoteTeamController}