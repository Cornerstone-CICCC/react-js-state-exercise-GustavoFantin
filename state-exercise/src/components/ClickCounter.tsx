type Props = {
   onCount: () => void
}

const ClickCounter = (props: Props) => {
  return (
    <label>
      <button onClick={props.onCount}>Click Counter</button>
    </label>
  )
}

export default ClickCounter