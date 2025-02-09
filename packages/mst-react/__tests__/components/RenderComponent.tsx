import * as React from "react"
import { types } from "mobx-state-tree"

const CounterModel = types
    .model("Counter", {
        count: types.number
    })
    .actions(self => ({
        increment() {
            self.count++
        }
    }))

interface MyComponentProps {
    model: typeof CounterModel.Type
}

export const MyComponent: React.FC<MyComponentProps> = ({ model }) => {
    return (
        <div>
            <p>Count: {model.count}</p>
            <button onClick={model.increment}>Increment</button>
        </div>
    )
}
