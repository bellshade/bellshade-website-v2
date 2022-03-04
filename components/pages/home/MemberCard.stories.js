import React from "react";
import MemberCard from "./MemberCard";

const controlTypeText = {
  type: "text",
};

const defExport = {
  title: "Pages/Home/MemberCard",
  component: MemberCard,
  argTypes: {
    login: {
      description: "Username github",
      defaultValue: "bellshade",
      control: controlTypeText,
    },
    name: {
      description: "Name github",
      defaultValue: "Bellshade",
      control: controlTypeText,
    },
    html_url: {
      description: "Link menuju profile github",
      defaultValue: "https://github.com/bellshade",
      control: controlTypeText,
    },
    avatar_url: {
      description: "Link avatar dari user github",
      defaultValue:
        "https://avatars.githubusercontent.com/u/76999048?s=200&v=4",
      control: controlTypeText,
    },
  },
};

export default defExport;

export const Example = (args) => <MemberCard {...args} />;
