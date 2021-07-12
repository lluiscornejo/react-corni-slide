import { isObject } from '@Application/utils/type-predicates';

export const isEmptyObject = (value) => !isObject(value) || Object.keys(value).length === 0;
