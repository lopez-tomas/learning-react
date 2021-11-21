import useIsMounted from '../../hooks/useIsMounted'
import { useRouter } from 'next/router'

const DynamicPiggy = () => {
	const isMounted = useIsMounted()
	const router = useRouter()

	if (!isMounted) {
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
