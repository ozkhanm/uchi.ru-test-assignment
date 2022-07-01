import styled from "styled-components";

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 14px;
  padding-right: 14px;
  width: 100%;
  max-width: 740px;
  margin-top: auto;

  background-color: #F6F6F6;

  border-top: 1px solid #d6d4d4;  
  box-sizing: border-box;

  @media screen and (min-width: 740px) {
    border-left: 1px solid #d6d4d4;
    border-right: 1px solid #d6d4d4;
  }
`;

const Button = styled.button`
  padding: 0;
  width: 60px;

  color: #FF3130;
  font-size: 14px;
  letter-spacing: 0.5px;

  background-color: #F6F6F6;

  border: 0;
`;

const Footer = ({ deleteButtonShowStatus }) => {
  return (
    <FooterWrapper>
      <Button>Today</Button>
      { deleteButtonShowStatus ? <Button>Delete</Button> : "" }
    </FooterWrapper>
  );
};

export default Footer;