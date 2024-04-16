import logo from './logo.svg';
import './App.css';
import data from './base/Data.json'
import React, { useEffect, useState } from "react";
import 'react-bootstrap'
import Preloader from './component/Preloader';
import category from './base/Filter.json'
import types from './base/Type.json'

function App() {

  const [value, setValue] = useState('')
  const [filter, setFilter] = useState('')
  const [active, setActive] = useState('')
  const [activeType, setActiveType] = useState('')
  const [filmType, setFilmType] = useState('')
  const [chek, setChek] = useState(false)

  useEffect(() => {
    if (filteredFilms == '') {
      setChek(true);
    } else {
      setChek(false)
    }
  }, [value]);

  useEffect(() => {
    if (filteredFilms == '') {
      setChek(true);
    } else {
      setChek(false)
    }
  }, [filmType]);

  useEffect(() => {
    if (filteredFilms == '') {
      setChek(true);
    } else {
      setChek(false)
    }
  }, [filter]);





  
  
  const filteredFilms = data.filter(film => {
    return ((film.title.toLowerCase().includes(value.toLowerCase())) && (film.category.includes(filter) && (film.type.includes(filmType))))
  })

  const filterSetter = (e) => {
    setFilter(e.target.id)
    setActive(e.target.id)
  }

  const filterType = (e) => {
    setFilmType(e.target.id)
    setActiveType(e.target.id)
  }

  const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      setValue(event.target.value)
      chekIt()
    }
  };


  const chekIt = () => {
    if (filteredFilms == '') {
      console.log('123')
    }
  }



  return (

    <>
    <Preloader/>

    <body>
      <div class="nav">
        <p>Rius Films</p>
        <input type="text" placeholder='введите название фильма' onKeyPress={handleKeyPress}></input>
      </div>
     
      <div className='categories'>
        {category.map(el => (
          <div className={active == el.category ? 'active-h' : '' } onClick={filterSetter} id={el.category} key={el.key}>{el.name}</div>
         ))}
      </div>
      <div className='categories'>
           {types.map(el => (
          <div className={activeType == el.category ? 'active-h' : '' } onClick={filterType} id={el.category} key={el.key}>{el.name}</div>
         ))}
      </div>

      <div class="container">
        {
           filteredFilms.map((data,i) => (
            <div class="film-container" key={i}>
              <h1>{data.title}</h1>
              <p>{data.description}</p>
              <img src={data.poster}></img>
            </div>
          ))
        }
        <div className={chek == false ? 'hide' : 'errore' }>
            <h1>Такого у нас пока нет, извините</h1>
        </div>
      </div>
    </body>
    </>
  );
}

export default App;


