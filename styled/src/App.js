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

const Button = styled.button`
  background-color: ${props => props.primary ? 'red' : 'white'};
  color: ${props => props.primary ? 'white' : 'red'};
  padding: 10px 15px;
  border: solid 2px red;
  border-radius: 4px;
  font-weight: 700;
  font-size: 18px;
`
const BlockButton = styled(Button)`
  width: 100%;
  font-size: 24px;
`

const Link = ({ className, ...props }) => {
  return <a className={className} {...props}></a>
}

const StyledLink = styled(Link)`
  color: blue;
`

/* We must NEVER define an styled component inside a render method
   or functional component. They must always be defined outside. 
*/

const App = () => {
  return (
    <Content>
      <P>Hello, I'm a paragraph.</P>
      <Button>Send</Button>
      <br />
      <Button primary>Send</Button>
      <BlockButton primary as="a" href="#">Send</BlockButton>
      <BlockButton primary>Send</BlockButton>
      <Link>Link</Link>
      <StyledLink>Styled Link</StyledLink>
    </Content>
  )
}

export default App
