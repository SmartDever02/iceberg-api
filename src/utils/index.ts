const getValidatedWords = (str: string) => {
  return str
    .split(' ')
    .filter((s: string) => {
      return !!s.length;
    })
    .slice(0, 10);
};

const getWeight = (origin: number, count: number) => {
  return origin + (count > 5 ? 25 + (count - 5) * 10 : count * 5);
};

export { getWeight, getValidatedWords };
