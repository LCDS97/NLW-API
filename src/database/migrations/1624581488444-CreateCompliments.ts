import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCompliments1624581488444 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "compliments",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "user_sender",
                        type: "uuid"
                    },
                    {
                        name: "user_receiver",
                        type: "uuid"
                    },
                    {
                        name: "tag_id",
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
                        name: "FKUserSenderCompliments",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames:["user_sender"],
                        onDelete: "CASCADE",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKUserSenderCompliments",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames:["user_sender"],
                        onDelete: "CASCADE",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKUserTagCompliments",
                        referencedTableName: "tags",
                        referencedColumnNames: ["id"],
                        columnNames:["tag_id"],
                        onDelete: "CASCADE",
                        onUpdate: "SET NULL"
                    }
                ]
            })
        )


    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("compliments")
    }

}
