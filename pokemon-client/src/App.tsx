import { PokemonList } from './components/PokemonList';
import { Typography } from 'antd';

const { Title } = Typography;

function App() {
  return (
    <div>
      <h1>hola</h1>
      <Title>Pokemon List</Title>
      <div>
        <PokemonList />
      </div>
    </div>
  );
}

export default App;
