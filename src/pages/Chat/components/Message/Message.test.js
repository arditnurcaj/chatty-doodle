import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Message from "./Message";

describe("Message", () => {
  it("renders correctly with author name if it's sent from other author names", () => {
    const component = render(
      <Message
        isSentFromAuthor={false}
        message='test'
        author='Test'
        timestamp={new Date().toString()}
      />
    );
    const { queryByTestId } = component;

    const messageAuthorEl = queryByTestId("message-author");

    expect(messageAuthorEl).toBeVisible();
  });

  it("renders correctly with hidden if is sent from author", () => {
    const component = render(
      <Message
        isSentFromAuthor={true}
        message='test'
        author='Ardit'
        timestamp={new Date().toString()}
      />
    );
    const { queryByTestId } = component;

    const messageAuthorEl = queryByTestId("message-author");

    expect(messageAuthorEl).toBeNull();
  });

  it("renders successfully with undefined props", () => {
    const component = render(
      <Message
        isSentFromAuthor={undefined}
        message={undefined}
        author={undefined}
        timestamp={undefined}
      />
    );
    expect(component).toBeTruthy();
  });
});
