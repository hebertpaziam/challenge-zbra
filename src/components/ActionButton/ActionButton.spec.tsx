import { render, fireEvent, screen } from "@testing-library/react";
import ActionButton, { ActionButtonProps } from "./ActionButton";
import { faker } from "@faker-js/faker";

describe("ActionButton", () => {
  let text: string;
  let props: ActionButtonProps;

  beforeEach(() => {
    text = faker.lorem.word();
    props = {
      children: <>{text}</>,
      type: "button",
      disabled: faker.datatype.boolean(),
      onClick: jest.fn(),
    };
  });

  it("should render the component", () => {
    const component = render(<ActionButton {...props} />);

    expect(component).toBeDefined();
  });

  it("should trigger the click event", () => {
    render(<ActionButton {...props} disabled={false} />);

    fireEvent.click(screen.getByText(text));

    expect(props.onClick).toHaveBeenCalled();
  });

  it("should not trigger the click event when button is disabled", () => {
    render(<ActionButton {...props} disabled={true} />);

    fireEvent.click(screen.getByText(text));

    expect(props.onClick).not.toHaveBeenCalled();
  });

  it("should trigger submit event", () => {
    const onSubmit = jest.fn((e) => e.preventDefault());

    render(
      <form onSubmit={onSubmit}>
        <ActionButton {...props} type={"submit"} disabled={false} />
      </form>
    );

    fireEvent.click(screen.getByText(text));

    expect(onSubmit).toHaveBeenCalled();
  });
});
