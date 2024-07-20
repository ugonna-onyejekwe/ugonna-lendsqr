import axios from "axios";

export const fetchedUsers = async () => {
  try {
    let res = await axios.get(
      `https://api.json-generator.com/templates/2k76UKLOIc4c/data?access_token=${
        import.meta.env.VITE_API_ACCESS_TOKEN
      }`
    );
    const stringifyUsers = JSON.stringify(res.data);
    localStorage.setItem("allUsers", stringifyUsers);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
