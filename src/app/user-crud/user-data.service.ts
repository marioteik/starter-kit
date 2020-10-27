import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './user-data';

export class UserData implements InMemoryDbService {
  createDb() {
    const users: User[] = [
      { id: 1, name: 'Ram', email: 'ram@gmail.com', contact: '0000000000' },
      { id: 2, name: 'Shyam', email: 'sh@gmail.com', contact: '1111111111' },
      { id: 3, name: 'Mohan', email: 'moh@live.in', contact: '2222222222' },
      { id: 4, name: 'Rohan', email: 'rohan@gmail.com', contact: '6666666666' },
      { id: 5, name: 'Sumit', email: 'sumit@live.in', contact: '9909999999' },
    ];
    return { users };
  }
}
