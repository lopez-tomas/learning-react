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
  transition: box-shadow 0.2s ease;
  background-color: ${props => props.primary ? 'red' : 'white'};
  color: ${props => props.primary ? 'white' : 'red'};
  padding: 10px 15px;
  border: solid 2px red;
  border-radius: 4px;
  font-weight: 700;
  font-size: 18px;

  &:hover {
    background-color: ${props => props.primary ? 'orange' : 'black'};
    color: ${props => props.primary ? 'black' : 'orange'};
    border: solid 2px ${props => props.primary ? 'black' : 'orange'};
    box-shadow: 1px 2px 5px rgb(0, 0, 0, 0.3);
  }

  &.secondary {
    background-color: blue;
    color: white;
    border: solid 2px blue;
  }

  .info {
    font-size: 28px;
  }
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

const Input = styled.input.attrs(props => ({
  type: 'text',
  color: props.color || 'red',

}))`
  font-size: 20px;
  border: 1px solid red;
  color: ${props => props.color};
`

const Password = styled(Input).attrs({
  type: 'password',
})`
`

/* We must NEVER define an styled component inside a render method
   or functional component. They must always be defined outside. 
*/

const App = () => {
  return (
    <Content>
      <P>Hello, I'm a paragraph.</P>
      <Button>Send<p className="info">Info</p></Button>
      <br />
      <Button primary>Send</Button>
      <Button className="secondary">Send</Button>
      <BlockButton primary as="a" href="#">Send</BlockButton>
      <BlockButton primary>Send</BlockButton>
      <Link>Link</Link>
      <StyledLink>Styled Link</StyledLink>
      <Input color="blue"/>
      <Password />
    </Content>
  )
}

export default App
