import * as React from "react";
import * as ReactDom from 'react-dom';
import {LoginPage} from "./pages/LoginPage";

/**
 *
 * @author vidy[Of2732号]
 * company qianmi.com
 * Date 2017-11-07
 *
 */


class App extends React.Component {

    constructor() {
        super();
    }

    componentDidMount(): void {
        // super.componentDidMount();
    }

    render(): JSX.Element | any | any {
        return <div><LoginPage/></div>
    }
}


ReactDom.render(<App/>, document.getElementById('app-container'));