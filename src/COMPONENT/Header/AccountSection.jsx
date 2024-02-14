import { IoIosLogOut } from "react-icons/io";
import { TbPasswordFingerprint } from "react-icons/tb";
import { FaShoppingCart } from "react-icons/fa";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useCartId } from "../../Context";
import { useLogout } from "../../authentication/useLogout";
import Spinner from "../Spinner";
const Ul = styled.ul``;
const Li = styled.li`
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
  border-radius: 50px;
  display: inline-block;
  color: #bc97e0;
  margin: 0 2rem;
`;

function AccountSection() {
  const { currentId } = useCartId();
  const { logout, isLoading } = useLogout();
  if (isLoading) return <Spinner />;
  return (
    <nav>
      <Ul>
        <Li>
          <Link onClick={logout}>
            <IoIosLogOut className="w-7 h-7" />
          </Link>
        </Li>
        <Li>
          <Link to="/updateAccount">
            <TbPasswordFingerprint className="w-7 h-7" />
          </Link>
        </Li>
        <Li>
          <Link to={`/checkout/${currentId}`}>
            <FaShoppingCart className="w-7 h-7" />
          </Link>
        </Li>
      </Ul>
    </nav>
  );
}

export default AccountSection;
