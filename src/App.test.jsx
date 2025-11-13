import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App";

describe("App", () => {
  it("renders the WhatsApp link with the correct phone number", () => {
    render(<App />);
    const linkElement = screen.getByLabelText(/chat on whatsapp/i);
    expect(linkElement).toHaveAttribute(
      "href",
      `https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}`
    );
  });
});
