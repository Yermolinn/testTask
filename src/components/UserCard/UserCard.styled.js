import styled from '@emotion/styled';

export const Profile = styled.div`
  margin: 0 auto;
`;

export const Description = styled.div`
  margin: 0 auto;
  width: 380px;
  height: 460px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #fff;
  border-radius: 20px;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
`;

export const Logo = styled.img`
  position: absolute;
  left: 20px;
  top: 20px;
`;
export const BgPicture = styled.img`
  position: absolute;
  top: 28px;
`;

export const Avatar = styled.img`
  position: absolute;
  top: 178px;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  border: 8px solid #EBD8FF;

  border-radius: 50%;
  /* box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF; */
  z-index: 10;
  
`;

export const HorizontalLine = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 214px;
  width: 100%;
  height: 8px;
  background: #ebd8ff;
  box-shadow: rgb(0 0 0 / 6%) 0px 3.43693px 3.43693px,
    rgb(174 123 227) 0px -1.71846px 3.43693px inset,
    rgb(251 248 255) 0px 3.43693px 2.5777px inset;
`;
