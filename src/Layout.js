import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'
import Navbar from './components/Navbar'
import Info from './views/Info'
import Notfound from './views/Notfound'

const Layout = () => {
    return(
        <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path={"/docs/:version/:section/:element"} component={Info} />
            <Route path={"/about"} component={About}></Route>
            <Route exact path={"/"} component={Home}></Route>
            <Route component={Notfound}></Route>
        </Switch>
        </BrowserRouter>
    )
}

export default Layout;