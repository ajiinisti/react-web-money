import { Component } from "react";
import { Artikel1, Artikel2, Artikel3, Artikel4 } from "../../asset/img/clients";

export default class ArtikelPage extends Component{
    render(){
        const id= this.props.match.params.id
        const articles = [
            {
                id:1,
                imageSrc:Artikel1,
                alt:'Article Image',
                title:"Mekanisme Transaksi Saat Pre Opening Pasar Saham",
                tag:"Saham",
                date:"10 Mei 2023",
                content:"Sebelum berpartisipasi pada sesi pre opening transaksi saham, kamu harus memeriksa dulu apakah aplikasi trading saham milikmu memperbolehkan pemasangan order di luar jam bursa. Kalau kurang pasti, coba berkonsultasi langsung dengan CS sekuritasmu. Selanjutnya, kamu perlu memastikan pula apakah aplikasi trading saham dapat berfungsi lancar pada menit-menit tersebut. Beban trafik saat pembukaan pasar saham biasanya sangat tinggi, sehingga sekuritas yang memperbolehkan transaksi pre opening pun bisa jadi menghadapi kenaikan trafik drastis hingga aplikasi trading-nya hang atau freeze. Error kemungkinan terjadi hingga beberapa menit setelah pukul 09.00 (pembukaan pasar reguler), tetapi akan semakin lancar perlahan seiring berlangsungnya perdagangan sesi 1. Ini fenomena wajar yang terjadi pada mayoritas sekuritas di Indonesia, tetapi dapat menghambat investor ritel yang ingin ikut sesi pre opening.Selain masalah sarana dan prasarana, partisipasi dalam sesi pre opening sebenarnya tidak direkomendasikan untuk investor jangka panjang. Fluktuasi harga pada sesi ini sukar ditebak dan berisiko tinggi. Akan lebih baik jika kamu memantau pergerakan harga pada jam perdagangan pasar saham biasa, kemudian memutuskan pembelian maupun penjualan saham berdasarkan pertimbangan atas pergerakan harga saham yang sudah diketahui."
            },{
                id:2,
                imageSrc:Artikel2,
                alt:'Article Image',
                title:"Pentingnya Memahami Manajemen Resiko Investasi",
                tag:"Investasi",
                date:"10 Mei 2023",
                content:"Manajemen risiko investasi adalah kerangka dan proses manajemen risiko yang secara spesifik diarahkan pada pengelolaan risiko investasi. Manajemen risiko investasi mencakup pengelolaan berbagai risiko yang melekat pada proses perencanaan investasi/proyek Capex, pengadaan mitra kerja dan pengadaan proyek, perizinan, serta proses pelaksanaan proyek termasuk pengadaan sumber daya proyek dan pengelolaan hubungan dengan para stakeholders yang dapat mempengaruhi keberlangsungan proyek.  Indikator dan kriteria risiko investasi akan bermanfaat bagi perusahaan di dalam pengelolaan risiko Capex. Indikator dan kriteria risiko tersebut dapat dikembangkan di suatu perusahaan dan dapat dikategorikan ke dalam dua kelompok besar yakni indikator dan kriteria risiko yang terkait dengan proses perencanaan Capex serta indikator dan kriteria risiko yang terkait dengan proses pengelolaan proyek."
            },{
                id:3,
                imageSrc:Artikel3,
                alt:'Article Image',
                title:"Daftar Saham Blue Chip, harga 1 slot dibawah Rp1juta?",
                tag:"Saham",
                date:"10 Mei 2023",
                content:"Dalam memilih jenis saham untuk investasi, tidak hanya yang dapat menghasilkan keuntungan dalam waktu tertentu saja. Perhatikan ketahanan suatu jenis saham dalam menghadapi berbagai kondisi keuangan suatu negara. Salah satu jenis saham yang dapat menjadi pilihan kamu dalam berinvestasi adalah saham consumer goods.Di Indonesia, jenis saham consumer goods ini banyak pilihannya. Bahkan beberapa saham perusahaan yang bergerak di bidang consumer goods ini masuk ke dalam kategori saham blue chip. Lalu, apakah jenis saham murah consumer goods tersebut bisa dibeli 1 lot sahamnya dengan harga di bawah Rp1.000.000 per 9 Mei 2023?"
            },{
                id:4,
                imageSrc:Artikel4,
                alt:'Article Image',
                title:"Risiko & Tips Membeli Saham saat Cum Date Dividen",
                tag:"Saham",
                date:"10 Mei 2023",
                content:"Harga saham saat cum date dapat dikatakan telah “membengkak” lantaran tingginya ekspektasi para pemburu dividen. Ibarat sebuah balon yang sudah ditiup terlalu kencang, tentu akan rentan meletus dan pecah. Oleh karena itu, ada dua risiko membeli saham saat cum date yang harus kamu ketahui.Pertama,Kamu boleh jadi membeli saham pada harga yang terlalu mahal, melampaui nilai wajar fundamentalnya.Kedua,Kamu boleh jadi akan kesulitan menjual kembali saham tersebut pada harga lebih tinggi dalam jangka pendek.Perusahaan-perusahaan yang membagi dividen dalam jumlah besar belum tentu memiliki fundamental keuangan yang bagus. Manajemen bisa saja sengaja bagi-bagi dividen sebagai “bonus” untuk menenangkan investor yang tidak puas pada kinerja perusahaan. Tapi modus seperti itu tidak akan bertahan lama, karena besarnya beban pembayaran dividen justru akan memangkas kemampuan perusahaan untuk menghasilkan laba pada tahun-tahun berikutnya."
            }
        ]

        const data = articles.find(a => {
            return a.id === parseInt(id)
        })
        console.log(Artikel1)

        return(
            <section className="d-flex align-items-center mt-4">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>{data.title}</h2>
                        <p>{data.tag} | {data.date}</p>
                    </div>

                    <div className="row content">
                        <div className="col">
                            <img src={data.imageSrc} alt={data.alt} className="article-image"/>
                            <br></br>
                            <br></br>
                            <h3>{data.title}</h3>
                            <p>{data.content}</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}