import React, { useState, useEffect } from 'react';
import { fetchUsersData } from 'services/API';

import { UserCard } from 'components/UserCard/UserCard';
import {
  UserList,
  LoadMoreBtn,
  PreviousBtn,
  Pagination,
} from './UserCardList.styled';

export const UserCardList = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(() => 1);
  const [perPage] = useState(3);

  useEffect(() => {
    async function getUsers() {
      const res = await fetchUsersData();
      if (res === undefined) {
        return;
      }
      setUsers(res);
    }
    getUsers();

    const savedPage = localStorage.getItem('currentPage');
    if (savedPage) {
      setCurrentPage(parseInt(savedPage));
    }
  }, []);

  const saveCurrentPage = page => {
    setCurrentPage(page);
    localStorage.setItem('currentPage', page.toString());
  };

  const countFollowers = data => {
    setUsers(prevState => {
      prevState.splice(data.id - 1, 1, data);
      return prevState;
    });
  };

  const handleLoadMore = () => {
    saveCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    saveCurrentPage(currentPage - 1);
  };

  const indexOfLastUser = currentPage * perPage;
  const indexOfFirstUser = indexOfLastUser - perPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <>
      <UserList>
        {currentUsers.map(user => (
          <li key={user.id}>
            <UserCard info={user} countFollowers={countFollowers} />
          </li>
        ))}
      </UserList>
      <Pagination>
        {currentPage > 1 && (
          <PreviousBtn onClick={handlePreviousPage}>Previous Page</PreviousBtn>
        )}
        {users.length > indexOfLastUser && (
          <LoadMoreBtn onClick={handleLoadMore}>Load More</LoadMoreBtn>
        )}
      </Pagination>
    </>
  );
};
