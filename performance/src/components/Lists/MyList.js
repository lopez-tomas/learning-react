import { memo } from 'react'
import { isEqual } from 'lodash'

//const Li = memo(({ fullname }) => {
  //console.log(`rendering ${fullname}`)
  //return (
    //<li>
      //{fullname}
    //</li>
  //)
//})

const Li = memo(({ children }) => {
  console.log(`rendering ${children}`)
  return (
    <li>
      {children}
    </li>
  )
}, isEqual)

//const MyList = ({ data }) => {
  //console.log('rendering list')
  //return (
    //<ul>
      //{data.map(x =>
        //<Li
          //key={x.name + x.lastname}
          //fullname={`${x.name} ${x.lastname}`}
        ///>
      //)}
    //</ul>
  //)
//}

const MyList = ({ data }) => {
  console.log('rendering list')
  return (
    <ul>
      {data.map(x =>
        <Li
          key={x.name + x.lastname}
        >
          {x.name} {x.lastname}
        </Li>
      )}
    </ul>
  )
}

export default memo(MyList)
