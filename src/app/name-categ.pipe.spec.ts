import { NameCategPipe } from './name-categ.pipe';

describe('NameCategPipe', () => {
  it('create an instance', () => {
    const pipe = new NameCategPipe(null);
    expect(pipe).toBeTruthy();
  });
});
