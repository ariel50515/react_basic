import JsxValue from './ex-1026-1/JsxValue'
import Counter from './ex-1025-2/Counter'
import StudentList from './ex-1026-2/StudentList'
import Demo from './ex-array/Demo'
import Menu from './ex-menu/Menu'
import Parent from './ex-1027-1/Parent'

// export default的話，可以在導入(import)時直接改名稱
import ParentPropTypes from './ex-1027-2/Parent'

export const examples = [
  {
    name: '1027-2 PropTypes',
    path: '/ex-1027-2/Parent.js',
    component: ParentPropTypes,
  },
  {
    name: '1027-1 props屬性',
    path: '/ex-1027-1/Parent.js',
    component: Parent,
  },
  {
    name: '1026 練習題-選單項目狀態',
    path: '/menu/Menu.js',
    component: Menu,
  },
  {
    name: '1026-3 物件陣列狀態處理練習',
    path: '/array/Demo.js',
    component: Demo,
  },
  {
    name: '1026-2 學生列表清單(map與key)',
    path: '/ex-1026-2/StudentList.js',
    component: StudentList,
  },
  {
    name: '1026-1 JSX中的值與表達式',
    path: '/ex-1026-1/JsxValue.js',
    component: JsxValue,
  },
  {
    name: '1025-1 計數器',
    path: '/ex-1025-2/Counter.js',
    component: Counter,
  },
]