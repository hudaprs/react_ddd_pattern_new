/**
 * @description Convert string to title case
 *
 * @param {string} string
 *
 * @return {string} string
 */
export const commonUtilsCamelCaseToTitleCase = (string) => {
  const result = string.replace(/([A-Z])/g, ' $1')
  return result.charAt(0).toUpperCase() + result.slice(1)
}
