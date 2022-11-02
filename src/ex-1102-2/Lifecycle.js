import { useState } from 'react'
import FC from './FC'
import CC from './CC'

function Lifecycle() {
  const [show, setShow] = useState(true)

  return (
    <>
      {/* {show && <CC />} */}
      {show && <FC />}
      <button
        onClick={() => {
          setShow(!show)
        }}
      >
        {show ? '移除子元件' : '掛載子元件'}
      </button>
    </>
  )
}

export default Lifecycle
