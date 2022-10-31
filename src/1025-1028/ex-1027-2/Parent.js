import Child from './Child'

function Parent() {
  return (
    <>
      <Child cat="手機" name="iphone" price={199} />
    </>
  )
}
// 數字是js裡面的一種表達式，不是字串
export default Parent
