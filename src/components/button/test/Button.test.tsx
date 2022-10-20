import { render, fireEvent, screen } from "@testing-library/react";
import { Button } from "../Button";
// eslint-disable-next-line import/no-extraneous-dependencies
import "@testing-library/jest-dom/extend-expect";

test("if component renders child", async () => {
  const component = render(<Button label="test" />);

  expect(component.queryByRole("button"));
});

test("If button is clicked, handleClick is called", () => {
  const handleClick = jest.fn();

  render(<Button label="test" onClick={handleClick} />);
  const button = screen.getByRole("button");
  fireEvent.click(button);
  expect(handleClick).toBeCalled();
});
