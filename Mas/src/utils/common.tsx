export function getFieldName<Type>(name: keyof Type): keyof Type {
  const arg: keyof Type = name;
  return arg;
}