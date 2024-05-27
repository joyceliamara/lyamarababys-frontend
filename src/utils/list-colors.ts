export default function listColors(colors: string[]) {
  if (colors.length === 1) {
    return colors[0];
  }

  const colorsWithoutLast = colors.slice(0, colors.length - 1);

  return `${colorsWithoutLast.join(", ")} e ${colors.at(-1)}`;
}
