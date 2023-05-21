import styled from "@emotion/styled";

export const Tweets = styled.p`
margin: 0;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
`;

export const Followers = styled.p`
margin-top: 16px;
margin-bottom: 26px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
`;

export const FollowBtn = styled.button`

  width: 196px;
  height: 50px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-color: transparent;
  border-radius: 10.3108px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #373737;

  background-color: ${({ isActive }) => (isActive ? '#5CD3A8' : '#EBD8FF;')};
`;


export const InfoContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
position: absolute;
bottom: 36px;
`