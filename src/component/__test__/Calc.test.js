import { render, screen, fireEvent } from "@testing-library/react";
import Calc from "../Calc";
import userEvent from "@testing-library/user-event";

describe("Testing the multiply numbers...", () => {
  test("check if elements are existing", () => {
    render(<Calc />);
    const inputEl = screen.getByPlaceholderText(/type input/);
    const btnEl = screen.getByRole("button", { name: /submit/ });
    const outputText = screen.getByTestId("calc-output-val");
    const outputMultipledText = screen.getByTestId("calc-output-mult-val");

    expect(inputEl).toBeInTheDocument();
    expect(btnEl).toBeInTheDocument();
    expect(outputText).toBeInTheDocument();
    expect(outputMultipledText).toBeInTheDocument();
  });
  test("if input has value, then p tag changes its inner text", async () => {
    render(<Calc />);
    const inputEl = screen.getByPlaceholderText(/type input/);
    const btnEl = screen.getByRole("button", { name: /submit/ });
    const outputText = screen.getByTestId("calc-output-val");
    const outputMultipledText = screen.getByTestId("calc-output-mult-val");

    fireEvent.change(inputEl, {
      target: {
        value: 2,
      },
    });
    fireEvent.click(btnEl);
    expect(outputText.textContent).toBe("2");
    expect(outputMultipledText.textContent).toBe("4");

    fireEvent.change(inputEl, {
      target: {
        value: 4,
      },
    });
    fireEvent.click(btnEl);
    expect(outputText.textContent).toBe("4");
    expect(outputMultipledText.textContent).toBe("8");
  });

  test("if output gets wrong value", () => {
    render(<Calc />);
    const inputEl = screen.getByPlaceholderText(/type input/);
    const btnEl = screen.getByRole("button", { name: /submit/ });
    const outputText = screen.getByTestId("calc-output-val");
    const outputMultipledText = screen.getByTestId("calc-output-mult-val");

    fireEvent.change(inputEl, {
      target: {
        value: 3,
      },
    });
    fireEvent.click(btnEl);
    expect(outputText.textContent).toBe("3");
    expect(outputMultipledText.textContent).not.toBe("9");
  });
});
