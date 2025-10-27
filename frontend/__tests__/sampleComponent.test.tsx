// コンポーネントのレンダーテストサンプル

import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

function Page() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

test("Page", () => {
  render(<Page />);
  expect(screen.getByRole("heading", { level: 1, name: "Home" })).toBeDefined();
});
