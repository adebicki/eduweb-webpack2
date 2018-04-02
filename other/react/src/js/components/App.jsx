import Users from "./Users.jsx";
import Button from "./Button.jsx";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showUsers: false };
    }

    render() {
        return (
            <div>
                <Button text="Pobierz dane" clickHandler={this.showUsers.bind(this)} />
                {this.state.showUsers ? <Users /> : null}
            </div>
        )
    }

    showUsers() {
        this.setState({ showUsers: true });
    }
}

export default App;