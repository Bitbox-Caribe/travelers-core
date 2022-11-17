import { storiesOf } from "@storybook/react";

import { Greeting } from "../components";

const stories = storiesOf("App", module);

stories.add("Greeting", () => {
  return <Greeting />;
});

// export default {
//   title: "Greeting",
//   component: Greeting,
// };

// const Template = (args) => <Component {...args} />;

// export const Primary = Template.bind({});
