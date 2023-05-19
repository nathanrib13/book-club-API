import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { string } from "zod";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 65 })
  name: string;

  @Column({ length: 75, unique: true })
  email: string;

  @Column({ length: 35, unique: true })
  username: string;

  @Column()
  password: string;

  @Column({ type: "boolean", default: false })
  isAdmin: boolean;
}

export { User };
