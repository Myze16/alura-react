// Tip: para importar um componente precisamos acessar o seguinte caminho: 
// ./components/{folderComponentName}/{fileComponentName}
// Mas o react possui uma forma mais interessante de tratar isso, sem precisar
// repetir o nome(pasta e arquivo) como normalmente ocorre, e podemos fazer 
// isso da seguinte forma:
// Basta colocar o nome do arquivo como index.js na pasta do componente e o
// react vai buscar diretamente esse arquivo dentro da pasta que estamos importando.
// Agora nossa importação fica da seguinte forma: ./components/{folderComponentName}

import Banner from './components/Banner/Banner';
import TextInput from './components/TextInput/TextInput';

function App() {
  return (
      <div className="App">
          <Banner />
          <TextInput label="Nome" placeholder="Digite seu nome" />
          <TextInput label="Cargo" placeholder="Digite seu cargo" />
          <TextInput label="Imagem" placeholder="Digite o endereço da imagem" />
      </div>
  );
}

export default App;
