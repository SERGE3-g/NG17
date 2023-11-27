import { UsersService } from './users.service';

describe('UsersService', () => {
  const service: UsersService = new UsersService();

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
