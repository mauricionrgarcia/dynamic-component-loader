import { PersonEnum } from '../util/person.enum';

export class Person {

  name: string;
  type: PersonEnum;

  constructor (
    name?: string,
    type?: PersonEnum
  ) { }

}
