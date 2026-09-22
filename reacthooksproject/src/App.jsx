import './App.css'
import Counter from './components/Counter'
import HomePage from './components/Homepage'

function App() {
  let data="My name is Arav"

  return (
    <div>
      {/* <h2>This is my third react class</h2>
      <div>
        <HomePage value={data} secondname="Antara"/>
      </div> */}
      <Counter/>
    </div>
    
  )
}

export default App
