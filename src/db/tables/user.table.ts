import { UserInfoEntity } from "./user.info.table";
import { Entity, PrimaryColumn, Column, JoinColumn, OneToOne } from "typeorm";
@Entity()
export class UserEntity {
  @PrimaryColumn()
  id: number;
  @Column({ nullable: false, type: "varchar" })
  password: string;
  @Column({ nullable: false, type: "varchar" })
  email: string;
  @OneToOne(() => UserInfoEntity)
  @JoinColumn()
  info: UserInfoEntity;
}
