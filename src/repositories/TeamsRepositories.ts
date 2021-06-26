import { EntityRepository, Repository } from "typeorm";
import { Team } from "../entities/Team";

@EntityRepository(Team)
class TeamsRepositories extends Repository<Team> {}

export { TeamsRepositories }