/**
 * Created by dllo on 17/9/11.
 */
let list = [
  'iphone',
  'iPad'
]
// 参数1 ： 状态
// 参数2 ： 对应的action
let rootReducer = (state=list, action) => {
  console.log(action.item)
  console.log(action.type)
  // 判断action的类型
  switch (action.type) {
    case 'ADD_ITEM': {
      // reducer 传进来的state不能修改
      // ...state把state的内容遍历循环添加到另外一个数组
      return [...state, action.item]
    }
    default:
      return state
  }
}
export default rootReducer