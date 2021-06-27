import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";
import { NotesRepositories } from "../repositories/NotesRepositories";


class ListNotesService {
    async execute(){
        const notesRepositories = getCustomRepository(NotesRepositories);

        const notes = await notesRepositories.find();

        return classToPlain(notes);

    }
}

export { ListNotesService }