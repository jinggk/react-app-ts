/**
 *
 * @author vidy[Of2732号]
 * company qianmi.com
 * Date 2017-11-09
 *
 */
import * as React from 'react';
import {Props} from "react";
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
export class SideNav extends React.Component <Props<any>, object> {
    constructor(Props: Props<any>) {
        super(Props);
    }

    render() {
        return (<Menu style={{ width: 240 }}
                      defaultSelectedKeys={['1']}
                      defaultOpenKeys={['sub1']}
                      mode="inline">
            <SubMenu  key="sub1" title={<span><Icon type="mail" /><span>首页</span></span>}>
            </SubMenu>
        </Menu>);
    }
}