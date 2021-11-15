import { memo } from 'react'

const Li = memo(({ fullname }) => {
  console.log(`rendering ${fullname}`)
  return (
    <li>
      {fullname}
    </li>
  )
})

const MyList = ({ data }) => {
  console.log('rendering list')
  return (
    <ul>
      {data.map(x =>
        <Li
          key={x.name + x.lastname}
          fullname={`${x.name} ${x.lastname}`}
        />
      )}
    </ul>
  )
}

export default MyList
