import React, { useState, useEffect } from "react";
import Profile from "./Profile";
import "./Counter.css";

export default function Counter() {
  // Local storage will keep values safe for accidental refresh
  // Initial values are 0
  const initialErdogan =
    JSON.parse(window.localStorage.getItem("erdogan")) ?? 0;
  const initialKilicdaroglu =
    JSON.parse(window.localStorage.getItem("kilicdaroglu")) ?? 0;
  const initialTotalVote =
    JSON.parse(window.localStorage.getItem("totalVote")) ?? 0;
  const initialInvalidVote =
    JSON.parse(window.localStorage.getItem("invalidVote")) ?? 0;

  const [erdogan, setErdogan] = useState(initialErdogan);
  const [kilicdaroglu, setKilicdaroglu] = useState(initialKilicdaroglu);
  const [totalVote, setTotalVote] = useState(initialTotalVote);
  const [invalidVote, setInvalidVote] = useState(initialInvalidVote);

  useEffect(() => {
    localStorage.setItem("erdogan", JSON.stringify(erdogan));
  }, [erdogan]);
  useEffect(() => {
    localStorage.setItem("kilicdaroglu", JSON.stringify(kilicdaroglu));
  }, [kilicdaroglu]);
  useEffect(() => {
    localStorage.setItem("totalVote", JSON.stringify(totalVote));
  }, [totalVote]);
  useEffect(() => {
    localStorage.setItem("invalidVote", JSON.stringify(invalidVote));
  }, [invalidVote]);

  const incrementErdogan = () => setErdogan(erdogan + 1);
  const incrementKilicdaroglu = () => setKilicdaroglu(kilicdaroglu + 1);
  const removeLocalStorage = () => {
    localStorage.removeItem("erdogan");
    localStorage.removeItem("kilicdaroglu");
    localStorage.removeItem("totalVote");
    localStorage.removeItem("invalidVote");

    setErdogan(0);
    setKilicdaroglu(0);
    setTotalVote(0);
    setInvalidVote(0);
  };

  return (
    <>
      <button className="resetButton" onClick={removeLocalStorage}>
        Sıfırla
      </button>
      <h6 style={{ width: "100%" }}>
        Sayılmayan oy sayısı için toplam zarf sayısı girilmelidir.
      </h6>
      <div className="labelsContainer">
        <div className="labelsInputContainer">
          <label className="label">Toplam Zarf:</label>
          <input
            name="totalVote"
            value={totalVote}
            onChange={(event) => setTotalVote(event.target.value)}
            className="input"
          />
        </div>
        <div className="labelsInputContainer">
          <label className="label">Geçersiz:</label>
          <input
            name="invalidVote"
            value={invalidVote}
            onChange={(event) => setInvalidVote(event.target.value)}
            className="input"
          />
        </div>
        <div className="voteCountContainer">
          <h2>Sayılmayan / Kalan Oy:</h2>
          <h2 className="voteCountText" contenteditable="true">
            {totalVote === 0
              ? " - "
              : totalVote - invalidVote - erdogan - kilicdaroglu}
          </h2>
        </div>
        <div className="voteCountContainer">
          <h2>Sayılan / Geçerli Oy: {erdogan + kilicdaroglu}</h2>
        </div>
      </div>
      <div className="mainContainer">
        <div>
          <h1>{erdogan}</h1>
          <Profile
            image="../assets/erdogan-profile.jpeg"
            name="RECEP TAYYİP ERDOĞAN"
          />
          <button className="button" onClick={incrementErdogan}>
            + 1
          </button>
        </div>
        <div>
          <h1>{kilicdaroglu}</h1>
          <Profile
            image="../assets/kilicdaroglu-profile.jpeg"
            name="KEMAL KILIÇDAROĞLU"
          />
          <button className="button" onClick={incrementKilicdaroglu}>
            + 1
          </button>
        </div>
      </div>
    </>
  );
}
