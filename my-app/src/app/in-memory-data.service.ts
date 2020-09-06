import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'
import {Hero} from './hero'

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice', level: 3, skills: [] },
      { id: 12, name: 'Narco', level: 9, skills: [] },
      { id: 13, name: 'Bombasto', level: 6, skills: [] },
      { id: 14, name: 'Celeritas', level: 12, skills: [] },
      { id: 15, name: 'Magneta', level: 99, skills: [] },
      { id: 16, name: 'RubberMan', level: 9, skills: [] },
      { id: 17, name: 'Dynama', level: 5, skills: [] },
      { id: 18, name: 'Dr IQ', level: 16, skills: [] },
      { id: 19, name: 'Magma', level: 13, skills: [] },
      { id: 20, name: 'Tornado', level: 7, skills: [] }
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1: 11;
  }

  constructor() { }
}
