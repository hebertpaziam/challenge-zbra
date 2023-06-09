import { render, screen } from "@testing-library/react";
import AlertBox, { AlertBoxProps } from "./AlertBox";
import { faker } from "@faker-js/faker";

describe("AlertBox", () => {
  let props: AlertBoxProps;

  beforeEach(() => {
    props = {
      response: {
        message: faker.lorem.sentence(),
        ok: faker.datatype.boolean(),
      },
    };
  });

  it("should render the component", () => {
    const component = render(<AlertBox {...props} />);

    expect(component).toBeDefined();
  });

  it("should render error alert box", () => {
    render(<AlertBox response={{ ...props.response, ok: false }} />);
    const alert = screen.getByText(props.response.message);

    expect(alert.className).toEqual("alert-box -error");
  });

  it("should render success alert box", () => {
    render(<AlertBox response={{ ...props.response, ok: true }} />);
    const alert = screen.getByText(props.response.message);

    expect(alert.className).toEqual("alert-box -success");
  });
});
