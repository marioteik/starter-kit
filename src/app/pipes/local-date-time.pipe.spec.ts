import { LocalDateTimePipe } from './local-date-time.pipe';

describe('LocalDateTimePipe', () => {
  it('create an instance', () => {
    const pipe = new LocalDateTimePipe();
    expect(pipe).toBeTruthy();
  });
});
