import React, { Component } from "react"
import { StokPng } from "../../asset/img/clients"

export default class Hero extends Component{
    render() {
        return(
            <section id="hero" className="d-flex align-items-center">
                <div className="container">
                <div className="row">
                    <div className="col-lg-6 order-1 order-rg-2 hero-img">
                        <img src={StokPng} className="img-fluid animated" alt=""/>
                    </div>
                    <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
                    <h1>Pusat Berita Saham Dan Cryptocurrency Terpercaya</h1>
                    <h2>Tempat untuk kamu yang ingin berdiskusi, analisa dan investasi saham dalam satu tempat.</h2>
                    </div>
                </div>
                </div>
            </section>

        )
    }
}