import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const DynamicPiggy = () => {
	const [loaded, setLoaded] = useState(false)
	const router = useRouter()

	useEffect(() => {
		if (router.isReady) {
			setLoaded(true)
		}
	}, [router.isReady])

	if(!loaded) {
		return null
	}
	console.log({ router }, router.query.id)

	return (
		<div>
			<p>Dynamic Piggy</p>
		</div>
	)
}

export default DynamicPiggy
