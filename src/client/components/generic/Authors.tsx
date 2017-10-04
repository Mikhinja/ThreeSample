import * as React from "react";

export interface AuthorsProps { firstName: string; lastName: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Authors extends React.Component<AuthorsProps, undefined> {
    render() {
        return <h1>Hello from { this.props.firstName } { this.props.lastName }!</h1>;
    }
}