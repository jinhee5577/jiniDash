/*eslint-disable*/
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

// Material Dashboard 2 React components
import MDTypography from "components/MDTypography";

export default function data(dummy) {
  const showTable = () => {
    return (
      dummy.map((item) => {
        return (
          {
            uid: (
              <MDTypography component="h4" variant="caption" color="text" fontWeight="medium">
                {item.uid}
              </MDTypography>
            ),
            model: (
              <MDTypography component="h4" variant="caption" color="text" fontWeight="medium">
                {item.model}
              </MDTypography>
            ),
            ip: (
              <MDTypography component="h4" variant="caption" color="text" fontWeight="medium">
                {item.ip}
              </MDTypography>
            ),
            customer: (
              <MDTypography component="h4" variant="caption" color="text" fontWeight="medium">
                {item.customer}
              </MDTypography>
            ),
            company: item.customer, // 따로 회사이름 보내자.
            status: (
              <MDTypography component="h4" variant="caption"
                style={{color: {
                  ok: "#1b6ee8",
                  error: "red",
                  warning: "#e7d442"
                }[item.state]}} fontWeight="medium"
              >
                {item.state}
              </MDTypography>
            ),
            reflash: (
              <MDTypography component="h4" variant="caption" color="text" fontWeight="medium">
                {item.reflash}
              </MDTypography>
            ),
          }
        );
      })
    );
  };

  return {
    columns: [
      { Header: "UID", accessor: "uid", width: "20%", align: "center" },
      { Header: "MODEL", accessor: "model", width: "20%", align: "center" },
      { Header: "IP", accessor: "ip", width: "20%", align: "center" },
      { Header: "고객사", accessor: "customer", width: "16%", align: "center" },
      { Header: "STATUS", accessor: "status", width: "10%", align: "center" },
      { Header: "REFLASH DATE", accessor: "reflash", width: "14%", align: "center" },
    ],

    rows: showTable() // 배열을 return 한다.
  };
}
