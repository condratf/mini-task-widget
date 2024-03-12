export type ArrayValuesType<T> = T extends Array<infer U> ? U : never;

export type ObjectValuesType<T> = T extends { [key: string | number | symbol]: infer U } ? U : never;