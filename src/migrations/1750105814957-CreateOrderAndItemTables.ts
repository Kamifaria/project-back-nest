import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateOrderAndItemTables1750105814957 implements MigrationInterface {
    name = 'CreateOrderAndItemTables1750105814957'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "item" ("id" SERIAL NOT NULL, "productId" character varying NOT NULL, "quantity" integer NOT NULL, "orderId" integer, CONSTRAINT "PK_d3c0c71f23e7adcf952a1d13423" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "order" ("id" SERIAL NOT NULL, "totalValue" integer NOT NULL, CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "item" ADD CONSTRAINT "FK_950e218c17c81d5a9ffa1b96080" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" DROP CONSTRAINT "FK_950e218c17c81d5a9ffa1b96080"`);
        await queryRunner.query(`DROP TABLE "order"`);
        await queryRunner.query(`DROP TABLE "item"`);
    }

}
