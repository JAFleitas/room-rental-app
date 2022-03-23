import React from 'react';

const Login = () => {
  return (
      <Modal
        overlayShow={true}
        modalShow={logInShow}
        setModalShow={setLogInShow}>
        <ModalTitle>Log In</ModalTitle>
        <ModalForm fields={2}>
          <ModalField>
            <ModalLabel>Email: </ModalLabel>
            <ModalInput
              type="text"
              name="email"
              value={logInForm.email}
              onChange={handleChangeLogIn}
              placeholder="Email"></ModalInput>
          </ModalField>
          <ModalField>
            <ModalLabel>Password: </ModalLabel>
            <ModalInput
              type="text"
              name="password"
              value={logInForm.password}
              onChange={handleChangeLogIn}
              placeholder="Password"></ModalInput>
          </ModalField>
          <ModalButton type="submit" onClick={handleSubmitLogIn}>
            Log in
          </ModalButton>
          <ModalButtonFacebook>
            <BsFacebook />
            Log in with Facebook
          </ModalButtonFacebook>
          <ModalButtonGoogle>
            <FcGoogle />
            Log in with Google
          </ModalButtonGoogle>
        </ModalForm>
      </Modal>
  )
}

export default Login;
