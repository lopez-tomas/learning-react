import { useState } from 'react'

const App = () => {
	const [value, setValue] = useState({ normal: '' , text: '', select: ''})
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
			<select value={value.select} name="select" onChange={handleChange}>
				<option value="">-- Select --</option>
				<option value="happy-pig">Happy Pig</option>
				<option value="happy-piggy">Happy Piggy</option>
				<option value="sad-piggy">Sad Piggy</option>
				<option value="felipe">Felipe</option>
			</select>
		</div>
	)
}

export default App
