// packages/mst-react/src/__tests__/MyComponent.test.tsx
import * as React from "react"
import { render, fireEvent } from "@testing-library/react"
import { MyComponent } from "./components/RenderComponent" // adjust the path as needed
import { types } from "mobx-state-tree"
import { useObservable } from "../src/useObservable"

describe("MyComponent", () => {
    // Create a minimal MST model for testing
    const CounterModel = types
        .model("Counter", {
            count: types.number
        })
        .actions(self => ({
            increment() {
                self.count++
            }
        }))

    it("renders the component and increments the counter", () => {
        const counter = CounterModel.create({ count: 0 })

        // Render the component with the MST model
        const { getByText } = render(<MyComponent model={counter} />)

        // Check the initial count is rendered
        expect(getByText("Count: 0")).toBeInTheDocument()

        // Simulate a click event on the increment button
        fireEvent.click(getByText("Increment"))

        // Assert that the count has incremented
        expect(getByText("Count: 1")).toBeInTheDocument()
    })
})
