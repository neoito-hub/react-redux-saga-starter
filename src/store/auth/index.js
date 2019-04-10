import * as authActions from './actions'
import * as authReducers from './reducer'
import * as authSagas from './saga'

export default {
  ...authActions,
  ...authReducers,
  ...authSagas

}
