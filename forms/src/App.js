import { useState } from 'react'

const App = () => {
	const [value, setValue] = useState({ normal: '' , text: ''})
	const handleChange = (e) => {
		// 1st solution to maintain state object
		setValue((state) => ({
			...state,
			[e.target.name]: e.target.value
		}))
		// 2nd solution to maintain state object
		//setValue({ 
			//...value,
			//[e.target.name]: e.target.value 
		//})
	}
	console.log(value)

	return (
		<div>
			{value.length < 5 ? <span>Minimun length is 5</span> : null}
			<input type="text" name="normal" value={value.normal} onChange={handleChange} placeholder="Normal" />
			<textarea name="text" value={value.text} onChange={handleChange} placeholder="Write here..."/>
		</div>
	)
}

export default App
