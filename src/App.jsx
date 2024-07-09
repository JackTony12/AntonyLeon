import {MainComponent} from './mainComponent/mainComponent'
import {MyContextFunction} from "./contexts/mainContext"
function App() {

  return (
    <>
    <MyContextFunction>
    <MainComponent/>
    </MyContextFunction>
    </>
  )
}

export default App
