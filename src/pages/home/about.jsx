import React,{ Component } from "react";
import { FamPhoto } from "../../asset/img/clients";

export default class About extends Component{
    render(){
        return(
            <section id="about" class="about">
                <div class="container" data-aos="fade-up">
                    <div class="section-title">
                    <h2>Tentang Kami</h2>
                    </div>

                    <div class="row content">
                    <div class="col-lg-6 pt-4 pt-lg-0">
                        <img src={FamPhoto} className="img-fluid animated" alt=""/>
                    </div>
                    <div class="col-lg-6">
                        <h4>Siapa kami ?</h4>
                        <p>
                        Digerakkan oleh visi untuk mengembangkan Belajar Saham Bersama sebagai perusahaan pembelajaran dengan sarana pusat diskusi yang terbaik di Indonesia dari seluruh kalangan.  </p>

                        <br/>
                        <p>
                        Misi penting kami adalah memajukan masyarakat Indonesia dalam era digital ekonomi ini untuk mengerti dan dapat terjun langsung ke dalam bidang saham dan cryptocurency. Oleh karena itu, BSB aktif mengadakan seminar, pendekatan pada universitas, dan pendidikan online. Karena kami percaya bahwa edukasi adalah kunci kemajuan kita bersama.
                        </p>

                        <a href="/#">
                        <svg class="svg-right-arrow bi bi-arrow-right" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                        </svg><span>Selengkapnya...</span>
                        </a>
                    </div>
                    </div>

                </div>
            </section>
        )
    }
}