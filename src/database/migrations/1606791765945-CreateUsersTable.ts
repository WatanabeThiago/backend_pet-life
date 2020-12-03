import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsersTable1606791765945 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                {
                    name: 'user_id',
                    type: 'integer',
                    isPrimary: true,
                    isUnique: true,
                    isGenerated: true,
                    generationStrategy: 'increment',  
                },
                {
                    name: 'user_email',
                    type: 'varchar'
                },
                {
                    name: 'user_name',
                    type: 'varchar'
                },
                {
                    name: 'user_password',
                    type: 'varchar'
                },
                {
                    name: 'user_cellphone',
                    type: 'varchar'
                }
            ]
        }), true
            
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
    }

}
