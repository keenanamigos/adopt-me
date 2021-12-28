import { Component } from "react";

class Carousel extends Component {
    state = {
        active: 0
    };

    static defaultProps = {
        images: ['http://pets-images.dev-apis.com/pets/none.jpg'],
    };

    handleIndexClick = (event) => {
        this.setState({
            // + symbol is to convert this index from a string to number to match active's data type
            active: +event.target.dataset.index
        })
    }

    render() {
        const { active } = this.state;
        const { images } = this.props;

        return (
            <div className="carousel">
                <img data-testid="heroImage" src={images[active]} alt="animal" />
                <div className="carousel-smaller">
                    {
                        images.map((photo, index) => {
                            return (
                                // eslint-disable-next-line
                                <img
                                    key={photo}
                                    src={photo}
                                    data-index={index}
                                    data-testid={`thumbnail${index}`}
                                    onClick={this.handleIndexClick}
                                    className={ index === active ? "active" : "" }
                                    alt="animal thumbnail"
                                />
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Carousel;