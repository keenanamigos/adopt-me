import { Component, FunctionComponent } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Animal, PetApiResponse } from "./ApiResponseTypes";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import Modal from "./Modal";
import ThemeContext from "./ThemeContext";

class Details extends Component<RouteComponentProps<{ id: string }>> {
    state = { 
        loading: true,
        showModal: false,
        animal: "" as Animal,
        breed: "",
        city: "",
        state: "",
        description: "",
        name: "",
        images: [] as string[]
    };

    async componentDidMount() {
        const requestUrl = `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`;
        const response: Response = await fetch(requestUrl);

        const data = (await response.json()) as PetApiResponse;
        this.setState(Object.assign({ loading: false }, data.pets[0]));
    }

    toggleModal = () => this.setState({ showModal: !this.state.showModal });
    adoptAPet = () => (window.location.href = 'http://bit.ly/pet-adopt');

    render() {
        if (this.state.loading) {
            return <h2>loading...</h2>
        }
        
        const { animal, breed, city, state, description, name, images, showModal } = this.state;

        return (
            <div className="details">
                <Carousel images={images} />
                <div>
                    <h1>{ name }</h1>
                    <h2>{ animal } - { breed } - { city }, { state }</h2>
                    <ThemeContext.Consumer>
                        {([theme]) => (
                            <button onClick={ this.toggleModal } style={ { backgroundColor: theme }}>Adopt { name }!</button>
                        )}
                    </ThemeContext.Consumer>
                    <p>{ description }</p>
                    {
                        showModal ?  (
                            <Modal>
                                <div>
                                    <h1>Would you like to adopt { name }?</h1>
                                    <div className="buttons">
                                        <button onClick={ this.adoptAPet }>Yes</button>
                                        <button onClick = { this.toggleModal }>No</button>
                                    </div>
                                </div>
                            </Modal>
                        ) : null
                    }
                </div>
            </div>
        )
    }
}

const DetailsWithRouter = withRouter(Details);
const DetailsWithErrorBoundary: FunctionComponent = function DetailsWithErrorBoundary() {
    return (
        <ErrorBoundary>
            <DetailsWithRouter />
        </ErrorBoundary>
    )
}

export default DetailsWithErrorBoundary;