import { useState } from 'react';
import './App.css';

function App() {
  const [pokemonData, setPokemonData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  console.log(useState("yuri"))

  const search = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`);
      const data = await response.json();

      setPokemonData(data);
      setHasSearched(true);
    } catch (error) {
      setPokemonData(null);
      console.error('Erro ao buscar dados do Pokémon:', error);
    }
  };

  const handleKeyDown = (event) => {

    if (event.key === 'Enter' && searchTerm !== "") {
      search();
    }

  };

  // const showImage = !hasSearched || (!searchTerm && !pokemonData);
  const showImage = true
  return (
    <>
      <div className="pai">
        <div className="backTitulo">
          <div className="backPokedex">
            <div className="titulo">Pokedex</div>
          </div>
        </div>
        <div className="conteinerPai">
          <div className="input">
            <input
              type="text"
              placeholder="Id ou Nome"
              aria-label="Id ou Nome"
              value={searchTerm}
              id='input'
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button className="btn" type="button" onClick={search}>
              Buscar
            </button>
          </div>

          {(showImage && searchTerm === "") && (
            <div className="img1">
              <img src="Imagens/Pokemon_logo.png" alt="Imagem Inicial" />
            </div>
          )}

          {(showImage && searchTerm === "") && (
            <div className="img2">
              <img src="Imagens/pokeball.png" alt="pokeball" />
            </div>
          )}

          {(pokemonData && searchTerm !== "") && (
            <>
              <p className="texto">{pokemonData.id} {pokemonData.name}</p>
              <div className="img">
                <img src={pokemonData.sprites.other.dream_world.front_default} alt={pokemonData.name} />
              </div>
              <p className="texto">Tipo(s): {pokemonData.types.map(type => type.type.name).join(', ')}</p>
              <div className="barra">
                <p className="texto">HP:</p>
                <div className="barra-container">
                  <div className="barra-progresso" style={{ width: `${(pokemonData.stats[0].base_stat / 255) * 100}%` }}></div>
                </div>
                <p className="valor">{pokemonData.stats[0].base_stat}</p>
              </div>
              <div className='barra'>
                <p className='texto'>ATK:</p>
                <div className='barra-container'>
                  <div className="barra-progresso" style={{ width: `${(pokemonData.stats[1].base_stat / 255) * 100}%` }}></div>
                </div>
                <p className='valor'>{pokemonData.stats[1].base_stat}</p>
              </div>
              <div className='barra'>
                <p className='texto'>DEF:</p>
                <div className='barra-container'>
                  <div className="barra-progresso" style={{ width: `${(pokemonData.stats[2].base_stat / 255) * 100}%` }}></div>
                </div>
                <p className='valor'>{pokemonData.stats[2].base_stat}</p>
              </div>
              <div className='barra'>
                <p className='texto'>VEL:</p>
                <div className='barra-container'>
                  <div className="barra-progresso" style={{ width: `${(pokemonData.stats[3].base_stat / 255) * 100}%` }}></div>
                </div>
                <p className='valor'>{pokemonData.stats[3].base_stat}</p>
              </div>
              
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;