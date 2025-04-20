import { MissionAndVision, OurStory } from "@/types/stories";
import { FaCat, FaHands, FaLeaf } from "react-icons/fa";

export const OUR_STORY: OurStory[] = [
  {
    icon: <FaHands size={24} />,
    title: "Ethics and equality",
    desc:
      "Pellentesque quam convallis massa enim, faucibus ornare sollicitudin gravida justo sit suspendisse pellentesque.",
  },
  {
    icon: <FaLeaf size={24} />,
    title: "Eco-design",
    desc:
      "Risus leo molestie a aliquam amet urna orci nisl dignissim elementum nibh felis ultrices vitae consectetur.",
  },
  {
    icon: <FaCat size={24} />,
    title: "Wildlife Preservation",
    desc:
      "Pellentesque nunc ante augue adipiscing sed suspendisse amet sed pellentesque convallis erat nibh vivamus.",
  },
];

export const MISSION_VISION: MissionAndVision[] = [
  {
    title: "Mission",
    desc:
      "Pulvinar sed nunc ultrices consequat adipiscing sagittis feugiat at dui, arcu nec id non pellentesque dolor feugiat dolor ac ac sem semper nulla dis vitae, quis elit odio nunc dignissim aliquam ipsum.\nMattis pretium nec tellus viverra phasellus sed tortor ac tincidunt adipiscing nibh eget, adipiscing sit penatibus lobortis placerat",
  },
  {
    title: "Vision",
    desc:
      "Sit etiam est, nunc sollicitudin malesuada tincidunt senectus venenatis, adipiscing nulla vel diam, lorem donec sit blandit nec tortor, diam cras ut velit nulla purus ullamcorper ornare elit bibendum augue.",
  },
];
