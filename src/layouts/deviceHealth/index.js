/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "./extra.css";
import axios from 'axios';
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";

// Material Dashboard 3 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";

// Material Dashboard 3 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Custom styles for DashboardNavbar
import { navbarIconButton } from "examples/Navbars/DashboardNavbar/styles";

// Data
import deviceLineChartData from "./data/deviceLineChartData";
import healthTableData from "./data/healthTableData";
import { dummy } from './data/dummyData';


function DeviceHealth() {
   const { columns, rows } = healthTableData(dummy);

   return (
     <DashboardLayout>
       <DashboardNavbar />
        <MDBox p={2} >
         <MDTypography variant="h5" color="dark" width="100%">
           POWER SUPPLY STATISTICS
         </MDTypography>
         <Grid container spacing={3} mt={2} justifyContent="space-around">
          <Grid item xs={9} md={3} lg={2.2}>
            <MDBox mb={3.5}>
              <ComplexStatisticsCard
                color="info"
                icon="weekend"
                title="STORAGES"
                count={383}
                percentage={{
                  color: "success",
                  amount: "",
                  label: "",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={9} md={3} lg={2.2}>
            <MDBox mb={3.5}>
              <ComplexStatisticsCard
                color="warning"
                icon="leaderboard"
                title="WARNING"
                count="3,300"
                percentage={{
                  color: "success",
                  amount: "+3%",
                  label: "than last month",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={9} md={3} lg={2.2}>
            <MDBox mb={3.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="store"
                title="DANGER"
                count="34k"
                percentage={{
                  color: "success",
                  amount: "+3%",
                  label: "than yesterday",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={9} md={3} lg={2.2}>
            <MDBox mb={3.5}>
              <ComplexStatisticsCard
                color="error"
                icon="person_add"
                title="ERROR"
                count="3"
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Just updated",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={9} md={3} lg={2.2}>
            <MDBox mb={3.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="person_add"
                title="OFF"
                count="3"
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Just updated",
                }}
              />
            </MDBox>
          </Grid>
         </Grid>

         {/* 라인 그래프 */}
         <MDBox mb={3} id="deviceLinechart">
          <ReportsLineChart
            color="success"
            title=""
            description=""
            date=""
            chart={deviceLineChartData}
          />
          <MDBox pr={1} mt={2.5} id="deviceSearch">
            <MDInput label="UUID, 회사명, DVICE NAME, MODEL, IP, STATUS" />
            <IconButton
              className="searchIcon"
              size="small"
              disableRipple
              color="inherit"
              sx={navbarIconButton}
              aria-controls="notification-menu"
              aria-haspopup="true"
              variant="contained"
              onClick={() => {}}
              att="t1"
            >
              <Icon>search</Icon>
            </IconButton>
          </MDBox>

          <Card id="deviceTable">
            <MDBox
              mx={1}
              mt={1}
              p={1.3}
              variant="gradient"
              bgColor="dark"
              borderRadius="lg"
              coloredShadow="info"
            >
            <MDTypography variant="h6">
              SEARCH RESULT
            </MDTypography>
            </MDBox>
            <MDBox pt={1}>
              <DataTable
                table={{ columns, rows }}
                isSorted={false}
                entriesPerPage={false}
                showTotalEntries={false}
                noEndBorder
                health={true}
              />
            </MDBox>
          </Card>
         </MDBox>
        </MDBox>
        <Footer />
     </DashboardLayout>
   );
};


export default DeviceHealth;