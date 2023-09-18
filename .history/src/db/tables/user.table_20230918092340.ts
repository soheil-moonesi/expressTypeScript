import {Entity,l} from "typeorm"
@Entity()
export class UserEntity{
    @PrimaryColumn()
    id:number
}