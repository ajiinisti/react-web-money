import { Component } from "react";
import { Artikel1, Artikel2, Artikel3, Artikel4 } from "../../asset/img/clients";
import CarouselItem from "../../components/carousel-item";

export default class Artikel extends Component{
    render(){
        const carouselArticle = [
            {
                id:2,
                imageSrc:Artikel2,
                alt:'Article Image',
                title:"Pentingnya Memahami Manajemen Resiko Investasi",
                tag:"Saham",
                date:"10 Mei 2023"
            },{
                id:4,
                imageSrc:Artikel4,
                alt:'Article Image',
                title:"Risiko & Tips Membeli Saham saat Cum Date Dividen",
                tag:"Investasi",
                date:"10 Mei 2023"
            },{
                id:3,
                imageSrc:Artikel3,
                alt:'Article Image',
                title:"Daftar Saham Blue Chip, harga 1 slot dibawah Rp1juta?",
                tag:"Saham",
                date:"10 Mei 2023"
            }
        ]

        const articles = [
            {
                id:1,
                imageSrc:Artikel1,
                alt:'Article Image',
                title:"Mekanisme Transaksi Saat Pre Opening Pasar Saham",
                tag:"Saham",
                date:"10 Mei 2023",
            },{
                id:2,
                imageSrc:Artikel2,
                alt:'Article Image',
                title:"Pentingnya Memahami Manajemen Resiko Investasi",
                tag:"Investasi",
                date:"10 Mei 2023",
            },{
                id:3,
                imageSrc:Artikel3,
                alt:'Article Image',
                title:"Daftar Saham Blue Chip, harga 1 slot dibawah Rp1juta?",
                tag:"Saham",
                date:"10 Mei 2023"
            },{
                id:4,
                imageSrc:Artikel4,
                alt:'Article Image',
                title:"Risiko & Tips Membeli Saham saat Cum Date Dividen",
                tag:"Saham",
                date:"10 Mei 2023"
            }
        ]

        return(
            <section id="services" className="services  ">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                    <h2>Artikel Pilihan untuk Anda</h2>
                    </div>

                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                        {
                            carouselArticle.map((artikel,index) => (
                                <CarouselItem artikel={artikel} index={index}/>
                            ))
                        }
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                        </div>

                    <br/>

                    <div className="section-title">
                    <h3>Terbaru</h3>
                    </div>
                    <div className="row">
                        {
                            articles.map((artikel) => (
                                <div className="col-xl-3 col-md-6 d-flex align-items-stretch">
                                    <div className="card border-0 card-car" style={{width: '18rem'}}>
                                        <a href={"/artikel/"+artikel.id}>
                                            <img src={artikel.imageSrc} className="card-img-top" alt={artikel.alt}/>
                                            <div className="card-body">
                                                <h6>{artikel.title}</h6>
                                                <span>{artikel.tag} </span>
                                                <p className="card-text text-secondary">{artikel.date}</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            ))
                        }

                        <div className="col-xl-12">
                            <div className="d-flex justify-content-center align-items-center mt-4">
                            <div className="mx-auto my-auto">         
                                <a href="/#">
                                <svg className="svg-right-arrow fs-3 text bi bi-arrow-right" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                </svg><span>Selengkapnya...</span>
                                </a>
                            </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                </section>
        )
    }
}