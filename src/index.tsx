import * as React from "react";
import * as ReactDom from 'react-dom';
import {LoginPage} from "./pages/LoginPage/LoginPage";
import './style/index.less';
import {MapPage} from "./pages/MapPage/MapPage";
import {
    BrowserRouter,
    Route,
    Link
} from 'react-router-dom'
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
        return <BrowserRouter>
            <div className={'app'}>
                <ul className={'nav'}>
                    <li><Link to='/'>登陆</Link></li>
                    <li><Link to='/map'>地图</Link></li>
                </ul>
                <div className={'routes-container'}>
                    <Route exact path='/' component={LoginPage}/>
                    <Route path='/map' component={MapPage}/>
                </div>

            </div>
        </BrowserRouter>
    }
}


ReactDom.render(<App/>, document.getElementById('app-container'));