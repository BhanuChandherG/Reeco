import styled from 'styled-components';

/* Header Styles */

export const HeaderContainer = styled.div`
  background-color: green;
  color: #fff;
  height: 4rem;
  display: flex;
  justify-content: center;
`;

export const Heading = styled.div`
  padding-left: 4rem;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const Lists = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 12px;
  padding-right: 32rem;
`;

export const ListItem = styled.li`
  padding-left: 42px;
`;

export const Cart = styled.div`
  padding: 2rem;
  padding-right: rem; // This seems to be a typo, please provide the correct value.
`;

export const Para = styled.div`
  padding: 1rem;
  margin-right: 2rem;
`;

/* ORDER DETAILS Styles */

export const OrderHeaderDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  box-shadow: 0, 0, #000;
  font-size: 12px;
`;

export const ParaUnderline = styled.div`
  border-bottom: 1px solid #000;
`;

export const OrderHeaderLowerSection = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
`;

export const OrderHeaderHeading = styled.div`
  font-size: 16px;
`;

export const BackButton = styled.button`
  color: green;
  font-weight: bold;
  background-color: #fff;
  border: solid 1.5px green;
  border-radius: 8px;
  margin: 12px;
`;

export const ApprovalButton = styled.button`
  color: #fff;
  background-color: green;
  border: solid 1.5px green;
  border-radius: 8px;
`;

export const OrderHeaderMain = styled.div`
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  margin: 1rem;
  padding: 12px;
`;

/* Order Details Styles */

export const OrderDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1rem;
  padding: 12px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
`;

export const OrderDetailsPara = styled.div`
  color: grey;
  font-size: 16px;
`;

export const OrderDetailsHeading = styled.div`
  font-size: 16px;
`;

/* SEARCH Styles */

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 2rem;
`;

export const SearchCont = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SearchIcon = styled.div`
  position: relative;
`;

export const SearchInput = styled.input`
  width: 482px;
  height: 40px;
  border: solid 1px;
  border-radius: 8px;
`;

export const AddItemButton = styled.button`
  color: green;
  font-weight: bold;
  background-color: #fff;
  border: solid 1.5px green;
  border-radius: 8px;
  margin: 12px;
`;

export const PrintIcon = styled.div`
  color: green;
  padding-right: 5rem;
`;

export const AddContainer = styled.div`
  display: flex;
`;

/* Main Content Styles */

export const MainHeading = styled.div`
  font-size: 16px;
  color: grey;
  font-weight: 400;
`;

export const MainTable = styled.div`
  margin: 12px;
`;

export const Image = styled.img`
  width: 40px;
`;

export const Status = styled.div`
  padding-left: 4rem;
`;

export const MainMatter = styled.div`
  color: grey;
  font-size: 14px;
`;

export const MainBody = styled.div`
  border: solid 1px gray;
  border-radius: 6px;
`;

export const Cross = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const StatusButton = styled.button`
  background-color: #fff;
  border: 0px;
`;

export const ApprovedButton = styled.button`
  background-color: #00ff62;
  color: black;
`;

export const MissingButton = styled.button`
  background-color: #ff6262;
  color: black;
`;
