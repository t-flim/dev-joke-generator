import "./App.css"

// hooks
import useFetch from "./custom-hook/useFetch"

// components
import Joke from "./components/Joke"
import Loader from "./components/Loader"

function App() {
  const url = "https://backend-omega-seven.vercel.app/api/getjoke"
  const { data:joke, isLoading, error, fetchData:fetchJoke } = useFetch(url)

  let mainContent
  if (isLoading) return mainContent = <Loader />
  if (!isLoading && joke) return mainContent = <Joke {...{ joke }} />

  return (
    <div className="app">
      {mainContent}
    </div>
  )
}

export default App
