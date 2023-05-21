import axios from "axios";

axios.defaults.baseURL = "https://6465b01c228bd07b354ffee4.mockapi.io/";

export const fetchUsersData = async () => {
  try {
    const res = await axios.get("users");
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const putFollowers = async ({ id, followers, isFollowing }) => {
  try {
    const newFollowers = isFollowing ? followers + 1 : followers - 1;
    const res = await axios.put(`users/${id}`, {
      followers: newFollowers,
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};