import { Request, Response } from "express";
import { ListUserSendNotesService} from "../services/ListUserSendNotesService";

class ListUserSendNotesController {
    async handle(request: Request, response: Response){
        const { user_id } = request;
        const listUserSendNotesService = new ListUserSendNotesService();

        const notes = await listUserSendNotesService.execute(user_id);

        return response.json(notes);
    }
}

export {ListUserSendNotesController}