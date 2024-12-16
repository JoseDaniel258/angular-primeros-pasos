import { Character } from './../interfaces/character.interface';
import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    id :uuid(),
    name: 'krilin',
    power: 1000
  },
  {
    id :uuid(),
    name: 'Goku',
    power: 9500
  },

{
  id :uuid(),
  name:'vegueta',
  power:7500
}

  ];
  addCharater(character:Character):void {

const newCaracter:Character={id:uuid() , ...character}


   this.characters.push(newCaracter);
  }

DeleteCharacterById(id:string ){

this.characters=this.characters.filter(character =>character.id !==id)
}

}

