// Prop Types
import PropTypes from 'prop-types'

// React Router Dom
import { Outlet } from 'react-router-dom'

// Components
import { LayoutDefault } from 'modules/app/components/layout'

// Constant
import { LAYOUT } from 'modules/app/constant'

const AppBaseWrapper = ({ layout }) => {
  /**
   * @description Render Layout
   *
   * @return {any} any
   */
  const renderLayout = () => {
    switch (layout) {
      case LAYOUT.DEFAULT:
        return (
          <LayoutDefault>
            <Outlet />
          </LayoutDefault>
        )
      default:
        return <Outlet />
    }
  }

  return renderLayout()
}

AppBaseWrapper.propTypes = {
  layout: PropTypes.oneOf([LAYOUT.DEFAULT])
}

export { AppBaseWrapper }
