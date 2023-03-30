/**
 * @description проверяет переменную на пустоту
 * @param {string | number | undefined | null} value
 * @return {boolean}
 */
const isEmpty = (value: string | number | undefined | null): boolean => {
  return value === null || value === undefined || value === ''
}

export { isEmpty }
