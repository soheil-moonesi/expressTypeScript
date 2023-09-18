import { Entity, PrimaryColumn, } from "typeorm";
@Entity()
export class UserEntity {
  @PrimaryColumn()
  id: number;
}
