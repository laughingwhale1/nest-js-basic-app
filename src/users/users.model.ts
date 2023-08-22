import {Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";

interface UserCreationAttrs {
    email: string
    password: string
}

@Table({
    tableName: 'users'
})
export class User extends Model<User, UserCreationAttrs> {
    @ApiProperty({example: '1', description: 'Unique user id'})
    @Column( {type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'example@mail.com', description: 'Unique user email'})
    @Column( {type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @ApiProperty({example: 'qwerty123', description: 'Unique user password'})
    @Column( {type: DataType.STRING, allowNull: false })
    password: string;

    @ApiProperty({example: false, description: 'Whether user banned or not'})
    @Column( {type: DataType.BOOLEAN, defaultValue: false })
    banned: boolean;

    @ApiProperty({example: null, description: 'Ban reason'})
    @Column( {type: DataType.STRING, allowNull: true })
    banReason: string;
}