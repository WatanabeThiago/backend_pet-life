import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsersTable1606791765945 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                {
                    name: 'user_id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'user_name',
                    type: 'varchar'
                },
                {
                    name: 'user_password',
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
