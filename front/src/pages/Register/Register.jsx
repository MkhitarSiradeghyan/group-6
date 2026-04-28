import React from "react";
import s from "./Register.module.sass";
import Container from "../../components/Container/Container";
import Title from "./../../components/Title/Title";
import Input from "../../components/Input/Input";

const Register = () => {
  return (
    <div className={s.main}>
      <Container>
        <div className={s.wrap}>
          <div className={s.group}>
            <Title level={1}>Create an Account</Title>
            <form className={s.form}>
              <Input type="email" name="email" placeholder="Email" />
              <Input type="password" name="password" placeholder="Password" />
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Register;
