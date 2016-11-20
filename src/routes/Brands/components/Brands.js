import React, { PropTypes } from 'react'
import Brand from './Brand'


export const Brands = (props) => (
  <div style={{ margin: '0 auto' }} >
    <h2>Brands: </h2>
    {props.brands.map(brand =>
      <Brand
        key={brand.id}
        {...brand}
      />
    )}
  </div>
)
// {props.brands}

// export const Brands = (props) => (
//   <div style={{ margin: '0 auto' }} >
//     <h2>Brands: {props.counter}</h2>
//     <button className='btn btn-default' onClick={props.increment}>
//       Increment
//     </button>
//     {' '}
//     <button className='btn btn-default' onClick={props.doubleAsync}>
//       Double (Async)
//     </button>
//   </div>
// )

Brands.propTypes = {
  brands: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    products: PropTypes.array.isRequired
  }).isRequired).isRequired,
  // counter     : React.PropTypes.number.isRequired,
  // doubleAsync : React.PropTypes.func.isRequired,
  // increment   : React.PropTypes.func.isRequired
}

export default Brands
