import React, { useState, useEffect } from 'react';
import { putFollowers } from 'services/API';

import { Tweets, Followers, FollowBtn, InfoContainer } from './UserInfo.styled';

export const UserInfo = ({ info, countFollowers }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    const storedIsFollowing = localStorage.getItem(`isFollowing_${info.id}`);
    if (storedIsFollowing) {
      setIsFollowing(JSON.parse(storedIsFollowing));
    }
  }, [info.id]);

  const handleFollowClick = async () => {
    const newIsFollowing = !isFollowing;
    setIsFollowing(newIsFollowing);
    localStorage.setItem(
      `isFollowing_${info.id}`,
      JSON.stringify(newIsFollowing)
    );

    try {
      const updatedData = await putFollowers({
        id: info.id,
        followers: info.followers,
        isFollowing: newIsFollowing,
      });

      countFollowers(updatedData);
    } catch (error) {
      console.error(error);
    }
  };

  const formatNumberWithComma = number => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <>
      <InfoContainer>
        <Tweets>{info.tweets} Tweets</Tweets>
        <Followers>{formatNumberWithComma(info.followers)} Followers</Followers>
        <FollowBtn
          type="button"
          onClick={handleFollowClick}
          isActive={isFollowing}
        >
          {isFollowing ? 'Following' : 'Follow'}
        </FollowBtn>
      </InfoContainer>
    </>
  );
};
