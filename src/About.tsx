import { RouteComponentProps } from "@reach/router";
import React from "react";

class About extends React.Component<
  RouteComponentProps,
  {
    msg: string;
  }
> {
  state = { msg: "G'day" };
  render() {
    return (
      <>
        <h1>About</h1>
        <p>{this.state.msg}</p>
      </>
    );
  }
}

export default About;
