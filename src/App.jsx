import Example from './components/Example'
function App() {
  return (
    <>
      <div className='page'>
        <header>
          <h1>Buscador de algo plantilla</h1>
          <form className='form'>
            <input type='text' placeholder='Matrix' />
            <button type='submit'>Buscar</button>
          </form>
        </header>
        <main>
          <Example />
        </main>
      </div>
    </>
  )
}

export default App
