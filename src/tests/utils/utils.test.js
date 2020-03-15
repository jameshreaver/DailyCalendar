import utils from '../../utils/utils';


test('width returns 100% for zero column', () => {
  expect(utils.width(0)).toEqual("100%");
});

test('width returns 100% for one column', () => {
  expect(utils.width(1)).toEqual("100%");
});

test('width returns 50% for two column', () => {
  expect(utils.width(2)).toEqual("50%");
});

test('width returns 24% for four column', () => {
  expect(utils.width(4)).toEqual("25%");
});

test('height returns correct attribute', () => {
  expect(utils.height(10)).toEqual('20px');
});

test('padding returns correct attribute', () => {
  expect(utils.padding(40)).toEqual('1000px');
});

test('top returns correctly above threshold', () => {
  expect(utils.top(400)).toEqual('20px');
});

test('top returns correctly below threshold', () => {
  expect(utils.top(20)).toEqual('8px');
});