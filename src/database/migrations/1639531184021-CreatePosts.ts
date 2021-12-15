import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePosts1639531184021 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(
            new Table({
                name: "posts",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,

                    },
                    {
                        name: "title",
                        type: "varchar"
                    },
                    {
                        name: "type",
                        type: "varchar"
                    },
                    {
                        name: "description",
                        type: "varchar"
                    },
                    {
                        name: "user",
                        type: "uuid"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKUserCreatePost",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("posts");

    }

}
