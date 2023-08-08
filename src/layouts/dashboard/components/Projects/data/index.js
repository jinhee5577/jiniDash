/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Tooltip from "@mui/material/Tooltip";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import "../extra.css";
import { dummy } from "./dummyData";
// import MDProgress from "components/MDProgress";


export default function data(stateColor, state, customer) {
  const avatars = (members) =>
    members.map(([image, name]) => (
      <Tooltip key={name} title={name} placeholder="bottom">
        <MDAvatar
          src={image}
          alt="name"
          size="xs"
          sx={{
            border: ({ borders: { borderWidth }, palette: { white } }) =>
              `${borderWidth[2]} solid ${white.main}`,
            cursor: "pointer",
            position: "relative",

            "&:not(:first-of-type)": {
              ml: -1.25,
            },

            "&:hover, &:focus": {
              zIndex: "10",
            },
          }}
        />
      </Tooltip>
    ));

  const Company = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDTypography variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  const dummyFilter = dummy.filter((data) => data.state === state);
  const filterMap = () => (
    dummyFilter.map((data) => {
      return { // 아마 table row 데이터들?
        ip: customer && data.ip, // ip번호 넘겨줄려구.
        companies: data.uid,
        members: (
          <MDBox display="flex" py={1} className="padding">
            {data.model}
          </MDBox>
        ),
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium" className="padding" ip={data.ip} >
            {data.ip}
          </MDTypography>
        ),
        completion: (
          <MDBox width="4rem" textAlign="center" color={stateColor} className="padding">
            {customer ? data.customer : data.state}
          </MDBox>
        ),
      };
    })
  );

  return {
    columns: [
      { Header: "uid", accessor: "companies", width: "28%", align: "center" },
      { Header: "MODEL", accessor: "members", width: "28%", align: "center" },
      { Header: "IP", accessor: "budget", width: "28%", align: "center" },
      { Header: (customer ? "고객사" : "STATE"), accessor: "completion", width: "16%", align: "center" },
    ],

    rows: filterMap(), // 배열이 return됨.
     
      // {
      //   companies: <Company image={logoInvesion} name="Redesign New Online Shop" />,
      //   members: (
      //     <MDBox display="flex" py={1}>
      //       {avatars([
      //         [team1, "Ryan Tompson"],
      //         [team4, "Jessica Doe"],
      //       ])}
      //     </MDBox>
      //   ),
      //   budget: (
      //     <MDTypography variant="caption" color="text" fontWeight="medium">
      //       $2,000
      //     </MDTypography>
      //   ),
      //   completion: (
      //     <MDBox width="8rem" textAlign="left">
      //       <MDProgress value={40} color="info" variant="gradient" label={false} />
      //     </MDBox>
      //   ),
      // },
  };
}
