import { Entity, PrimaryColumn, Column } from "typeorm";
@Entity()
export class UserEntity {
  @PrimaryColumn()
  id: number;
  @Column({nullable:false,type:var})
  password: string;
  @Column()
  email: string;
}
