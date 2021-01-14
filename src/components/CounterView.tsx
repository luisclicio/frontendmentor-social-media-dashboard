export default function CounterView({ value }: { value: number }) {
  function counterViewFormatter(number: number) {
    return number >= 10000
      ? `${number / 1000 - ((number / 1000) % 1)}k`
      : number;
  }

  return <>{counterViewFormatter(value)}</>;
}
