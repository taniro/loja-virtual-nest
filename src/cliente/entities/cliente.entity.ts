import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cliente {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    nome: string
    @Column()
    idade: number
    @Column()
    admin: boolean
}
