import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import home from '../../pages/Home'

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={home} />
            </Switch>
        </Router>
    );
}
export default App;