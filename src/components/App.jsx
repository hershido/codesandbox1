import React from "react";
import Entry from "./Entry";
import Emojipedia from "../emojipedia";

function createEntry(emoEntry) {
  return (
    <Entry
      key={emoEntry.id}
      emoji={emoEntry.emoji}
      name={emoEntry.name}
      meaning={emoEntry.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{Emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
