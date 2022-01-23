import React from "react";

class ProfilePageClass extends React.Component {
    showMessage = () => {
        alert("Followed " + this.props.user);
    };

    handleClick = () => {
        setTimeout(this.showMessage, 4000);
    };

    componentDidMount() {
        console.log(`Mounted with this.props.user: ${this.props.user}, this: `, this);
    }

    componentDidUpdate() {
        console.log(`Updated with this.props.user: ${this.props.user}, this: `, this);
    }

    componentWillUnmount() {
        console.log(`Unmounted with this.props.user: ${this.props.user}`);
    }

    render() {
        return <button onClick={this.handleClick}>Follow</button>;
    }
}

export default ProfilePageClass;
