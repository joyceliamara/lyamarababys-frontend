export default function calcDiscount(percent: number, total: number) {
  return (total * (100 - percent)) / 100;
}
