import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { UserAuth } from '../Context/AuthContext';

const SignIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { userSignIn } = UserAuth();

  const handleSubmit = async () => {
    setError('')
    try {
      await userSignIn(email, password)
        .then(alert("SignIn successfull"))

    } catch (error) {
      setError(error.message)
      console.log("Sign In err msg==>", error.message)

    }


  }



  return (
    <div className="flex mt-8 justify-center items-center">
      <Form
        name="normal_login"
        className="login-form w-80 p-4 rounded-div"
        initialValues={{
          remember: true,
        }}
        onFinish={handleSubmit}
      >
        <h1 className='text-center text-2xl mb-3'>Welcome</h1>
        <h1 className='text-center text-2xl font-bold mb-11'>Signin Your Account</h1>
        <Form.Item
          name="username"
          // help={error}
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          name="password"
          // help={error}
          rules={[
            {
              required: true,
              message: 'Please input your Password!',

            },
          ]}
        >
          <Input
            onChange={(e) => setPassword(e.target.value)}
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            // onChange={(e) => setPassword(e.target.value)}
            id="error"
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
            Log in
          </Button>
          <br />
          Or <Link className='underline' to='/signup'>register now!</Link>
        </Form.Item>
        {/* <Form.Item >

                    <GoogleButton className='w-60' onClick={handleGoogleSubmit} />
                </Form.Item> */}
      </Form>
    </div>
  )
}

export default SignIn
