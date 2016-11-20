import React, { PropTypes } from 'react'

const Brand = (props) => (
  <div>
    {name}
  </div>
)

Brand.propTypes = {
  // onClick: PropTypes.func.isRequired,
  // completed: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired
}

export default Brand
