import {
    Entity, Column, PrimaryGeneratedColumn, ManyToMany, 
    BaseEntity, JoinTable
  } from 'typeorm';

  
  // import {Planet} from "./Planet"
  @Entity()
  export class Planet extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;
  
    @Column()
    population: number;
  
    @Column()
    diameter: string;

  }