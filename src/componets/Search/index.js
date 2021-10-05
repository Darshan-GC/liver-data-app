import '../Search/index.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [searchData, setSearchData] = useState([]);
  const [render, setRender] = useState(0);
  const [error, setError] = useState(0);
  const starthandler = (e) => {
    setStart(e.target.value);
  };

  const endhandler = (e) => {
    setEnd(e.target.value);
  };

  const clickHandler = (e) => {
    e.preventDefault();
    if (start && end) {
      axios
        .get(`https://live-server-db.herokuapp.com/search/${start}&${end}`)
        .then(function (response) {
          if (response.data.length > 0) {
            setSearchData(response.data);
            setError(0);
            setRender(1);
          } else {
            setError(1);
            setRender(0);
          }
        });
    }
  };

  useEffect(() => {
    setRender(0);
    setError(0);
  }, []);

  return (
    <section id="searchSection">
      <form id="SearchBox1">
        <div>
          <input
            type="datetime-local"
            placeholder="Start..."
            autoFocus
            autoComplete="false"
            name="start"
            onBlur={(e) => starthandler(e)}
          />
          <input
            type="datetime-local"
            placeholder="End..."
            autoComplete="false"
            name="end"
            onBlur={(e) => endhandler(e)}
          />
        </div>
        <button onClick={(e) => clickHandler(e)}>SEARCH</button>
      </form>
      <div id="wrapper">
        <div id="viewBox">
          <div id="header1">
            <p>TEMPERATURE</p>
            <p>BATTERY LEVEL</p>
            <p>TIME STAMP</p>
          </div>
          {error ? <div id="notFound">Data not found in DataBase</div> : ''}

          {render
            ? searchData.map((item, index) => {
                return (
                  <div id="reader" key={index}>
                    <div id="temperature1">
                      <div>{item.temp}</div>
                    </div>
                    <div id="Battery1">
                      <div>{item.battery}</div>
                    </div>
                    <div id="TimeStamp1">
                      <div>{item.createdAt}</div>
                    </div>
                  </div>
                );
              })
            : ''}
        </div>
      </div>
      <div id="backButton">
        <Link to="/">
          <button>BACK</button>
        </Link>
      </div>
    </section>
  );
};

export default Search;
