const alphaSizeOrder = ['EP', 'P', 'M', 'G', 'GG'];

export function orderSize(sizes: string[]): string[] {
  if (sizes.length === 0) return [];

  const isNumeric = /^\d+$/.test(sizes[0]);

  if (isNumeric) {
    return sizes
      .map(Number)
      .sort((a, b) => a - b)
      .map(String);
  } else {
    return sizes.sort((a, b) => {
      return alphaSizeOrder.indexOf(a) - alphaSizeOrder.indexOf(b);
    });
  }
}
