import React, { Component } from "react";
import { InstagramLogo, TwitterLogo, WaLogo, YoutubeLogo } from "../../asset/img";

export default class Footer extends Component{
    render(){
        const socialMedia = [
            {
                image: TwitterLogo,
                alt:"Twitter Logo",
                link: "twitter.com"
            },
            {
                image: YoutubeLogo,
                alt:"Youtube Logo",
                link:"youtube.com"
            },
            {
                image: WaLogo,
                alt:"Whatsapp Logo",
                link:"whatsapp.com"
            },
            {
                image: InstagramLogo,
                alt:"Instagram Logo",
                link:"instagram.com"
            }
        ]
        return(
            <footer id="footer">
                <div className="footer-top">
                    <div className="container">
                    <div className="row">

                        <div className="col-lg-3 col-md-6 footer-contact">
                        <h3>BSB</h3>
                        <p>
                        Belajar Saham Bersama by PT Belajar Saham Bersama mengajak seluruh Rakyat Indonesia untuk berdiskusi maupun belajar terkait saham dan cryptocurrency.
                        </p>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                        <h4>Lokasi</h4>
                        <p>
                        Jl. H. Dahlan No.75, RT.8 / RW.4, Ragunan, Ps. Minggu, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12550
                        </p>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                        <h4>Layanan Kami</h4>
                        <ul>
                            <li><i className="bx bx-chevron-right"></i> <a href="#hero">Beranda</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#about">Tentang Kami</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#services">Artikel</a></li>         
                        </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links ">
                        <h4>Social Media</h4>
                        <ul className="list-unstyled d-flex justify-content-between">
                        {
                            socialMedia.map((sm) => (
                                <li className="flex-fill" key={sm.alt}>
                                    <a href="/#">
                                        <img src={sm.image} alt={sm.alt}/>
                                    </a>
                                </li>
                            ))
                        }
                        </ul>
                        </div>

                    </div>
                    </div>
                </div>
                    <div className="justify-content-center text-light">
                    <div className="d-flex align-items-center">
                        <div className="mx-auto my-4">
                        &copy; Copyright <strong><span>PT Belajar Saham Bersama</span></strong>. All Rights Reserved
                        </div>
                    </div>
                    </div>
                </footer>
        )
    }
}