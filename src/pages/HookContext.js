import React, { Component, useContext } from 'react'

const Context = React.createContext();
const Provider = Context.Provider;
// const Consumer = Context.Consumer;

const store = {
    user: {
        name: "tomf"
    }
}

export default class HookContext extends Component {
    render() {
        return (
            <div>
                <Provider value={store}>
                    <ContextChild />
                </Provider>
            </div>
        )
    }
}



function ContextChild(props) {
    const { user } = useContext(Context);
    return (
        <div>
            child
            <div>username:{user.name}</div>
        </div>
    )
}
