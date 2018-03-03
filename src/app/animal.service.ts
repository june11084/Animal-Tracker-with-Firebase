import { Injectable } from '@angular/core';
import { Animal } from './animal.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class AnimalService {
  animals: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
  this.animals = database.list('animals');
  }

  getAnimals() {
    return this.animals;
  }

  addAnimal(newAnimal: Animal) {
    this.animals.push(newAnimal);
  }

  getAnimalById(animalId: string){
    return this.database.object('animals/' + animalId);
  }

  updateAnimal(localUpdatedAnimal){
  var animalEntryInFirebase = this.getAnimalById(localUpdatedAnimal.$key);
  animalEntryInFirebase.update({specie: localUpdatedAnimal.specie,
                              name: localUpdatedAnimal.name,
                              age: localUpdatedAnimal.age,
                              diet: localUpdatedAnimal.diet,
                              location: localUpdatedAnimal.location,
                              caretakers: localUpdatedAnimal.caretakers,
                              sex: localUpdatedAnimal.sex,
                              likes: localUpdatedAnimal.likes,
                              dislikes: localUpdatedAnimal.dislikes});
  }

  deleteAnimal(localAnimalToDelete){
  var animalEntryInFirebase = this.getAnimalById(localAnimalToDelete.$key);
  animalEntryInFirebase.remove();
  }
}
