import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Select } from "../Select";

test("if the select updates its options", async () => {
  const clients = [
    {
      name: "Port of Rotterdam",
    },
  ];

  const utils = render(<Select clients={clients} />);

  expect((utils.getByRole("option", { name: /Show all/i }) as HTMLOptionElement).selected).toBe(
    true,
  );

  fireEvent.change(utils.getByRole("combobox"), { target: { value: clients[0].name } });

  expect(
    (utils.getByRole("option", { name: "Port of Rotterdam" }) as HTMLOptionElement).selected,
  ).toBe(true);
});
