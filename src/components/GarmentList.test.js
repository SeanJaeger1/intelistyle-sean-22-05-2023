import React from "react"
import { render } from "@testing-library/react"
import GarmentList from "./GarmentList"
import "@testing-library/jest-dom"

const mockGarments = [
  {
    _id: "1",
    product_title: "Garment 1",
    images: [{ s3_url_resized: "http://image1.jpg" }],
    price: 100,
    currency_code: "USD",
  },
  {
    _id: "2",
    product_title: "Garment 2",
    images: [{ s3_url_resized: "http://image2.jpg" }],
    price: 200,
    currency_code: "USD",
  },
]

describe("GarmentList Component", () => {
  it("renders correctly", () => {
    const { getByText } = render(<GarmentList garments={mockGarments} />)
    expect(getByText("Garment 1")).toBeInTheDocument()
    expect(getByText("Price: 100 USD")).toBeInTheDocument()
    expect(getByText("Garment 2")).toBeInTheDocument()
    expect(getByText("Price: 200 USD")).toBeInTheDocument()
  })
})
