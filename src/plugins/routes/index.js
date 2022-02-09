/**
 * @description Load routes from all modules
 *
 * @return {object} object of all router inside modules folder
 */
const loadRoutes = () => {
  const context = require.context('modules', true, /router.js$/i)

  const routes = context
    .keys()
    .map((key) => ({ key, name: key.match(/([a-z_]+)\.router.js$/i)[1] }))
    .reduce((routes, { key, name }) => {
      return {
        ...routes,
        [name]: context(key)[`${name}Routes`]
      }
    }, {})

  const valueOfRoutes = []

  // eslint-disable-next-line
  for (const [_, route] of Object.entries(routes)) {
    valueOfRoutes.push(...route)
  }

  const getActualRoutes = valueOfRoutes.filter((route) => route.path !== '*')
  const getAsteriskRoutes = valueOfRoutes.filter((route) => route.path === '*')
  return [...getActualRoutes, ...getAsteriskRoutes]
}

const routes = loadRoutes()

export { routes }
