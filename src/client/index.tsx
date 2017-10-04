import * as React from "react";
import * as ReactDOM from "react-dom";

import { Authors } from "./components/generic/Authors";

ReactDOM.render(
    <Authors firstName="Mihai Vlad" lastName="Catalina" />,
    document.getElementById("example")
);

export function myTestFunc() {
    console.log('holla');
}
