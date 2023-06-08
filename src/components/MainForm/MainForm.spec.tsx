import { render } from "@testing-library/react";
import MainForm, { MainFormProps } from "./MainForm";

describe("MainForm", () => {
  const props: MainFormProps = {};
  
  it("should render the component", () => {
    const component = render(<MainForm {...props} />);

    expect(component).toBeDefined();
  });
});
