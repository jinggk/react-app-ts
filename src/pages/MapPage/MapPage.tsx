/**
 *
 * @author vidy[Of2732号]
 * company qianmi.com
 * Date 2017-11-08
 *
 */
import * as React from 'react';
import {Props} from "react";
import {Map} from 'react-amap';
export class MapPage extends React.Component <Props<any>, object> {
    constructor(Props: Props<any>) {
        super(Props);
    }

    render() {
        return (<div style={{width:'400px', height: '400px'}}>
            <Map amapkey={'dbee6c56da37c5732758bd4d4e09f31a'}/>
        </div>);
    }
}