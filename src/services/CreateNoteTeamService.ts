import { getCustomRepository } from "typeorm";
import {NotesRepositories} from "../repositories/NotesRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { TeamsRepositories} from "../repositories/TeamsRepositories";

interface INoteTeamRequest {
    team_id: string;
    user_name: string;
    user_target: string;
    message: string;
}

class CreateNoteTeamService {
    async execute({team_id, user_name, user_target, message}: INoteTeamRequest){
        const notesRepositories = getCustomRepository(NotesRepositories);
        const usersRepositories = getCustomRepository(UsersRepositories);
        const teamsRepositories = getCustomRepository(TeamsRepositories);

        if(user_name === user_target) {
            throw new Error("You cannot send the note for yourself");
        }

        const userTargetExists = await usersRepositories.findOne(user_target);

        if (!userTargetExists){
            throw new Error("User receiver not found!")
        }

        const note = notesRepositories.create({
            team_id,
            user_name,
            user_target,
            message
        })

        await notesRepositories.save(note);

        return note;
    }

}

export {CreateNoteTeamService}