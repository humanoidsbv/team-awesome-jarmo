import React from "react";
import renderer from "react-test-renderer";
// eslint-disable-next-line import/no-extraneous-dependencies
import "@testing-library/jest-dom";
import { Navigation } from "../Navigation";

it("renders correctly", () => {
  const tree = renderer.create(<Navigation isActive />).toJSON();
  expect(tree).toMatchSnapshot();
});
