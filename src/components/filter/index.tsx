import { useEffect, useState } from "react";
import "./styles.scss";

export const FilterDropdown = ({ updateUsers }: { updateUsers: any }) => {
  const [users, setUsers] = useState<userType[]>([]);
  const [filters, setFilters] = useState({
    name: "",
    email: "",
    organization: "",
    date: "",
    phoneNumber: "",
    status: "",
  });

  useEffect(() => {
    const getUsers = () => {
      const storedUsers = localStorage.getItem("allUsers");
      setUsers(storedUsers ? JSON.parse(storedUsers) : []);
    };

    getUsers();
  }, []);

  const handleFilter = () => {
    let filteredUsers: userType[] = [];

    if (filters.organization) {
      const result =
        filteredUsers.length === 0
          ? users.filter((i) =>
              i.organization
                .toLocaleLowerCase()
                .startsWith(filters.organization.toLocaleLowerCase())
            )
          : filteredUsers.filter((i) =>
              i.organization
                .toLocaleLowerCase()
                .startsWith(filters.organization.toLocaleLowerCase())
            );

      filteredUsers.length === 0
        ? console.log("used users array O")
        : console.log("used noral O");
      filteredUsers = result;
    }

    if (filters.name) {
      const result =
        filteredUsers.length === 0
          ? users.filter((i) =>
              i.fullName
                .toLocaleLowerCase()
                .startsWith(filters.name.toLocaleLowerCase())
            )
          : filteredUsers.filter((i) =>
              i.fullName
                .toLocaleLowerCase()
                .startsWith(filters.name.toLocaleLowerCase())
            );

      filteredUsers.length === 0
        ? console.log("used users array N")
        : console.log("used noral N");
      filteredUsers = result;
    }

    if (filters.email) {
      const result =
        filteredUsers.length === 0
          ? users.filter((i) =>
              i.email
                .toLocaleLowerCase()
                .startsWith(filters.email.toLocaleLowerCase())
            )
          : filteredUsers.filter((i) =>
              i.email
                .toLocaleLowerCase()
                .startsWith(filters.email.toLocaleLowerCase())
            );

      filteredUsers.length === 0
        ? console.log("used users array E")
        : console.log("used noral E");
      filteredUsers = result;
    }

    if (filters.phoneNumber) {
      const result =
        filteredUsers.length === 0
          ? users.filter((i) => i.phoneNumber.startsWith(filters.phoneNumber))
          : filteredUsers.filter((i) =>
              i.phoneNumber.startsWith(filters.phoneNumber)
            );

      filteredUsers.length === 0
        ? console.log("used users array P")
        : console.log("used noral P");
      filteredUsers = result;
    }

    if (filters.status) {
      const result =
        filteredUsers.length === 0
          ? users.filter((i) =>
              i.status
                .toLocaleLowerCase()
                .startsWith(filters.status.toLocaleLowerCase())
            )
          : filteredUsers.filter((i) =>
              i.status
                .toLocaleLowerCase()
                .startsWith(filters.status.toLocaleLowerCase())
            );

      filteredUsers.length === 0
        ? console.log("used users array S")
        : console.log("used noral S");

      filteredUsers = result;
    }

    // console.log(filteredUsers, "filtered");
    updateUsers(filteredUsers);
    filteredUsers = [];
  };

  return (
    <div className="filter_con">
      <div className="box_con">
        <div className="box">
          <label htmlFor="organization">organization</label>
          <select
            id="organization"
            onChange={(e) =>
              setFilters({ ...filters, organization: e.target.value })
            }
          >
            <option value="organization">organization</option>
          </select>
        </div>

        <div className="box">
          <label htmlFor="username">username</label>
          <input
            type="text"
            id="username"
            onChange={(e) => setFilters({ ...filters, name: e.target.value })}
            placeholder="User"
          />
        </div>

        <div className="box">
          <label htmlFor="email">email</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setFilters({ ...filters, email: e.target.value })}
            placeholder="Email"
          />
        </div>

        <div className="box">
          <label htmlFor="date">date</label>
          <input
            type="date"
            id="date"
            onChange={(e) => setFilters({ ...filters, date: e.target.value })}
            placeholder="Date"
          />
        </div>

        <div className="box">
          <label htmlFor="phone">phone number</label>
          <input
            type="number"
            onChange={(e) =>
              setFilters({ ...filters, phoneNumber: e.target.value })
            }
            id="phone"
            placeholder="Phone Number"
          />
        </div>

        <div className="box">
          <label htmlFor="status">status</label>
          <select
            id="status"
            onChange={(e) => {
              setFilters({ ...filters, status: e.target.value });
            }}
          >
            <option value="pending">pending</option>
            <option value="active">active</option>
            <option value="inactive">inactive</option>
            <option value="blacklisted">blacklisted</option>
          </select>
        </div>
      </div>

      <div className="btns">
        <button>reset</button>
        <button onClick={handleFilter}>filter</button>
      </div>
    </div>
  );
};
