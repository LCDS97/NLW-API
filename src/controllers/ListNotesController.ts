import { Request, Response} from "express";
import { ListNotesService } from "../services/ListNotesService";

class ListNotesController{
    async handle(request: Request, response: Response){
        const listNotesService = new ListNotesService();
        const notes = await listNotesService.execute();

        return response.json(notes);
    }
}

export { ListNotesController}