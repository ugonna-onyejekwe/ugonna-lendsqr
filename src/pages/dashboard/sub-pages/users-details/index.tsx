import "./styles.scss";
import { Link, useParams } from "react-router-dom";
import { Back_arrow } from "../../../../assets";
import { LuUser2 } from "react-icons/lu";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useState } from "react";

export const UsersDetailsPage = () => {
  const { id } = useParams();
  const [active, setActive] = useState(false);

  const getUsers = localStorage.getItem("allUsers");

  const users = JSON.parse(getUsers ? getUsers : "");

  const user: userType = users.find((i: userType) => i.userId === id);

  console.log(user);
  return (
    <section className="user_details_Page">
      <div className="back_btn">
        <Link to={"/dashboard/users"}>
          {" "}
          <span>
            <Back_arrow />
          </span>
          back to users
        </Link>
      </div>

      <div className="heading">
        <h3>user details</h3>

        <div className="btns">
          <button>blackList User</button>
          <button>active user</button>
        </div>
      </div>

      <div className="user_header">
        <div
          className="dot_menu_btn"
          onClick={(e) => {
            const menu_btn = e.target;
            window.addEventListener("click", (event) => {
              event.target !== menu_btn ? setActive(false) : null;
            });
            setActive(!active);
          }}
        >
          <HiOutlineDotsVertical />
        </div>
        <div className="wrapper">
          <div className="avatar_section box">
            <div className="avatar">
              <LuUser2 />
            </div>
            <div className="txt">
              <h3>{user.fullName}</h3>
              <p>{user.userId.slice(0, 10)}</p>
            </div>
          </div>

          <div className="tier_section box">
            <h4>user's tier</h4>
            <span></span>
          </div>

          <div className="acct_bal_section  box">
            <h3>${user.acctBalance}</h3>
            <p>
              <span>{user.accountNumber}</span>/<span>{user.bank}</span>
            </p>
          </div>
        </div>
        <div className={active ? "nav active" : "nav"}>
          <p className="active">general details</p>
          <p>documents</p>
          <p>bank details</p>
          <p>loan</p>
          <p>savings</p>
          <p>app and system</p>
        </div>
      </div>

      <div className="info_section">
        <section>
          <h4>personal information</h4>
          <div className="box_con">
            <div className="box">
              <span>full name</span>
              <p>{user.fullName}</p>
            </div>
            <div className="box">
              <span>phone</span>
              <p>{user.phoneNumber}</p>
            </div>
            <div className="box">
              <span>email address</span>
              <p>{user.email}</p>
            </div>
            <div className="box">
              <span>bvn</span>
              <p>{user.bvn}</p>
            </div>
            <div className="box">
              <span>gender</span>
              <p>{user.gender}</p>
            </div>
            <div className="box">
              <span>marital status</span>
              <p>{user.maritalStatus}</p>
            </div>
            <div className="box">
              <span>children</span>
              <p>{user.childern}</p>
            </div>
          </div>
        </section>

        <section>
          <h4>education and employment</h4>
          <div className="box_con">
            <div className="box">
              <span>level of education</span>
              <p>{user.levelOfEducation}</p>
            </div>
            <div className="box">
              <span>emplayment status</span>
              <p>{user.employmentStatus}</p>
            </div>
            <div className="box">
              <span>sector of employment</span>
              <p>{user.sectionOfEmployment}</p>
            </div>
            <div className="box">
              <span>duration of employment</span>
              <p>{user.durationOfEmployment}</p>
            </div>
            <div className="box">
              <span>office email</span>
              <p>{user.officialMail}</p>
            </div>
            <div className="box">
              <span>monthly incone</span>
              <p>
                {user.monthlyIncome.min} - {user.monthlyIncome.max}
              </p>
            </div>
            <div className="box">
              <span>loan repayment</span>
              <p>{user.loanRepayment}</p>
            </div>
          </div>
        </section>

        <section>
          <h4>socails</h4>
          <div className="box_con">
            <div className="box">
              <span>twitter</span>
              <p>{user.twitterHandle}</p>
            </div>
            <div className="box">
              <span>facebook</span>
              <p>{}</p>
            </div>

            <div className="box">
              <span>instagram</span>
              <p>{user.instaHandle}</p>
            </div>
          </div>
        </section>

        <section className="gurantors">
          <h4>guarantor</h4>

          {user.guarantors.map((guarantor, key) => {
            return (
              <article key={key}>
                <div className="box_con">
                  <div className="box">
                    <span>full name</span>
                    <p>{guarantor.fullName}</p>
                  </div>
                  <div className="box">
                    <span>phone number</span>
                    <p>{guarantor.phoneNumber}</p>
                  </div>

                  <div className="box">
                    <span>email address</span>
                    <p>{guarantor.email}</p>
                  </div>
                  <div className="box">
                    <span>relationship</span>
                    <p>{guarantor.relationship}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </section>
      </div>
    </section>
  );
};
