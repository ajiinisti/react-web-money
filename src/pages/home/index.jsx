import React,{ Component } from "react";
import Hero from "./hero";
import About from "./about";
import Artikel from "./artikel";

export default class Home extends Component{
    render() {
        return(
            <>
                <Hero/>
                <main id={"main"}>
                    <About/>
                    <Artikel/>
                </main>
            </>
        )
    }
}