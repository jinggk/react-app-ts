/**
 *
 * @author vidy[Of2732号]
 * company qianmi.com
 * Date 2017-11-07
 *
 */
import * as React from 'react';
import {FormEvent, Props} from "react";
import {Form, Icon, Input, Button, Checkbox} from 'antd';
import {FormComponentProps} from "antd/lib/form/Form";
import { RouteComponentProps} from "react-router";

const FormItem = Form.Item;
interface LoginPageProps extends Props<any> , FormComponentProps , RouteComponentProps<any>{}
class LoginForm extends React.Component <LoginPageProps, object> {
    constructor(prop: LoginPageProps) {
        super(prop);
        console.log(prop.match)
    }

    handleSubmit = (e: FormEvent<any>) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div className={'login-page'}>
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{required: true, message: '请输入用户名!'}],
                    })(
                        <Input prefix={<Icon type="user" style={{fontSize: 13}}/>} placeholder="用户名"/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{required: true, message: '请输入密码 !'}],
                    })(
                        <Input prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password"
                               placeholder="密码"/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>记住密码 </Checkbox>
                    )}
                    <a className="login-form-forgot" href="">忘记密码</a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登陆
                    </Button>
                    Or <a href="">注册!</a>
                </FormItem>
            </Form>
            </div>
        );
    }
}

export const LoginPage = Form.create()(LoginForm);