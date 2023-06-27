import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 50px 0;
  height: 100%;
`;

export const CheckoutHeader = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid darkgrey;
  padding-bottom: 20px;

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;
  font-weight: bold;
  transition: 0.3s ease-out;
  transform: translateY(10px)
  color: #01bf71 ;

  &:last-child {
    width: 8%;
  }
  &:hover {
    cursor: pointer;
    color: #01bf71;
  }
`;


export const Total = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

export const Warning = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 24px;
  color: red;
`;

export const CheckoutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  button {
    margin-left: auto;
    margin-top: 50px;
  }

  @media screen and (max-width: 800px) {
    width: 90%;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const CheckoutHeaderContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: 23%;
  &:last-child {
    width: 8%;
  }

  @media screen and (max-width: 800px) {
    width: 22%;
    &:last-child {
      width: 12%;
    }
  }
`;

export const TotalContainer = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

export const WarningContainer = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 24px;
  color: red;
`;

export const StripeCheckoutButtonContainer = styled.div`
  margin-left: auto;
  margin-top: 50px;
`;

export const CheckoutPage = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  button {
    margin-left: auto;
    margin-top: 50px;
  }

  @media screen and (max-width: 800px) {
    width: 90%;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;
