import { getCustomRepository } from "typeorm";
import { NotesRepositories } from "../repositories/NotesRepositories";


class ListUserReceiveComplimentsService {

    async execute(user_id: string){
        const notesRepositories = getCustomRepository(NotesRepositories);

        const notes = await notesRepositories.find({
            where: {
                user_target: user_id
            },
            relations: ["userName", "userTarget", "team"]
        })

        return notes;
    }


}

export {ListUserReceiveComplimentsService}