import React from "react"
import { render, fireEvent } from "@testing-library/react"
import Search from "./Search"
import "@testing-library/jest-dom"

jest.mock("axios", () => ({
  get: jest.fn(() => Promise.resolve({ data: [] })),
}))

describe("Search Component", () => {
  it("renders correctly", () => {
    const { getByLabelText } = render(<Search />)
    expect(getByLabelText("Search for garments")).toBeInTheDocument()
  })

  it("updates on change", () => {
    const { getByLabelText } = render(<Search />)
    const searchInput = getByLabelText("Search for garments")

    fireEvent.change(searchInput, { target: { value: "test" } })
    expect(searchInput.value).toBe("test")
  })
})
