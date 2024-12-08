import type { Meta, StoryObj } from "@storybook/react";

import TestimonialCard from "./TestimonialCard";
import imageFile from "@/../public/profile-thumbnail.png";

const meta = {
  component: TestimonialCard,
} satisfies Meta<typeof TestimonialCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Sarah Dole",
    subtitle: "@sarahdole",
    text: `I've been searching for high-quality abstract images for my design projects, 
      and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!`,
    imageUrl: imageFile.src,
  },
};
