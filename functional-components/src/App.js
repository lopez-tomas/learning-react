import { useRef } from 'react'

const App = () => {
	const ref = useRef()
	const input_ref = useRef()
	const click = () => {
		console.log(ref.current.clientHeight)
		ref.current.innerHTML = 'Happy piggy'
	}

	const focus = () => {
	  input_ref.current.focus()
		ref.current.innerHTML = 'Lala'
	};

	return (
		<div>
			<input ref={input_ref} />
			<button onClick={focus}>Focus</button>
			<div onClick={click} ref={ref}>Lala</div>
		</div>
	)
}

export default App
