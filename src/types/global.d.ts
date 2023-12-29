declare module "*.svg" {
  import React = require("react");

  const src: string;
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default src;
}

declare module ".jpg";
declare module ".png";
declare module ".jpeg";
declare module ".gif";
