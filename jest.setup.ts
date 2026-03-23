import "@testing-library/jest-dom";

jest.mock("next/font/google", () => ({
  Geist: () => ({
    className: "font-geist-sans",
    variable: "--font-geist-sans",
  }),
  Geist_Mono: () => ({
    className: "font-geist-mono",
    variable: "--font-geist-mono",
  }),
}));
