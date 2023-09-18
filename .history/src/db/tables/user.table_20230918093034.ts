import { Entity, PrimaryColumn, Column } from "typeorm";
@Entity()
export class UserEntity {
  @PrimaryColumn()
  
  id: number;   
  @Column()
  password: string;
  email: string;
}
