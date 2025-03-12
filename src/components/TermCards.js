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
          "German": "Architekt",
          "English": "Architect",
          "Effect": "At game end, worth 1 point for each of your leftover resin and pebbles, up to 6 points total."
        },
        {
          "German": "Barde",
          "English": "Bard",
          "Effect": "Discard up to 5 cards from your hand, to gain 1 point token for each card."
        },
        {
          "German": "Bootskröte",
          "English": "Barge Toad",
          "Effect": "When played and during Production, gain 2 twigs for each Farm in your city."
        },
        {
          "German": "Brieftaube",
          "English": "Postal Pigeon",
          "Effect": "When played, reveal 2 cards from the deck. You may immediately play 1 of these worth up to 3 points, for free. Discard the other. Solo Game: If you play a Postal Pigeon and activate its ability to play another card, that counts as you playing 2 cards, so on Rugwort’s turn he will play 2 cards."
        },
        {
          "German": "Doktor",
          "English": "Doctor",
          "Effect": "When played and during Production, you may pay up to 3 berries to gain 1 point token for each berry."
        },
        {
          "German": "Ehefrau",
          "English": "Wife",
          "Effect": "Shares a space with a Husband, so combined they only take up 1 space in your city. At game end, worth 3 points if paired with a Husband. May only share space with 1 Husband."
        },
        {
          "German": "Ehemann",
          "English": "Husband",
          "Effect": "Shares a space with a Wife, so combined they only take up 1 space in your city. If you have a Farm in your City and this Husband is paired with a Wife, then this card gives you 1 of any resource when played and during Production. May only share a space with 1 Wife."
        },
        {
          "German": "Fegehörnchen",
          "English": "Chip Sweep",
          "Effect": "When played and during Production, activate any 1 green Production card in your city. We know what you are thinking, and we do not recommend it. By the time the poor thing caught his tail, he’d burned a hole straight through our table. Do not ask him to do that."
        },
        {
          "German": "Gastwirt",
          "English": "Innkeeper",
          "Effect": "When you play a Critter, you may discard this Innkeeper from your city to decrease the cost of the played Critter by 3 berries. You do not gain the 3 berries. This card cannot be combined with any other card-playing abilities — including the Inn, any forest tiles that allow you to play a card, or cards like the Dungeon."
        },
        {
          "German": "Hausierer",
          "English": "Peddler",
          "Effect": "When played and during Production, you may trade up to 2 of your resources for 2 of any other resource. Trade with the general supply, not other players."
        },
        {
          "German": "Hirtin",
          "English": "Shepherd",
          "Effect": "When played, gain 3 berries. Also gain 1 point token for each point token on your Chapel."
        },
        {
          "German": "Historiker",
          "English": "Historian",
          "Effect": "Draw 1 card after you play a Critter or Construction — basically every time you play a card after you have this Historian, you get to draw a card."
        },
        {
          "German": "Holzschnitzer",
          "English": "Woodcarver",
          "Effect": "When played and during Production, you may pay up to 3 twigs to gain 1 point token for each."
        },
        {
          "German": "König",
          "English": "King",
          "Effect": "At game end, worth 1 point for each basic Event, and 2 points for each special Event you have achieved."
        },
        {
          "German": "Königin",
          "English": "Queen",
          "Effect": "When you place a worker here, you may play any card from your hand or the Meadow worth up to 3 points for free. This refers to the base points of the card, not bonus points."
        },
        {
          "German": "Ladeninhaber",
          "English": "Shopkeeper",
          "Effect": "Gain 1 berry after you play a Critter into your city. Do not gain a berry for playing this Shopkeeper."
        },
        {
          "German": "Lehrer",
          "English": "Teacher",
          "Effect": "When played and during Production, draw 2 cards. Keep 1 of them and give the other to any opponent."
        },
        {
          "German": "Minenmaulwurf",
          "English": "Miner Mole",
          "Effect": "When played and during Production, you may copy any 1 green Production card in any opponent’s city. Basically the Miner Mole becomes that card for a moment—so if copying a General Store, you would receive 2 berries if that opponent also had a Farm in their city. Solo Game: You may copy any green Production card in Rugwort’s city with the Miner Mole."
        },
        {
          "German": "Mönch",
          "English": "Monk",
          "Effect": "When played and during Production, you may give up to 2 berries to an opponent to gain 2 point tokens for each berry you give. Also unlocks the 2nd Monastery room."
        },
        {
          "German": "Narr",
          "English": "Fool",
          "Effect": "The Fool is played into an empty spot in an opponent’s city. Stinks, don’t it? Solo Game: Rugwort can play the Fool into your city. If you play the Fool, discard the Fool and remove any 1 card from his city."
        },
        {
          "German": "Richterin",
          "English": "Judge",
          "Effect": "When playing a Critter or Construction, you may replace 1 of any resource in the cost with 1 of any other resource you have. Example: If a card costs 2 berries, you may pay 1 berry and 1 twig instead."
        },
        {
          "German": "Totengräberin",
          "English": "Undertaker",
          "Effect": "When played, discard 3 of the Meadow cards, replenish those 3 cards, then draw 1 card from the Meadow cards into your hand. Also unlocks the 2nd Cemetery plot."
        },
        {
          "German": "Waldläufer",
          "English": "Ranger",
          "Effect": "When played, move any 1 of your deployed workers to a new location, following the normal worker placement rules. Also unlocks the 2nd Dungeon cell."
        },
        {
          "German": "Wanderin",
          "English": "Wanderer",
          "Effect": "When played, draw 3 cards. Does not take up 1 of the 15 spots in your city."
        }],
        
      "Constructions": [
        {
          "German": "Ausguck",
          "English": "Lookout",
          "Effect": "When you place a worker here, copy any 1 basic or Forest location, even if it is occupied by 1 of your workers"
        },
        {
          "German": "Boot aus Zweigen",
          "English": "Twig Barge",
          "Effect": "When played and during Production, gain 2 twigs. Activate this effect again when you prepare for spring or autumn."
        },
        {
          "German": "Farm",
          "English": "Farm",
          "Effect": "When played and during Production, gain 1 berry."
        },
        {
          "German": "Festplatz",
          "English": "Fair Grounds",
          "Effect": "When played and during Production, draw 2 cards."
        },
        {
          "German": "Friedhof",
          "English": "Cemetery",
          "Effect": "When you place a worker here, reveal 4 cards from the draw pile or discard pile and play 1 of them for free. Discard the others. Your worker must stay here permanently. Cemetery may only have up to 2 workers on it, but the second spot must be unlocked by having a Undertaker in your city"
        },
        {
          "German": "Gasthaus",
          "English": "Inn",
          "Effect": "When you place a worker here, play a Critter or Construction from the Meadow cards for 3 less resources of your choice. You do not gain the 3 resources. You gain 1 point token if an opponent visits your Inn. Solo Game: you may visit the Inn in Rugwort’s City and Rugwort gains 1 point token."
        },
        {
          "German": "Gemischtwarenladen",
          "English": "General Store",
          "Effect": "When played and during Production, gain 1 berry or gain 2 berries if you have a Farm in your city (not 2 berries per Farm)."
        },
        {
          "German": "Gericht",
          "English": "Courthouse",
          "Effect": "Gain 1 twig, 1 resin, or 1 pebble every time you play a Construction into your city. You do not gain resources for playing this Courthouse."
        },
        {
          "German": "Harzraffinerie",
          "English": "Resin Refinery",
          "Effect": "When played and during Production, gain 1 resin."
        },
        {
          "German": "Immerbaum",
          "English": "Ever Tree",
          "Effect": "At game end, worth 1 point for each purple Prosperity card in your city, including this Ever Tree. Ever Tree can grant 1 of any Critter for free."
        },
        {
          "German": "Kapelle",
          "English": "Chapel",
          "Effect": "When you place a worker here, place 1 point token on the Chapel. Draw 2 cards for every 1 point token on the Chapel."
        },
        {
          "German": "Kloster",
          "English": "Monastery",
          "Effect": "When you place a worker here, give 2 of any resources to an opponent and then gain 4 points. Worker stays here permanently. Monastery can only have up to 2 workers on it, but the second spot must be unlocked by having a Monk in your city"
        },
        {
          "German": "Kran",
          "English": "Crane",
          "Effect": "When you play a Construction, you may discard this Crane from your city to decrease the cost of the played Construction by 3 of any resource. You do not gain the 3 resources. This card cannot be combined with any other card-playing abilities—including the Inn, any forest tiles that allow you to play a card, or cards like the Dungeon."
        },
        {
          "German": "Lager",
          "English": "Storehouse",
          "Effect": "When played and during Production, take from the supply and place either 3 twigs, 2 resin, 1 pebble, or 2 berries on this card. Also works as a location to place a worker and take all of the resources on the card."
        },
        {
          "German": "Mine",
          "English": "Mine",
          "Effect": "When played and during Production, gain 1 pebble."
        },
        {
          "German": "Palast",
          "English": "Palace",
          "Effect": "At game end, worth 1 point for each Unique Construction in your city, including this Palace."
        },
        {
          "German": "Post",
          "English": "Post Office",
          "Effect": "When you place a worker here, give an opponent 2 cards from your hand and then discard any amount of cards from your hand that you want. Then draw cards from the draw pile up to your hand limit. You gain 1 point token if an opponent visits your Post Office. Solo Game: you may visit the Post Office in Rugwort’s City and and Rugwort gains 1 point token."
        },
        {
          "German": "Ruine",
          "English": "Ruins",
          "Effect": "When played, discard a Construction from your city, then receive back that Construction’s cost in resources. Also draw 2 cards."
        },
        {
          "German": "Schloss",
          "English": "Castle",
          "Effect": "At game end, worth 1 point for each Common Construction in your city."
        },
        {
          "German": "Schule",
          "English": "School",
          "Effect": "At game end, worth 1 point for each Common Critter in your city."
        },
        {
          "German": "Theater",
          "English": "Theater",
          "Effect": "At game end is worth 1 point for each Unique Critter in your city."
        },
        {
          "German": "Uhrenturm",
          "English": "Clock Tower",
          "Effect": "When you play the Clock Tower, place 3 point tokens on it. Before you bring back your workers during a Prepare for Season action, remove 1 point token from the Clock Tower and activate one of the basic or Forest locations where you have a worker deployed. Any points left on the Clock Tower at game’s end will count towards your point total."
        },
        {
          "German": "Universität",
          "English": "University",
          "Effect": "When you place a worker here, discard 1 Construction or Critter from your city and receive back the listed cost of resources of the discarded card. Also gain 1 additional resource and 1 point. If you discard a card with a permanent worker on it, place that worker on the University permanently instead (you do not get the worker back)."
        },
        {
          "German": "Verlies",
          "English": "Dungeon",
          "Effect": "When you are playing a Construction or a Critter, you may place a Critter from your city beneath this Dungeon to decrease the cost of the played card by 3 resources. You do not gain the 3 resources. The Critter under the Dungeon is no longer part of your city and is worth no points. The Dungeon can hold only 1 Critter unless a Ranger is in your city, which unlocks a second slot."
        }
      ]
    };
    setData(jsonData);
  }, []);

  // const cardColors = {
  //   Critters: "#ffcccb",
  //   Constructions: "#add8e6"
  // };

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
        normalizeUmlauts(term.English.toLowerCase()).includes(
          normalizeUmlauts(searchTerm.toLowerCase())
        ) ||
        normalizeUmlauts(term.German.toLowerCase()).includes(
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
              <TermCard key={index} term={term} cardType={type.toLowerCase()} />
            ))}
          </div>
        </div>
      ))}
      <h2>Made with ♥️ by Ashwani Anand, using ChatGPT.  </h2>
    </div>
  );
};

const TermCard = ({ term, cardType }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`card ${cardType} ${expanded ? "expanded" : ""}`}
      onClick={() => setExpanded(!expanded)}
      // style={{ backgroundColor: color }}
    >
      <div className="card-content">
        <strong>{term.German}</strong> - {term.English}
      </div>
      {expanded && <p className="effect-text">{term.Effect}</p>}
    </div>
  );
};

export default App;
