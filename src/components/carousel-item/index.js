import { Component } from "react"

export default class CarouselItem extends Component{
    render (){
        return(
            this.props.index == 0 ? (
            <div className="carousel-item active">
                <a href="#">
                    <img src={this.props.artikel.imageSrc} className="d-block w-100" alt={this.props.artikel.alt}/>
                    <div className="carousel-caption d-md-block">
                        <h5>{this.props.artikel.title}</h5>
                        <p>{this.props.artikel.tag}</p>
                    </div>
                </a>
            </div>) : (
                <div className="carousel-item">
                    <a href="#">
                        <img src={this.props.artikel.imageSrc} className="d-block w-100" alt={this.props.artikel.alt}/>
                        <div className="carousel-caption d-md-block">
                            <h5>{this.props.artikel.title}</h5>
                            <p>{this.props.artikel.tag}</p>
                        </div>
                    </a>
                </div>
            )
        )
    }
}