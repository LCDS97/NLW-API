import { getCustomRepository } from "typeorm";
import { NotesRepositories } from "../repositories/NotesRepositories";


class ListUserSendNotesService {

    async execute(user_id: string){
        const notesRepositories = getCustomRepository(NotesRepositories);

        const notes = await notesRepositories.find({
            where: {
                user_name: user_id
            },
        })

        return notes;
    }


}

export {ListUserSendNotesService}