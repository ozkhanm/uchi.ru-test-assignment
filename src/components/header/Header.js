import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding-top: 21px;
  padding-left: 23px;
  padding-right: 23px;
  padding-bottom: 23px;

  @media screen and (min-width: 740px) {
    border-left: 1px solid #d6d4d4;
    border-right: 1px solid #d6d4d4;
  }
`;

const Title = styled.h1`
  margin: 0;

  font-size: 18px;
  font-weight: 300;
  letter-spacing: -0.4px;
`;

const AddButton = styled.button`
  width: 20px;
  height: 20px;

  background-image: url("data:image/svg+xml;charset=UTF-8,<svg xmlns='http://www.w3.org/2000/svg' width='14px' height='14px'><line stroke='%23FF3130' stroke-width='2' x1='0' x2='14' y1='7' y2='7'/><line stroke='%23FF3130' stroke-width='2' x1='7' x2='7' y1='0' y2='14'/></svg>");
  background-color: #fff;
  background-position: center;
  background-repeat: no-repeat;

  border: 0;
`;

const Header = ({ addButtonClickHandler }) => {
  return (
    <HeaderWrapper>
      <Title>Interview Calendar</Title>
      <AddButton onClick={addButtonClickHandler} />
    </HeaderWrapper>
  );
};

export default Header;