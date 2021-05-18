import { TestBed } from '@angular/core/testing';
import { AssistantOuAssiste } from '../models/assistantOuAssiste';
import { User } from '../models/user';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  var dateNaissance = new Date('01/01/1950');
  var assistant: AssistantOuAssiste = new AssistantOuAssiste(2, 2, "Dubois", "Marc", true);
  var assiste: AssistantOuAssiste = new AssistantOuAssiste(3, 3, "Dubois", "Marco", false);
  var user : User = new User(1, 1, "Dubois", "Monique",dateNaissance,[assistant],[assiste],[],[],[]);



  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
