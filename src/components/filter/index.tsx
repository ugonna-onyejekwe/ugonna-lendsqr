import { useEffect, useState } from "react";
import "./styles.scss";

export const FilterDropdown = ({
  updateUsers,
  close,
}: {
  updateUsers: any;
  close: () => void;
}) => {
  const initInputs: FiltersInputType = {
    name: "",
    email: "",
    organization: "",
    date: "",
    phoneNumber: "",
    status: "",
  };
  const [users, setUsers] = useState<userType[]>([]);
  const [filters, setFilters] = useState<FiltersInputType>(initInputs);

  useEffect(() => {
    const getUsers = () => {
      const storedUsers = localStorage.getItem("allUsers");
      setUsers(storedUsers ? JSON.parse(storedUsers) : []);
    };

    getUsers();
  }, []);

  const handleFilter = () => {
    let filteredUsers: userType[] = [];

    if (
      !filters.name &&
      !filters.email &&
      !filters.organization &&
      !filters.date &&
      !filters.phoneNumber &&
      !filters.status
    ) {
      alert("yes");
      filteredUsers = users;
    }

    const getFilterSource = () => {
      return filteredUsers.length === 0 ? users : filteredUsers;
    };

    if (filters.organization) {
      const filterSource = getFilterSource();

      const result = filterSource.filter((i) =>
        i.organization
          .toLocaleLowerCase()
          .startsWith(filters.organization.toLocaleLowerCase())
      );

      filteredUsers = result;
    }

    if (filters.name) {
      const filterSource = getFilterSource();

      const result = filterSource.filter((i) =>
        i.fullName
          .toLocaleLowerCase()
          .startsWith(filters.name.toLocaleLowerCase())
      );

      filteredUsers = result;
    }

    if (filters.email) {
      const filterSource = getFilterSource();

      const result = filterSource.filter((i) =>
        i.email
          .toLocaleLowerCase()
          .startsWith(filters.email.toLocaleLowerCase())
      );

      filteredUsers = result;
    }

    if (filters.date) {
      alert(filters.date);
    }

    if (filters.phoneNumber) {
      const filterSource = getFilterSource();

      const result = filterSource.filter((i) =>
        i.phoneNumber
          .toLocaleLowerCase()
          .startsWith(filters.phoneNumber.toLocaleLowerCase())
      );

      filteredUsers = result;
    }

    if (filters.status) {
      const filterSource = getFilterSource();

      const result = filterSource.filter((i) =>
        i.status
          .toLocaleLowerCase()
          .startsWith(filters.status.toLocaleLowerCase())
      );

      filteredUsers = result;
    }

    updateUsers(filteredUsers);
    filteredUsers = [];
    setFilters(initInputs);
    close();
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
            <option value="" selected disabled>
              select
            </option>
            <option value="organization">organization</option>
          </select>
        </div>

        <div className="box">
          <label htmlFor="username">username</label>
          <input
            type="text"
            id="username"
            value={filters.name}
            onChange={(e) => setFilters({ ...filters, name: e.target.value })}
            placeholder="User"
          />
        </div>

        <div className="box">
          <label htmlFor="email">email</label>
          <input
            type="email"
            id="email"
            value={filters.email}
            onChange={(e) => setFilters({ ...filters, email: e.target.value })}
            placeholder="Email"
          />
        </div>

        <div className="box">
          <label htmlFor="date">date</label>
          <input
            type="datetime-local"
            id="date"
            value={filters.date}
            onChange={(e) => setFilters({ ...filters, date: e.target.value })}
            placeholder="Date"
          />
        </div>

        <div className="box">
          <label htmlFor="phone">phone number</label>
          <input
            type="number"
            value={filters.phoneNumber}
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
            <option value="" selected disabled>
              select
            </option>
            <option value="pending">pending</option>
            <option value="active">active</option>
            <option value="inactive">inactive</option>
            <option value="blacklisted">blacklisted</option>
          </select>
        </div>
      </div>

      <div className="btns">
        <button
          onClick={() => {
            close();
            setFilters(initInputs);
          }}
        >
          reset
        </button>
        <button
          onClick={() => {
            handleFilter();
          }}
        >
          filter
        </button>
      </div>
    </div>
  );
};
