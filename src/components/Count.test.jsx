import { render, screen, fireEvent } from "@testing-library/react";
import Count from "./Count"

test("the counter starts ap 0", () => {
    render(<Count />);
    const cnt = screen.getByTestId('count');
    expect(cnt).toHaveTextContent('0');
});

test("minus button has correct text", () => {
    render(<Count />);
    const button = screen.getByRole('button', {
        name: "-"
    });
    expect(button).toHaveTextContent('-');
});

test("plus button has correct text", () => {
    render(<Count />);
    const button = screen.getByRole('button', {
        name: "+"
    });
    expect(button).toHaveTextContent('+');
});

test("When the + button is pressed, the counter changes to 1", () => {
    render(<Count />);
    const cnt = screen.getByTestId('count');
    const button = screen.getByRole('button', {
        name: "+"
    });
    fireEvent.click(button);

    expect(cnt).toHaveTextContent('1');
});

test("When the - button is pressed, the counter changes to -1", () => {
    render(<Count />);
    const cnt = screen.getByTestId('count');
    const button = screen.getByRole('button', {
        name: "-"
    });
    fireEvent.click(button);

    expect(cnt).toHaveTextContent('-1');
});

test("on/off button has blue coor", () => {
    render(<Count />);
    const button = screen.getByRole('button', {
        name: "on / off"
    });

    expect(button).toHaveStyle("backgroundColor: blue");
});

test("Prevent the -,+ button from being pressed when the on/off button is clicked", () => {
    render(<Count />);
    const button = screen.getByRole('button', {
        name: "on / off"
    });
    const plusMinus = screen.queryAllByTestId("plusMinus");
    fireEvent.click(button);

    plusMinus.map(btn => expect(btn).toHaveProperty('disabled', true));
});