import * as React from "react";

interface HomeProps {
    name: string;
    age: number;
}

export class Home extends React.Component<HomeProps, {}> {
    render() {
        return (
            <div>
                <h2>Hello there, {this.props.name}, you are {this.props.age}.</h2>
            </div>
        )
    }
}