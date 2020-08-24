import React from "react";

import { VideoItem } from "./VideoItem";

export const VideoList = ({ videos }) => {
  const renderedList = videos.map((video) => {
    return <VideoItem />;
  });
  // props.videos
  // return <div>{videos.length}</div>;
  return <div>{renderedList}</div>;
};
