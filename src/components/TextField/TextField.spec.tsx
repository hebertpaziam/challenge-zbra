import { render, screen } from "@testing-library/react";
import TextField, { TextFieldProps } from "./TextField";
import { faker } from "@faker-js/faker";

describe("TextField", () => {
  let props: TextFieldProps;

  beforeEach(() => {
    props = {
      id: faker.string.uuid(),
      type: "text",
      label: faker.lorem.words(2),
      placeholder: faker.lorem.words(5),
      value: faker.lorem.word({ strategy: "longest" }),
      handleBlur: jest.fn(),
      handleChange: jest.fn(),
    };
  });

  it("should render the component", () => {
    const component = render(<TextField {...props} />);

    expect(component).toBeDefined();
  });

  it("should render error state", () => {
    const error = faker.lorem.words();
    render(<TextField {...props} error={error} />);

    const textField = screen.getByText(error).parentElement;
    expect(textField).toHaveClass("text-field", "-error");
  });

  it("should render success state", () => {
    const success = faker.lorem.words();
    render(<TextField {...props} error={undefined} success={success} />);

    const textField = screen.getByText(success).parentElement;
    expect(textField).toHaveClass("text-field", "-success");
  });

  it("should not render success state when have error", () => {
    const error = faker.lorem.words();
    render(
      <TextField {...props} error={error} success={faker.lorem.words()} />
    );

    const textField = screen.getByText(error).parentElement;
    expect(textField).toHaveClass("text-field");
    expect(textField).not.toHaveClass("-success");
  });

  it("should render disabled state", () => {
    const error = faker.lorem.words();
    render(<TextField {...props} error={error} disabled={true} />);

    const textField = screen.getByText(error).parentElement;
    expect(textField).toHaveClass("text-field", "-disabled");
  });
});
