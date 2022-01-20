import React from "react";
import "../styles/globals.css";
import * as NextImage from "next/image";

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  controls: { expanded: true },
};
export const decorators = [(storyFn) => <div>{storyFn()}</div>];
