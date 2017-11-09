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
import {RouterProps} from "react-router";
import Button from "antd/lib/button/button";
import Input from "antd/lib/input/Input";
interface MapPageProps extends Props<any>, RouterProps{

}
export class MapPage extends React.Component <MapPageProps, object> {
    constructor(prop: MapPageProps) {
        super(prop);
    }

    render() {
        return (<div className={'page mapPage'}>
            <div className={'search-bar'}>
                <Input placeholder={'请输入搜索地点'}/>
            </div>
            <Map amapkey={'dbee6c56da37c5732758bd4d4e09f31a'} zoom={11}/>
        </div>);
    }
}