import { useEffect, useState } from "react";
import { fetchedUsers } from "../../api/fetch-users";
import "./styles.scss";
import { Table, TableColumnType } from "antd";
import { Status } from "../status/staus";
import { UserDropDown } from "../user-dropDown/user-dropdown";
import { DropDown } from "../../assets";
import { FilterDropdown } from "../filter";

export const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    try {
      const getAllUsers = async () => {
        const storedUsers = localStorage.getItem("allUsers");
        const parsedData = storedUsers ? JSON.parse(storedUsers) : [];

        if (parsedData?.length === 0 || !parsedData) {
          // fetchusers
          const response = await fetchedUsers();
          setUsers(response);
        } else {
          setUsers(parsedData);
        }
      };

      getAllUsers();
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }, []);

  const filter_Dropdown = (): TableColumnType<userTableDataType> => ({
    filterDropdown: ({ close }) => (
      <FilterDropdown close={close} updateUsers={setUsers} />
    ),
    filterIcon: () => <DropDown />,
  });

  const columns: ColumnsType<userType> = [
    {
      title: "ORGANIZATION",
      dataIndex: "organization",
      key: 1,
      ...filter_Dropdown(),
      render: (value: string) => <p>{value}</p>,
    },
    {
      title: "NAME",
      dataIndex: "fullName",
      key: 2,
      ...filter_Dropdown(),

      render: (value: string) => (
        <p
          style={{
            whiteSpace: "nowrap",
          }}
        >
          {value}
        </p>
      ),
    },
    {
      title: "EMAIL",
      dataIndex: "email",
      key: 3,
      ...filter_Dropdown(),

      render: (value: string) => <p>{value}</p>,
    },
    {
      title: "PHONE NUMBER",
      dataIndex: "phoneNumber",
      key: 4,
      ...filter_Dropdown(),

      render: (value: string) => <p>{value}</p>,
    },
    {
      title: "DATE CREATED",
      dataIndex: "dateCreated",
      key: 5,
      ...filter_Dropdown(),

      render: (value: string) => (
        <p
          style={{
            whiteSpace: "nowrap",
          }}
        >
          {value}
        </p>
      ),
    },
    {
      title: "STATUS",
      dataIndex: "status",
      key: 6,
      ...filter_Dropdown(),

      render: (value: string) => <div>{<Status status={value} />}</div>,
    },
    {
      title: "",
      dataIndex: "userId",
      key: 7,
      render: (value: string) => <div>{<UserDropDown id={value} />}</div>,
    },
  ];

  return (
    <div className="table_wrapper">
      <div className="table_con">
        <Table
          className="table"
          loading={isLoading}
          columns={columns}
          dataSource={users}
        />
      </div>
    </div>
  );
};
