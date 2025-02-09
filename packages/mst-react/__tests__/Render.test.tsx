// packages/mst-react/src/__tests__/MyComponent.test.tsx
import * as React from "react"
import { render, fireEvent } from "@testing-library/react"
import HookPage from "./components/RenderComponent" // adjust the path as needed

describe("HookPage", () => {
    // Create a minimal MST model for testing
    it("renders the component and increments the counter", () => {
        const { getByText } = render(<HookPage />)
        expect(getByText("Count: 0")).toBeInTheDocument()
        fireEvent.click(getByText("+"))
        expect(getByText("Count: 1")).toBeInTheDocument()
    })
})
