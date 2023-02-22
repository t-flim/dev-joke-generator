import "./App.css"

// hooks
import useFetch from "./custom-hook/useFetch"

// components
import Joke from "./components/Joke"
import Loader from "./components/Loader"

function App() {
  const url = "https://backend-omega-seven.vercel.app/api/getjoke"
  const { data:joke, isLoading, error, fetchData:fetchJoke } = useFetch(url)

  return (
    <div className="app">
      <Joke />
    </div>
  )
}

export default App
