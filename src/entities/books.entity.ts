import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("books")
class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 120, unique: true })
  name: string;

  @Column({ type: "text", nullable: true })
  description?: string | undefined | null;

  @Column({ length: 100 })
  author: string;

  @Column()
  rated: number;

  @Column({ type: "text", nullable: true })
  comments?: string | undefined | null;
}

export { Book };
