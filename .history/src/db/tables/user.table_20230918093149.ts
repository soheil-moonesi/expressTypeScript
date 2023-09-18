import { Entity, PrimaryColumn, Column } from "typeorm";
@Entity()
export class UserEntity {
  @PrimaryColumn()
  id: number;
  @Column({nullable:false,type})
  password: string;
  @Column()
  email: string;
}
