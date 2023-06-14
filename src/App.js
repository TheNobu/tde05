import './App.css';
import Exibir from './components/Exibir';
import Numeros from './components/Numeros';
import UserInfo from './components/UserInfo';

const list1 = [
  {
      name: 'Teste nome',
      birthday: '10/10/10',
      email: "teste@teste.com"
  },
  {
      name: 'Teste nome 2',
      birthday: '10/10/10',
      email: "teste2@teste.com"
  },
  {
      name: 'Teste nome 3',
      birthday: '10/10/10',
      email: "teste3@teste.com"
  },
]
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserInfo items={list1}/>
        <Numeros/>
        <Exibir/>
      </header>
    </div>
  );
}

export default App;
