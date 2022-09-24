import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import './App.css'

const fetchdogs = async () => {
  const { data } = await axios.get('https://dog.ceo/api/breeds/image/random')
  console.log(data)
  return data
}

function App() {
  const { isLoading, error, data, isFetching } = useQuery(
    ['repoData'],
    fetchdogs
  )
  return (
    <div className="App">
      <h1>React Query</h1>
      <h2>Fetching Data</h2>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error fetching data</div>
      ) : (
        <div>
          <img src={data.message} alt="dog" />
        </div>
      )}
    </div>
  )
}
export default App
