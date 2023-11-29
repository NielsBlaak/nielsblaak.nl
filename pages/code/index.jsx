import React from 'react';

const Audio = () => (
  <div className="flex flex-col items-center gap-4 bg-white">
    <h1 className="text-center text-4xl py-4">Wat hoor je?</h1>
    <audio controls src="/raadsel-getal.mp3">
        Your browser does not support the <code>audio</code> element.
    </audio>
  </div>
);

export default Audio;
