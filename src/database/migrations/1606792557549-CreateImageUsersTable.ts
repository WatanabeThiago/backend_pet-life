import {Column, MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateImageUsersTable1606792557549 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'Image_User',
                columns: [
                    {
                        name: 'u_image_id',
                        type: 'integer',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'path',
                        type: 'varchar'
                    },
                    {
                        name: 'user_id',
                        type: 'uuid'
                    }
                ],
                foreignKeys: [
                    {
                        name: 'ImageUser',
                        columnNames: ['user_id'],
                        referencedTableName: 'users',
                        referencedColumnNames: ['user_id'],
                        onUpdate: 'CASCADE',
                        onDelete: 'CASCADE'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('Image_User')
    }

}
