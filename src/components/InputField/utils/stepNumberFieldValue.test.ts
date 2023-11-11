import stepNumberFieldValue from './stepNumberFieldValue';

describe('atoms › InputField › utils › stepNumberFieldValue', () => {
  describe('step', () => {
    it('defaults the step value to 1', () => {
      const incrementValue = stepNumberFieldValue({
        value: 5,
        change: 1
      });
      expect(incrementValue).toBe(6);

      const decrementValue = stepNumberFieldValue({
        value: 5,
        change: -1
      });
      expect(decrementValue).toBe(4);
    });

    it('increments and decrements the given value by the specified step amount', () => {
      const incrementValue = stepNumberFieldValue({
        value: 5,
        change: 1,
        step: 5
      });
      expect(incrementValue).toBe(10);

      const decrementValue = stepNumberFieldValue({
        value: 5,
        change: -1,
        step: 5
      });
      expect(decrementValue).toBe(0);
    });
  });

  describe('boundaries', () => {
    it('sets the value to the min amount when outside the boundary', () => {
      const value = stepNumberFieldValue({
        value: 5,
        change: -1,
        step: 10,
        min: 0
      });
      expect(value).toBe(0);
    });

    it('sets the value to the max amount when outside the boundary', () => {
      const value = stepNumberFieldValue({
        value: 5,
        change: 1,
        step: 10,
        max: 10
      });
      expect(value).toBe(10);
    });
  });
});
