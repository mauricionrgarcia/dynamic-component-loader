import { Person } from './person.model';
import {Observable} from 'rxjs/Observable';
import { PersonEnum } from '../util/person.enum';

export class PersonService {

  public get(name: string): Observable<Person> {

    return Observable.create(
      observer => {
        this.findAll().subscribe(
          ( people: Person[] ) => {
            for ( const person of people ) {
              if ( person.name === name ) {
                observer.next(person);
                observer.complete();
              }
          }
        });
      });
  }

  public findAll(): Observable<Person[]> {
    return Observable.create(
      observer => {
        const people = [];
        let person = new Person();
        person.name = 'Ana';
        person.type = PersonEnum.LEGAL;
        people.push(person);

        person = new Person();
        person.name = 'Bruna';
        person.type = PersonEnum.PHYSICAL;
        people.push(person);

        observer.next(people);
        observer.complete();
      });
  }

}
