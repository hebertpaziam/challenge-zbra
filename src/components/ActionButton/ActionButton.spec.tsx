import { render } from "@testing-library/react";
import ActionButton, { ActionButtonProps } from "./ActionButton";
import { faker } from "@faker-js/faker";

describe("ActionButton", () => {
  const props: ActionButtonProps = {
    children: <>{faker.lorem.word()}</>,
    type: "button",
    disabled: faker.datatype.boolean(),
  };
  
  it("should render the component", () => {
    const component = render(<ActionButton {...props} />);

    expect(component).toBeDefined();
  });
});
