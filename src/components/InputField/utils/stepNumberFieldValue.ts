export interface IstepNumberFieldValueArgs {
  value: number;
  change: number;
  step?: number;
  min?: number;
  max?: number;
}
const stepNumberFieldValue = ({
  value,
  step = 1,
  change,
  min,
  max,
}: IstepNumberFieldValueArgs): number => {
  const newValue = value + change * step;

  if ((max || max === 0) && newValue > max) return max;
  if ((min || min === 0) && newValue < min) return min;

  return newValue;
};

export default stepNumberFieldValue;
