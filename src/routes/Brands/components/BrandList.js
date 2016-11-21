import React, { PropTypes } from 'react'
import Brand from './Brand'
import '../../../styles/FlexBox.scss'

const style = {
   margin: '0 auto',
   maxWidth: 1100
}

export const BrandList = (props) => (
  <div style={style} className={'cards-container'}>
      {props.brandList.map(brand =>
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

BrandList.propTypes = {
  brandList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    products: PropTypes.array.isRequired
  }).isRequired).isRequired,
  // counter     : React.PropTypes.number.isRequired,
  // doubleAsync : React.PropTypes.func.isRequired,
  // increment   : React.PropTypes.func.isRequired
}

export default BrandList
