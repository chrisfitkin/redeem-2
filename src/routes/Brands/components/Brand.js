import React, { PropTypes } from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const cardStyle = {
  // maxWidth: 300,
  marginBottom: 20,
}
const cardMediaStyle = {
  minHeight: 100,
  overflow: 'hidden'
}

const Brand = (props) => {
  console.log(props)
  const productCount = props.products.length
  return (
    <div className={'card'}>
      <Card style={cardStyle}>
        <CardHeader
          title={props.name}
          subtitle={props.slogan}
          avatar={'/assets/'+props.logo}
        />
        <CardMedia style={cardMediaStyle}>
          <img src={'/assets/'+props.banner} />
        </CardMedia>
        <CardTitle subtitle={productCount == 1 ? "1 product" : productCount+" products"} />
        <CardActions>
          <FlatButton label="View Products" />
        </CardActions>
      </Card>
    </div>
  )
};

Brand.propTypes = {
  // onClick: PropTypes.func.isRequired,
  // completed: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired
}

export default Brand
