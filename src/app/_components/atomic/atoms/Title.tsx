import * as React from "react";

export interface ITitleProps {
  title: string;
  desc?: string;
}

export default function Title(props: ITitleProps) {
  return <h2>{props.title}</h2>;
}
