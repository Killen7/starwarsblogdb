import {
    Entity, Column, PrimaryGeneratedColumn, ManyToMany, 
    BaseEntity, JoinTable
  } from 'typeorm';

  
  // import {Planet} from "./Planet"
  @Entity()
  export class Character extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;
  
    @Column()
    height: number;
  
    @Column()
    mass: number;

  }