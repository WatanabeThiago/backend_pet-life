import { query } from "express";
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePetsTable1606838726677 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'pets',
                columns: [
                    {
                        name: 'pet_id',
                        type: 'integer',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'pet_name',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'pet_raca',
                        type: 'varchar',
                    },
                    {
                        name: 'pet_about',
                        type: 'varchar'
                    },
                    {
                        name: 'pet_user_id',
                        type: 'integer'
                    }
                ],
                foreignKeys: [
                    {
                        name: 'PetUser',
                        columnNames: ['pet_user_id'],
                        referencedTableName: 'users',
                        referencedColumnNames: ['user_id']
                    }
                ]
            }))
    }


    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('pets')
    }

}
