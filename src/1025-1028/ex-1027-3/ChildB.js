import { useState } from 'react'

function ChildB(props) {
  const [ChildBData, setChildData] = useState('child B data')
  return (
    <>
      <h1>ChildB</h1>
      <button
        onClick={() => {
          props.setDataFromChildB(ChildBData)
        }}
      >
        送資料到Parent
      </button>
    </>
  )
}

export default ChildB
