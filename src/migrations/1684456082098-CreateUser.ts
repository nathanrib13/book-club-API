import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUser1684456082098 implements MigrationInterface {
    name = 'CreateUser1684456082098'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "books" ("id" SERIAL NOT NULL, "name" character varying(120) NOT NULL, "description" text, "author" character varying(100) NOT NULL, "rated" integer NOT NULL, "comments" text, CONSTRAINT "UQ_daaf43033f8883943d0734e6743" UNIQUE ("name"), CONSTRAINT "PK_f3f2f25a099d24e12545b70b022" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying(65) NOT NULL, "email" character varying(75) NOT NULL, "username" character varying(35) NOT NULL, "password" character varying NOT NULL, "isAdmin" boolean NOT NULL DEFAULT false, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "books"`);
    }

}
