import { Entity, PrimaryColumn, Column, CreateDateColumn, JoinColumn, ManyToOne} from "typeorm";
import {v4 as uuid } from "uuid";
import { Team } from "./Team";
import { User } from "./User";

@Entity("subscribedTeams")
class NoteTeam{

    @PrimaryColumn()
    readonly id: string;

    @Column()
    user_name: string;

    @JoinColumn({name: "user_name"})
    @ManyToOne(() => User)
    userName: User;

    @Column()
    user_target: string;

    @JoinColumn({name: "user_name"})
    @ManyToOne(() => User)
    userTarget: User;

    @Column()
    team_id: string;

    @JoinColumn({name: "team_id"})
    @ManyToOne(() => Team)
    team: Team;

    @Column()
    message: string;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}

export { NoteTeam }