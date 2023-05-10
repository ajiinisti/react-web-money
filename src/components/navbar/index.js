import React, { Component } from "react";

export default class Navbar extends Component{
    render(){
        return(
            <header id="header" className="fixed-top bg-navbar-fixed">
                <div className="container d-flex align-items-center">

                <h1 className="logo me-auto"><a href="/#">Belajar Saham Bersama</a></h1>

                <nav id="navbar" className="navbar">
                    <ul>
                    <li><a className="nav-link scrollto" href="#hero">Beranda</a></li>
                    <li><a className="nav-link scrollto" href="#about">Tentang Kami</a></li>
                    <li><a className="nav-link scrollto" href="#services">Artikel</a></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>

                </div>
            </header>
        )
    }
}