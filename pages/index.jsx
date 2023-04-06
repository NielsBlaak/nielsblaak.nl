import React from "react";
import Timeline from "../src/components/Timeline";
import hatsa from "../asset/images/apps/hatsa.png";
import HighlightApp from "../src/components/HighlightApp";

const App = () => (
  <div className="bg-white">
    <Timeline />
    <HighlightApp
      image={hatsa}
      className="bg-hatsa"
      title="Dit is een titel"
      description="Dit is een mooi stukje tekst"
      years="2016 - heden"
    />
  </div>
);

export default App;
