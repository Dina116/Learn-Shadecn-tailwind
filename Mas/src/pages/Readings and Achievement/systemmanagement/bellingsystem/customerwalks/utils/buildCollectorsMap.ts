export const buildCollectorsMap = (collectors: any[]) => {
  const map: Record<number, string> = {};

  collectors.forEach((c) => {
    map[c.ID] = c.FULL_NAME;
  });

  return map;
};
