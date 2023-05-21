import styled from '@emotion/styled';

export const UserList = styled.ul`
  display: flex;
  padding: 0;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  list-style: none;
`;

export const Pagination = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: center;
`;

export const PreviousBtn = styled.button`
  width: 150px;
  height: 50px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-color: transparent;
  border-radius: 10.3108px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  color: #373737;

  :hover {
    background-color: #5cd3a8;
  }
`;

export const LoadMoreBtn = styled.button`
  width: 150px;
  height: 50px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-color: transparent;
  border-radius: 10.3108px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  color: #373737;

  :hover {
    background-color: #5cd3a8;
  }
`;
