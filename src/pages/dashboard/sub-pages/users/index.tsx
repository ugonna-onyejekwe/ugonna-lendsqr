import "./styles.scss";
import { userDivisionData } from "../../../../mockup-data/user-division-data";
import { UsersTable } from "../../../../components/user-table";

export const UsersPage = () => {
  return (
    <section className="users_section">
      <h2>users</h2>
      <div className="box_con">
        {userDivisionData.map((i, key) => {
          return (
            <div className="box" key={key}>
              <div className="icon_con">{<i.icon fill={i.icon_color} />}</div>
              <p>{i.name}</p>
              <h3>{i.number}</h3>
            </div>
          );
        })}
      </div>

      {/* Users table */}
      <UsersTable />
    </section>
  );
};
