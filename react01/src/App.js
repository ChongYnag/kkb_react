import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import User from "./pages/User";
import Search from "./pages/Search";
import LifeCycle from "./pages/LifeCycle";
import Layout from "./components/Layout"
import HooksPage from './pages/HooksPage'
import HooksReducer from './pages/HooksReducer'
import HookContext from './pages/HookContext'


const Context = React.createContext();
const Provider = Context.Provider;
const Consumer = Context.Consumer;

const store = {
    userInfo: {
        userName: "xiaoming",
    },
};

function tellme(msg) {
    console.log("tellme", msg);
}

function App() {
    return (

        <div className="App">
            {/* <Home /> */}
            {/* <User /> */}
            {/* <Provider value={store}>
                <Consumer>
                    {cts => <Search {...cts} tellme={tellme} />}
                </Consumer>

            </Provider> */}
            {/* <LifeCycle /> */}
            <Layout>
                {/* <Home /> */}
                {/* <HooksPage /> */}
                {/* <HooksReducer /> */}
                <HookContext />
            </Layout>

        </div>
    );
}

export default App;
