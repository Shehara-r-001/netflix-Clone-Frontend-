import React from 'react'
import './App.css';
import Row from './Row';
import { useGlobalContext } from './context'

function App() {

  const { requests } = useGlobalContext()
  return (
    <div className="app">
      <h1>NETFLIX Clone</h1>
      <Row title='NETFLIX Originals' url={requests.netflix_originals} isOriginal/>
      <Row title='Trending' url={requests.trending}/>
      <Row title='Top Rated' url={requests.top_rated}/>
      <Row title='Action' url={requests.action_movies}/>
      <Row title='Comedy' url={requests.comedy_movies}/>
      <Row title='Romance' url={requests.romance_movies}/>
      <Row title='Documentaries' url={requests.documenteries}/>
      <Row title='Horror' url={requests.horror_movies}/>
    </div>
  );
}

export default App;
