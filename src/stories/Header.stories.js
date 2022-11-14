import React from "react";
import { storiesOf } from "@storybook/react";

import { Header } from "../components/Header";

const stories = storiesOf("Components", module);

stories.add("Header", () => {
  return <Header />;
});
