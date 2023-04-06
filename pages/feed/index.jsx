import React from "react";
import feed from "../feed/topfeed.xml";

const Feed = () => {
  const download = (fileUrl, fileName) => {
    const a = document.createElement("a");
    a.href = fileUrl;
    a.setAttribute("download", fileName);
    a.click();
  };

  download(feed, "topfeed.xml");

  return <h1 className="text-center">Veel plezier ermee!</h1>;
};

export default Feed;
