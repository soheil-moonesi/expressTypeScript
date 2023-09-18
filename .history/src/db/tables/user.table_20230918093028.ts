import { Entity, PrimaryColumn, Column } from "typeorm";
@Entity()
export class UserEntity {
  @PrimaryColumn()
  
  id: number;   
  @column
  password: string;
  email: string;
}
