import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { LoginPage } from "..";
import { BrowserRouter } from "react-router-dom";

const MockUpPage = () => {
  return (
    <BrowserRouter>
      <LoginPage />
    </BrowserRouter>
  );
};

test("to check if the page redirects after validation", async () => {
  render(<MockUpPage />);
  const emailInput = screen.getByPlaceholderText("Email");
  const passwordInput = screen.getByPlaceholderText(`Password`);
  const loginBtn = screen.getByText("login");
  fireEvent.change(emailInput, { target: { value: "user@gmail.com" } });
  fireEvent.change(passwordInput, { target: { value: "password" } });
  fireEvent.click(loginBtn);

  await waitFor(() =>
    expect(window.location.pathname).toBe("/dashboard/users")
  );
});
