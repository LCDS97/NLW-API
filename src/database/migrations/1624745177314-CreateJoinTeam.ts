import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateJoinTeam1624745177314 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "subscribedTeams",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "user_name",
                        type: "uuid"
                    },
                    {
                        name: "user_target",
                        type: "uuid"
                    },
                    {
                        name: "team_id",
                        type: "uuid"
                    },
                    {
                        name: "message",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp"

                    }
                ],
                foreignKeys:[
                    {
                        name: "FKUserSubscribedTeam",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames:["user_name"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE"
                    },
                    {
                        name: "FKUserReceiveNote",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames:["user_target"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE"
                    },
                    {
                        name: "FKUserTeam",
                        referencedTableName: "teams",
                        referencedColumnNames: ["id"],
                        columnNames:["team_id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("subscribedTeams")
    }

}
