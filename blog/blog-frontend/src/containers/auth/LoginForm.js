import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthForm from '../../components/auth/AuthForm';
import { changeField, initializeForm } from '../../modules/auth';

const LoginForm = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }) => ({
    form: auth.login,
  }));

  // 인풋 변경 핸들러
  const onChange = e => {
    const { name, value } = e.target;
    dispatch(changeField({ form: 'login', key: name, value }));
  };

  // 폼 등록 이벤트 핸들러
  const onSubmit = e => {
    e.preventDefault();
  };

  // 컴포넌트가 처음 렌더링 될 때 form을 초기화 함
  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  return (
    <AuthForm
      type="login"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    ></AuthForm>
  );
};

export default LoginForm;
