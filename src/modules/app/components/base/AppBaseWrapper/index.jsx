// Prop Types
import PropTypes from 'prop-types'

// Components
import { LayoutDefault } from 'modules/app/components/layout'
import { GuardRequireAuth } from 'modules/app/components/guard'

// Constant
import { LAYOUT } from 'modules/app/constant'

const AppBaseWrapper = ({ children, layout }) => {
  /**
   * @description Render Layout
   *
   * @return {any} any
   */
  const renderLayout = () => {
    switch (layout) {
      case LAYOUT.DEFAULT:
        return <LayoutDefault>{children}</LayoutDefault>
      default:
        return children
    }
  }

  return <GuardRequireAuth>{renderLayout()}</GuardRequireAuth>
}

AppBaseWrapper.propTypes = {
  layout: PropTypes.oneOf([LAYOUT.DEFAULT]),
  children: PropTypes.node.isRequired
}

export { AppBaseWrapper }
