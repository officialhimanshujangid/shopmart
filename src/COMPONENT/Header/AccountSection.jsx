import { MdAccountCircle } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Ul = styled.ul``;
const Li = styled.li`
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
  border-radius: 50px;
  display: inline-block;
  color: #bc97e0;
  margin: 0 2rem;
`;

function AccountSection() {
  return (
    <nav>
      <Ul>
        <Li>
          <Link to="/login">
            <MdAccountCircle className="w-7 h-7" />
          </Link>
        </Li>
        <Li>
          <Link to="/createuser">
            <IoSettingsSharp className="w-7 h-7" />
          </Link>
        </Li>
        <Li>
          <Link>
            <FaShoppingCart className="w-7 h-7" />
          </Link>
        </Li>
      </Ul>
    </nav>
  );
}

export default AccountSection;
