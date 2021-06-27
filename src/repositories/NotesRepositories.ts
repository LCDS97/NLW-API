import { EntityRepository, Repository } from "typeorm";
import { NoteTeam } from "../entities/NoteTeam";

@EntityRepository(NoteTeam)
class NotesRepositories extends Repository<NoteTeam> {}

export { NotesRepositories }