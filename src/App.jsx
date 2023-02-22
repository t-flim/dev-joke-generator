import "./App.css"

// hooks
import useFetch from "./custom-hook/useFetch"

// components
import Joke from "./components/Joke"
import Loader from "./components/Loader"
import Button from "./components/Button"

function App() {
  const url = "https://backend-omega-seven.vercel.app/api/getjoke"
  const { data:joke, isLoading, error, fetchData:fetchJoke } = useFetch(url)

  return (
    <div className="app">
      {(isLoading) ?
          <Loader />
          : (joke && !isLoading)
          ?
          <Joke {...{ joke }} />
          :
          <>Error</>
      }
      <Button onClick={() => fetchJoke(url)}/>
    </div>
  )
}

export default App
