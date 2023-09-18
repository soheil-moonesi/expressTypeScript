import { Entity, PrimaryColumn, Column } from "typeorm";
@Entity()
export class UserEntity {
  @PrimaryColumn()
  id: number;
@Column({type:"varchar"})
name: string;
@Column({type:"varchar"})
lastName:string;
@Column({type:"var"})
}
