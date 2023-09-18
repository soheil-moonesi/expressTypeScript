import { Entity, PrimaryColumn,Co } from "typeorm";
@Entity()
export class UserEntity {
  @PrimaryColumn()
  id: number;
}
