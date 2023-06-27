import { User } from './user';

export class Doctor extends User {
  specialization?: string;

  constructor() {
    super();
  }
}
