import { render } from "@testing-library/react";
import AlertBox, { AlertBoxProps } from "./AlertBox";
import { faker } from "@faker-js/faker";

describe("AlertBox", () => {
  const props: AlertBoxProps = {
    response: {
      message: faker.lorem.sentence(),
      ok: faker.datatype.boolean(),
    },
  };
  
  it("should render the component", () => {
    const component = render(<AlertBox {...props} />);

    expect(component).toBeDefined();
  });
});
