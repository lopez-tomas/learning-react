function App() {
  const submit = (e) => {
    e.preventDefault()
    const data = Array.from(new FormData(e.target))
    console.log(Object.fromEntries(data))
  };
  return (
    <form onSubmit={submit}>
      <div>
        <span>
          lala
        </span>
        <input name="field" />
      </div>
      <input name="field-2" />
      <input type="submit" value="Send"/>
    </form>
  )
}

export default App
