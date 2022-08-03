import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AlterCarTable1659490355384 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('cars', 'availabre');
    await queryRunner.addColumn(
      'cars',
      new TableColumn({
        name: 'available',
        type: 'boolean',
        default: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'cars',
      new TableColumn({
        name: 'availabre',
        type: 'boolean',
        default: true,
      }),
    );

    await queryRunner.dropColumn('cars', 'available');
  }
}
