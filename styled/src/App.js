import styled from 'styled-components'

const P = styled.p`
  font-size: 24px;
  color: red;
`

const Content = styled.div`
  padding: 20px 25px;
`

/* Creating component without Styled Components:
  const Content = (props) => {
  return <div style={{ padding: '20px 25px' }} {...props} />
}
*/
/* Styled Components is a library to give a better development 
   experience for developers.
*/

const App = () => {
  return (
    <Content>
      <P>Hello, I'm a paragraph.</P>
    </Content>
  )
}

export default App
