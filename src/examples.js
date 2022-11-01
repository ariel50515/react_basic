//1101
import MultipleInput from './ex-1101-1/MultipleInput'

//1031
import BMI from './ex-1031-1/BMI'
import BirthSelect from './ex-1031-2/BirthSelect'
import TodoApp from './ex-1031-3/TodoApp'

//1028
import InputDemo from './1025-1028/ex-1028-1/InputDemo'
import HTML5Form from './1025-1028/ex-1028-2/HTML5Form'

//1027
// export default的話，可以在導入(import)時直接改名稱
import Parent from './1025-1028/ex-1027-1/Parent'
import ParentPropTypes from './1025-1028/ex-1027-2/Parent'
import ParentDataFlow from './1025-1028/ex-1027-3/Parent'

//1026
import JsxValue from './1025-1028/ex-1026-1/JsxValue'
import StudentList from './1025-1028/ex-1026-2/StudentList'
import Demo from './1025-1028/ex-array/Demo'
import Menu from './1025-1028/ex-menu/Menu'

//1025
import Counter from './1025-1028/ex-1025-2/Counter'

export const examples = [
  {
    name: '1101-1 多個表單元素共用單一state',
    path: '/ex-1101-1/MultipleInput.js',
    component: MultipleInput,
  },
  {
    name: '1031-3 Todo待辨事項',
    path: '/ex-1031-3/TodoApp.js',
    component: TodoApp,
  },
  {
    name: '1031-2 出生年月日下拉選單',
    path: '/ex-1031-1/BirthSelect.js',
    component: BirthSelect,
  },
  {
    name: '1031-1 BMI線上計算表單',
    path: '/ex-1031-1/BMI.js',
    component: BMI,
  },
  {
    name: '1028-2 各種可控的表單元件',
    path: '/ex-1028-2/HTML5Form.js',
    component: HTML5Form,
  },
  {
    name: '1028-1 可控與不可控表單元件',
    path: '/ex-1028-1/InputDemo.js',
    component: InputDemo,
  },
  {
    name: '1027-3 三種資料流',
    path: '/ex-1027-3/Parent.js',
    component: ParentDataFlow,
  },
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
