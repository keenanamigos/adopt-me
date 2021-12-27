import { Component, MouseEvent, ReactNode } from "react";

interface Props {
    images: string[];

}

class Carousel extends Component<Props> {
    state = {
        active: 0
    };

    static defaultProps = {
        images: ['http://pets-images.dev-apis.com/pets/none.jpg'],
    };

    handleIndexClick = (event: MouseEvent<HTMLElement>): void => {
        if (!(event.target instanceof HTMLElement)) {
            return;
        }

        const eventIndex = event.target.dataset.index;

        this.setState({
            // + symbol is to convert this index from a string to number to match active's data type
            active: eventIndex ? +eventIndex : 0
        })
    }

    render(): ReactNode {
        const { active } = this.state;
        const { images } = this.props;

        return (
            <div className="carousel">
                <img src={images[active]} alt="animal" />
                <div className="carousel-smaller">
                    {
                        images.map((photo, index) => {
                            return (
                                // eslint-disable-next-line
                                <img
                                    key={photo}
                                    src={photo}
                                    data-index={index}
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