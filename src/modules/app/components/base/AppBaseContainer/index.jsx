// Prop Types
import PropTypes from 'prop-types'

// Styles
import { StyledContainer } from './styles'

const AppBaseContainer = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>
}

AppBaseContainer.propTypes = {
  children: PropTypes.node
}

export { AppBaseContainer }
