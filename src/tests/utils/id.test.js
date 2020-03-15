import id from '../../utils/id';


test('generated ids are unique', () => {
  expect(id()).not.toEqual(id());
});