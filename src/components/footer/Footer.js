import styled from "styled-components";

const FooterWrapper = styled.footer`
`;

const TodayButton = styled.button`
`;

const DeleteButton = styled.button`
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <TodayButton>Today</TodayButton>
      <DeleteButton>Delete</DeleteButton>
    </FooterWrapper>
  );
};

export default Footer;