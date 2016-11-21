import React, { PropTypes } from 'react'
import Brand from './Brand'
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
  },
  gridTile: {
  },
  container: {
     margin: '0 auto',
     maxWidth: 1100
  }
};

export const BrandList = (props) => (
  <div style={styles.container}>
    <GridList
      style={styles.gridList}
      cellHeight={'auto'}
      cols={3}
    >
      {props.brandList.map(brand =>
        <GridTile
          key={brand.id}
          style={styles.gridTile}
        >
          <Brand
            key={brand.id}
            {...brand}
          />
        </GridTile>
      )}
    </GridList>
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
