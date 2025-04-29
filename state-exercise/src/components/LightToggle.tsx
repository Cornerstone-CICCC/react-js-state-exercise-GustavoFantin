type Props = {
   isLight: boolean,
   onToggle: () => void
}

const LightToggle = (props: Props) => {


  return (
    <div>
      <label>
         <button onClick={props.onToggle}>Toggle Lights</button>
      </label>
    </div>
  )
}

export default LightToggle