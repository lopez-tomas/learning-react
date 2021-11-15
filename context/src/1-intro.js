import { createContext, useContext } from 'react'

const ContextDefault = createContext('default value')
const Context2 = createContext('default value 2')

const DefaultProvider = ({ children }) => {
  return (
    <ContextDefault.Provider value={'my value'}>
      {children}
    </ContextDefault.Provider>
  )
}

const Content = () => {
  const ctx = useContext(ContextDefault)
  return (
    <div>{ctx}</div>
  )
}

const Content2 = () => {
  const ctx = useContext(Context2)
  return (
    <div>{ctx}</div>
  )
}

const App = () => {
  return (
    <DefaultProvider>
      <Content />
      <Content2 />
    </DefaultProvider>
  )
}

export default App
