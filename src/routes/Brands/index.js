import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'brands',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const BrandsContainer = require('./containers/BrandsContainer').default
      const reducer = require('./modules/brands').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'brands', reducer })

      /*  Return getComponent   */
      cb(null, BrandsContainer)

    /* Webpack named bundle   */
  }, 'brands')
  }
})
