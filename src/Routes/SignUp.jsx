import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';


const SignUp = () => {
  return (
    <div className="flex mt-8 justify-center items-center">
      <Form
        name="normal_login"
        className="rounded-div login-form w-80 p-4"
        initialValues={{
          remember: true,
        }}

        // onFinish={handleSubmit}
      >
        <h1 className='text-center text-2xl font-bold mb-11'>Create Your Account</h1>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            // onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="#">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button w-full bg-sky-600">
            Create Account
          </Button>
          <br />
          Or <Link className='underline' to='/signin'>signin instead</Link>
        </Form.Item>
        {/* <Form.Item>
          <GoogleButton />
        </Form.Item> */}
      </Form>
    </div>
  )
}

export default SignUp
