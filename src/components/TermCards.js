import React, { useState, useEffect } from "react";
import "./App.css"; // Importing CSS for better styling

const App = () => {
  const [data, setData] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  // const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    // Load JSON data (You may need to fetch it if hosted elsewhere)
    const jsonData = {
      "Critters": [
        {
          "English": "Architekt",
          "German": "Architect",
          "Effect": "At game end, worth 1 point for each of your leftover resin and pebbles, up to 6 points total."
        },
        {
          "English": "Barde",
          "German": "Bard",
          "Effect": "When played, reveal 2 cards from the deck. You may immediately play 1 of these worth up to 3 points for free. Discard the other."
        },
        {
          "English": "Doktor",
          "German": "Doctor",
          "Effect": "When played and during Production, you may pay up to 3 berries to gain 1 point token for each berry."
        },
        {
          "English": "Ehefrau",
          "German": "Wife",
          "Effect": "Shares a space with a Husband, so combined they only take up 1 space in your city. At game end, worth 3 points if paired with a Husband."
        },
        {
          "English": "Ehemann",
          "German": "Husband",
          "Effect": "When played and during Production, you may copy any 1 green Production card in any opponent’s city."
        },
        {
          "English": "Gastwirt",
          "German": "Innkeeper",
          "Effect": "When you play a Critter, you may discard this Innkeeper from your city to decrease the cost of the played Critter by 3 berries. You do not gain the 3 berries. This card cannot be combined with any other card-playing abilities."
        },
        {
          "English": "Hausierer",
          "German": "Peddler",
          "Effect": "When played and during Production, you may trade up to 2 of your resources for 2 of any other resource. Trade with the general supply, not other players."
        },
        {
          "English": "Hirtin",
          "German": "Shepherd",
          "Effect": "When played, gain 3 berries. Also gain 1 point token for each point token on your Chapel."
        },
        {
          "English": "Historiker",
          "German": "Historian",
          "Effect": "Draw 1 card after you play a Critter or Construction."
        },
        {
          "English": "Holzschnitzer",
          "German": "Woodcarver",
          "Effect": "When played and during Production, you may pay up to 3 twigs to gain 1 point token for each."
        },
        {
          "English": "König",
          "German": "King",
          "Effect": "At game end, worth 1 point for each basic Event, and 2 points for each special Event you have achieved."
        },
        {
          "English": "Königin",
          "German": "Queen",
          "Effect": "When you place a worker here, you may play any card from your hand or the Meadow worth up to 3 points for free. This refers to the base points of the card, not bonus points."
        },
        {
          "English": "Ladeninhaber",
          "German": "Shopkeeper",
          "Effect": "Gain 1 berry after you play a Critter into your city. Do not gain a berry for playing this Shopkeeper."
        },
        {
          "English": "Lehrer",
          "German": "Teacher",
          "Effect": "When played and during Production, draw 2 cards. Keep 1 of them and give the other to any opponent."
        },
        {
          "English": "Mönch",
          "German": "Monk",
          "Effect": "When played and during Production, you may give up to 2 berries to an opponent to gain 2 point tokens for each berry you give. Also unlocks the 2nd Monastery room."
        },
        {
          "English": "Narr",
          "German": "Fool",
          "Effect": "The Fool is played into an empty spot in an opponent’s city."
        },
        {
          "English": "Richterin",
          "German": "Judge",
          "Effect": "When playing a Critter or Construction, you may replace 1 of any resource in the cost with 1 of any other resource you have."
        },
        {
          "English": "Totengräberin",
          "German": "Undertaker",
          "Effect": "When played, discard 3 of the Meadow cards, replenish those 3 cards, then draw 1 card from the Meadow cards into your hand."
        },
        {
          "English": "Waldläufer",
          "German": "Ranger",
          "Effect": "When played, move any 1 of your deployed workers to a new location, following the normal worker placement rules. Also unlocks the 2nd Dungeon cell."
        },
        {
          "English": "Wanderin",
          "German": "Wanderer",
          "Effect": "When played, draw 3 cards. Does not take up 1 of the 15 spots in your city."
        }],
        
      "Constructions": [
        {
          "English": "Ausguck",
          "German": "Lookout",
          "Effect": "When played and during Production, gain 2 twigs."
        },
        {
          "English": "Farm",
          "German": "Farm",
          "Effect": "When played and during Production, gain 1 berry."
        },
        {
          "English": "Festplatz",
          "German": "Fairgrounds",
          "Effect": "When played and during Production, draw 2 cards."
        },
        {
          "English": "Friedhof",
          "German": "Cemetery",
          "Effect": "When you place a worker here, reveal 4 cards from the draw pile or discard pile and play 1 of them for free. Discard the others."
        },
        {
          "English": "Gasthaus",
          "German": "Inn",
          "Effect": "When played and during Production, gain 1 berry or gain 2 berries if you have a Farm in your city."
        },
        {
          "English": "Gericht",
          "German": "Courthouse",
          "Effect": "At game end, worth 1 point for each Prosperity (purple) card in your city, including this Ever Tree."
        },
        {
          "English": "Kapelle",
          "German": "Chapel",
          "Effect": "When you place a worker here, place 1 point token on the Chapel. Draw 2 cards for every 1 point token on the Chapel."
        },
        {
          "English": "Kloster",
          "German": "Monastery",
          "Effect": "When you place a worker here, give 2 of any resources to an opponent and then gain 4 points."
        },
        {
          "English": "Kran",
          "German": "Crane",
          "Effect": "When you play a Construction, you may discard this Crane from your city to decrease the cost by 3 resources."
        },
        {
          "English": "Lager",
          "German": "Storehouse",
          "Effect": "When played and during Production, take from the supply and place either 3 twigs, 2 resin, 1 pebble, or 2 berries on this card."
        },
        {
          "English": "Mine",
          "German": "Mine",
          "Effect": "When played and during Production, gain 1 pebble."
        },
        {
          "English": "Palast",
          "German": "Palace",
          "Effect": "When you place a worker here, give an opponent 2 cards, then discard and redraw up to your hand limit."
        },
        {
          "English": "Ruine",
          "German": "Ruins",
          "Effect": "When played, discard a Construction from your city, then receive back that Construction’s cost in resources. Also draw 2 cards."
        },
        {
          "English": "Schloss",
          "German": "Castle",
          "Effect": "At game end, worth 1 point for each Common Construction in your city."
        },
        {
          "English": "Schule",
          "German": "School",
          "Effect": "At game end, worth 1 point for each Common Critter in your city."
        },
        {
          "English": "Theater",
          "German": "Theater",
          "Effect": "When you play the Clock Tower, place 3 point tokens on it. Before you bring back your workers during a Prepare for Season action, remove 1 point token and activate a location where you have a worker."
        },
        {
          "English": "Universität",
          "German": "University",
          "Effect": "When you place a worker here, discard 1 Construction or Critter from your city and receive back the listed cost of resources of the discarded card. Also gain 1 additional resource and 1 point. If you discard a card with a permanent worker on it, place that worker on the University permanently instead."
        },
        {
          "English": "Verlies",
          "German": "Dungeon",
          "Effect": "When you are playing a Construction or a Critter, you may place a Critter from your city beneath this Dungeon to decrease the cost of the played card by 3 resources. The Critter under the Dungeon is no longer part of your city and is worth no points. The Dungeon can hold only 1 Critter unless a Ranger is in your city, which unlocks a second slot."
        }
      ]
    };
    setData(jsonData);
  }, []);

  const cardColors = {
    Critters: "#ffcccb",
    Constructions: "#add8e6"
  };

  // Function to normalize umlauts
  const normalizeUmlauts = (text) => {
    return text
      .replace(/ä/g, "a")
      .replace(/ö/g, "o")
      .replace(/ü/g, "u")
      .replace(/ß/g, "ss")
      .replace(/Ä/g, "A")
      .replace(/Ö/g, "O")
      .replace(/Ü/g, "U");
  };

  const filteredData = Object.entries(data).reduce((acc, [type, terms]) => {
    const filteredTerms = terms.filter(
      (term) =>
        normalizeUmlauts(term.German.toLowerCase()).includes(
          normalizeUmlauts(searchTerm.toLowerCase())
        ) ||
        normalizeUmlauts(term.English.toLowerCase()).includes(
          normalizeUmlauts(searchTerm.toLowerCase())
        )
    );
    if (filteredTerms.length > 0) acc[type] = filteredTerms;
    return acc;
  }, {});

  return (
    <div className={`container`}>
      <div className="sticky-header">
      <div class="search-container">
        <h1>Everdell Cards Effects</h1>
        <input
          type="text"
          placeholder="Search terms..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
        </div>
      </div>
      {Object.entries(filteredData).map(([type, terms]) => (
        <div key={type}>
          <h2 className="type-header">{type}</h2>
          <div className="card-list">
            {terms.map((term, index) => (
              <TermCard key={index} term={term} color={cardColors[type] || "#ddd"} />
            ))}
          </div>
        </div>
      ))}
      <h2>Made with ♥️ by Ashwani Anand, using ChatGPT.  </h2>
    </div>
  );
};

const TermCard = ({ term, color }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`card ${expanded ? "expanded" : ""}`}
      onClick={() => setExpanded(!expanded)}
      style={{ backgroundColor: color }}
    >
      <div className="card-content">
        <strong>{term.German}</strong> - {term.English}
      </div>
      {expanded && <p className="effect-text">{term.Effect}</p>}
    </div>
  );
};

export default App;
