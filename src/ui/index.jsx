import '../asset/global.css'
import ArtikelPage from '../pages/artikel';
import React,{ Component } from "react";
import Navbar from "../components/navbar";
import Home from "../pages/home";
import Footer from '../components/footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default class Layout extends Component{
    render(){
        return (
            <>
                <Router>
                    <Navbar/>
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route path="/artikel/:id" component={ArtikelPage}/>
                    </Switch>           
                    <Footer/>
                </Router>
            </>
        )
    }
}