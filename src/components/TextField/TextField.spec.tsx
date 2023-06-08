import { render, screen } from "@testing-library/react";
import TextField, { TextFieldProps } from "./TextField";
import { faker } from "@faker-js/faker";

describe("TextField", () => {
  const props: TextFieldProps = {
    id: faker.string.uuid(),
    type: "text",
    label: faker.lorem.words(2),
    placeholder: faker.lorem.words(5),
    value: faker.lorem.word({ strategy: "longest" }),
    handleBlur: jest.fn(),
    handleChange: jest.fn(),
  };

  it("should render the component", () => {
    const component = render(<TextField {...props} />);

    expect(component).toBeDefined();
  });
});
