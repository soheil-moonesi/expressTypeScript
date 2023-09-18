import { Entity, PrimaryColumn, Column } from "typeorm";
@Entity()
export class UserEntity {
  @PrimaryColumn()
  id: number;
  @Column({nullable:false,type:"varchar"})
  password: string;
  @Column({nullable:false,type:"varchar",m:})
  email: string;
}
