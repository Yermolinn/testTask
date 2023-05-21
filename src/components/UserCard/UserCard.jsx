import { UserInfo } from 'components/UserInfo/UserInfo';

import {
  Profile,
  Description,
  Avatar,
  HorizontalLine,
  Logo,
  BgPicture,
} from './UserCard.styled';
import foto from '../../images/user.png';
import bgPicture from '../../images/picture2 1.png';
import logo from '../../images/logo.svg';

export const UserCard = ({ info, countFollowers }) => {
  return (
    <Profile>
      <Description>
        <Logo src={logo} alt="logo"></Logo>
        <BgPicture src={bgPicture} alt="background picture"></BgPicture>
        <HorizontalLine></HorizontalLine>
        <Avatar src={info.avatar || foto} alt="User avatar" width="62" />
        <UserInfo info={info} countFollowers={countFollowers} />
      </Description>
    </Profile>
  );
};
