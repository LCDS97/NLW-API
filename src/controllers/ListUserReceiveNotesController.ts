import { Request, Response } from "express";
import { ListUserReceiveComplimentsService } from "../services/ListUserReceiveComplimentsService";

class ListUserReceiveNotesController {
    async handle(request: Request, response: Response){
        const { user_id } = request;
        const listUserReceiveComplimentsService = new ListUserReceiveComplimentsService();

        const notes = await listUserReceiveComplimentsService.execute(user_id);

        return response.json(notes);
    }
}

export {ListUserReceiveNotesController}