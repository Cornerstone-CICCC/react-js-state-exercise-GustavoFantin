
type Props = {
  onRandom: () => void
}

const LottoNumbers = (props: Props) => {

  return (

    <label>
      <button onClick={props.onRandom}>Randomize Lotto Numbers</button>
    </label>
  )
}

export default LottoNumbers