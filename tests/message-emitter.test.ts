import { publish, subscribe, deleteTopic, hasTopic } from '../src/message-emitter';

describe('', () => {
  it('should publish a topic', () => {
    publish('test', 1, 2, 3, 4);
    expect(hasTopic('test')).toBeTruthy();
  });

  it('should execute callback function with args provided on published topic', () => {
    const resultArray: Array<number> = [];
    subscribe('test', args => args?.forEach(arg => resultArray.push(arg)));
    [1, 2, 3, 4].forEach(number => expect(resultArray).toContain(number));
  });

  it('should return the response of callback function with args provided on published topic', () => {
    const resultArray: number[] = subscribe('test', args => args?.map(n => n + 1));
    [2, 3, 4, 5].forEach(number => expect(resultArray).toContain(number));
  });

  it('should delete test topic', () => {
    deleteTopic('test');
    expect(hasTopic('test')).toBeFalsy();
  });

  it('should not execute callback function with no published topic', () => {
    const resultArray: Array<number> = [];
    subscribe('test', args => args?.forEach(arg => resultArray.push(arg)));
    [1, 2, 3, 4].forEach(number => expect(resultArray.includes(number)).toBeFalsy());
  });
});