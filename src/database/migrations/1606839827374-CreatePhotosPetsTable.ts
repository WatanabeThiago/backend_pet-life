import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePhotosPetsTable1606839827374 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'PhotoPets',
                columns: [
                    {
                        name: 'p_photo_id',
                        type: 'integer',
                        isGenerated: true,
                        generationStrategy: 'increment',
                        isPrimary: true
                    },
                    {
                        name: 'path',
                        type: 'varchar'
                    },
                    {
                        name: 'pet_id',
                        type: 'integer'
                    }

                ],
                foreignKeys: [
                    {
                        name: 'PetsPhoto',
                        columnNames: ['pet_id'],
                        referencedTableName: 'pets',
                        referencedColumnNames: ['pet_id']

                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
