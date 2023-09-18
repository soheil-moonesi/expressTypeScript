import {Entity,Prime} from "typeorm"
@Entity()
export class UserEntity{
    @PrimaryColumn()
    id:number
}