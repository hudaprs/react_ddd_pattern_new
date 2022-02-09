// Prop Types
import PropTypes from 'prop-types'

// Components
import { AppBaseContainer, AppBaseHeader } from 'modules/app/components/base'

// Styles
import { StyledContainer } from './styles'

const LayoutDefault = ({ children }) => {
  return (
    <>
      <AppBaseHeader />
      <StyledContainer>
        <AppBaseContainer>{children}</AppBaseContainer>
      </StyledContainer>
    </>
  )
}

LayoutDefault.propTypes = {
  children: PropTypes.node
}

export { LayoutDefault }
