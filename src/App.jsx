import listaCarros from './Carros'
import './App.css'


function App() {

  const totalArray = listaCarros.reduce((acumulador) =>{
    return acumulador + 1;
  }, 0)
  
  const listaMotoristas = listaCarros.map(motorista =>
    <li key={motorista.id}>
      {motorista.owner}
    </li>
  );

  const marcaEModelo = listaCarros.map(veiculo =>
    <li key={veiculo.id}>
      <b>{veiculo.owner}</b> Proprietário de um <b>{veiculo.brand} {veiculo.model}</b>
    </li>
    );

    const donoAutomaticos = listaCarros
    .filter( carro => carro.gearbox === 'Automático')
    .map(carro => carro.owner);


  return (
    <>
      <div className="container">
        <header className='header'>
          <h1 className='title'>Pesquisa sobre Carros com React</h1>
          <p className='description'>Realizamos uma pesquisa com {totalArray} pessoas sobre seus carros</p>
        </header>
        <main className='content'>
          <h3 className='topicOne'>Fizemos uma pesquisa com os seguintes motoristas e/ou proprietários de veículos:</h3>
          <ul className='topicContent'>{listaMotoristas}</ul>
          <br></br>
          <h3 className='topicTwo'>A marca e modelo de cada um deles era:</h3>
          <ul className='topicContent'>{marcaEModelo}</ul>
          <br></br>
          <h3 className='topicThree'>Quem tinha um veículo automático?</h3>
            <ul className='topicContent'>
              {donoAutomaticos.map(proprietario => (
                <li key={proprietario}>{proprietario}</li>
              ))}
            </ul>
        </main>
      </div>
    </>
  );
}


export default App
