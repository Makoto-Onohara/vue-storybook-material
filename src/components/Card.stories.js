// Card.stories.js

import Card from "./Card.vue";

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Card",
  component: Card,
  argTypes: {
    title: "String",
    subHeader: "String",
    mediaHref: "String",
    supportingText: "String",
    buttonText: "String",
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => ({
  components: { Card },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<Card v-bind="args"/>',
});

export const Primary = Template.bind({});
Primary.args = { title: "Primary", subHeader: "Secondary" };

export const Secondary = Template.bind({});
Secondary.args = {
  title: "Primary",
  subHeader: "Media text",
  mediaHref: "favicon.ico",
};

export const Third = Template.bind({});
Third.args = {
  title: "Primary",
  subHeader: "Example with supporting text",
  mediaHref: "favicon.ico",
  supportingText: "supportingText",
};

export const Fourth = Template.bind({});
Fourth.args = {
  title: "Primary",
  subHeader: "Example with supporting text",
  mediaHref: "favicon.ico",
  supportingText: "supportingText",
  buttonText: "go",
};
