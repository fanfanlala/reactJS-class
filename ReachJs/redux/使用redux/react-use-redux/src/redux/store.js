/**
 * Created by dllo on 17/9/11.
 */
import  { createStore} from 'redux'
import rootReducer from './reducers'
// 创建状态管理器(仓库)
// 参数： reducers
const store = createStore(rootReducer)
export default store
