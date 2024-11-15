import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('genre')
export class Genre {
   @PrimaryGeneratedColumn('uuid')
   id: string;

   @Column({ type: 'text', nullable: false })
   description: string;

}