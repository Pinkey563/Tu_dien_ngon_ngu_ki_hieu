/*
import React, { useState} from 'react';
import "./SearchForm.css";
import searchAndPlayVideo from "./searchAndPlayVideo";
import VoiceInput from "./VoiceInput";

const SearchForm = () => {
  const [word, setWord] = useState("");
  const [videoTypes, setVideoTypes] = useState({
    Real: false,
    Animation: false,
    Skeleton: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setVideoTypes({ ...videoTypes, [value]: checked });
    } else {
      setWord(value);
    }
  };

  const handleSearch = () => {
    searchAndPlayVideo(word, videoTypes);
  };

  return (
    <div className="text">
      <form>
        <label htmlFor="word">Nhập từ cần tìm:</label>
          <input
            type="text"
            id="word"
            name="word"
            placeholder="Nhập từ vào đây"
            value={word}
            onChange={handleInputChange}
          />
        <label htmlFor="video-type">Chọn kiểu video muốn xem:</label>
        {["Real", "Animation", "Skeleton"].map((type) => (
          <label key={type}>
            <input
              type="checkbox"
              className="video-type"
              name="video-type"
              value={type}
              checked={videoTypes[type]}
              onChange={handleInputChange}
            />
            {type}
          </label>
        ))}
        <div className="button">
          <button type="button" id="searchButton" onClick={handleSearch}>
            Tìm kiếm
          </button>
          <VoiceInput word={word} setWord={setWord} />
        </div>
      </form>
    </div>
  );
};

export default SearchForm;

      <label htmlFor="video-type">Chọn kiểu video muốn xem:</label>
    {["Real", "Animation", "Skeleton"].map((type) => (
      <label key={type}>
        <input
          type="checkbox"
          className="video-type"
          name="video-type"
          value={type}
          checked={videoTypes[type]}
          onChange={handleInputChange}
        />
        {type}
      </label>
    ))}
*/

import React, { useState } from 'react';
import "./SearchForm.css";
import searchAndPlayVideo from "./searchAndPlayVideo";
import VoiceInput from "./VoiceInput";

const SearchForm = () => {
  const [word, setWord] = useState("");
  /*
  const [videoTypes, setVideoTypes] = useState({
    Real: false,
    Animation: false,
    Skeleton: false,
  });
  */
  const handleInputChange = (e) => {
    setWord(e.target.value);
  };
  
  const handleSearch = () => {
    searchAndPlayVideo(word);
  };

  return (
    <div className="text">
      <form>
        <label htmlFor="word">Nhập từ cần tìm:</label>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="text"
            id="word"
            name="word"
            placeholder="Nhập từ vào đây"
            value={word}
            onChange={handleInputChange}
          />
          <div className="button">
            <button type="button" id="searchButton" onClick={handleSearch}>
              Tìm kiếm
            </button>
            <VoiceInput word={word} setWord={setWord} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;