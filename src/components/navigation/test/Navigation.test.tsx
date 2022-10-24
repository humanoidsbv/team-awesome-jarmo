import React from "react";
import renderer from "react-test-renderer";
import { Navigation } from "../Navigation";

it("renders correctly", () => {
  const tree = renderer.create(<Navigation isActive />).toJSON();
  expect(tree).toMatchSnapshot();
});
