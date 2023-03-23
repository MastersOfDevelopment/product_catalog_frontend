export const getColorHex = (color: string): string => {
  switch (color) {
    case 'midnightgreen':
      return '#004953'
    case 'spacegray':
      return '#717378'
    case 'rosegold':
      return '#b76e79'
    default:
      return color
  }
}
