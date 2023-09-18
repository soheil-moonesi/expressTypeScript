import { UserInfo } from "./user.info.table";
import { Entity, PrimaryColumn, Column } from "typeorm";
@Entity()
export class UserEntity {
  @PrimaryColumn()
  id: number;
  @Column({ nullable: false, type: "varchar" })
  password: string;
  @Column({ nullable: false, type: "varchar" })
  email: string;
  @OneToOne(() => UserInfo)
  @JoinColumn()
  info: UserInfo
}
