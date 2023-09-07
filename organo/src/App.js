// Tip: para importar um componente precisamos acessar o seguinte caminho: 
// ./components/{folderComponentName}/{fileComponentName}
// Mas o react possui uma forma mais interessante de tratar isso, sem precisar
// repetir o nome(pasta e arquivo) como normalmente ocorre, e podemos fazer 
// isso da seguinte forma:
// Basta colocar o nome do arquivo como index.js na pasta do componente e o
// react vai buscar diretamente esse arquivo dentro da pasta que estamos importando.
// Agora nossa importação fica da seguinte forma: ./components/{folderComponentName}

import Banner from './components/Banner/Banner';

// import usando a forma da Tip acima
import Form from './components/Form';

function App() {
  return (
      <div className="App">
          <Banner />
          <Form />
      </div>
  );
}

export default App;
