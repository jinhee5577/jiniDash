/*eslint-disable*/

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
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import "./extra.css";

// Material Dashboard 2 React components
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import PieChart from "examples/Charts/PieChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";
import pieChartData from "./data/pieChartData";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";

function Dashboard() {
  const { sales, tasks } = reportsLineChartData;
  const [products_mlb, SETSetproducts_mlb] = useState([]);
  const [reference, SETreference] = useState([]);
  const [dangerData, SETdangerData] = useState([]);
  const navigate = useNavigate();
  const eachDanger = useSelector((state) => state.eachDanger);
  const offStorages = [{uid: "MSD12342O00S", ip: "121.135.236.254"}, {uid: "MSD12342O00S", ip: "121.135.236.254"}, {uid: "MSD12342O00S", ip: "121.135.236.254"}];

  const MLBproduct = async () => {
    const { data : { products } } = await axios.get("https://raw.githubusercontent.com/jinhee5577/allData/master/product.json");
    console.log(products);
    SETSetproducts_mlb(products);
    SETreference(products);
  };

  const test = async () => {
    try {
      // 서버에서 데이터 잘받아 오나 api테스트.
      const { data } = await axios.get("https://jinidash.du.r.appspot.com/apitest");
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const showOFFstorages = () => {
    return (
      offStorages.map((data, i) => {
        return (
          <MDBox display="flex" key={i} className="agent_row">
            <MDTypography fontWeight="light" fontSize="small" textAlign="center" display="inline-block" width="50%">
              {data.uid}
            </MDTypography>
            <MDTypography fontWeight="light" fontSize="small" textAlign="center" display="inline-block" width="50%">
              {data.ip}
            </MDTypography>
          </MDBox>
        );
      })
    );
  };

  const dangerDetail = () => {
     const arr = [];
     for(let key in eachDanger){
       // 리덕스에 저장된 danger,error 상세데이터 객체를 html로 표시해주기위해 html배열로 만들어준다.
       if(key == "ip" || key == "_id") {continue;}
       arr.push(
          <Grid item xs={7} md={1} lg={4} textAlign="center" className="space" key={key} >
            <MDTypography variant="caption" fontWeight="medium" display="inline-block" width="78%" className="sp1">
              {key}
            </MDTypography>
            <MDTypography variant="caption" color="text" display="inline-block" width="22%"
              className="sp2"
              backgroundColor={{
                error: "red",
                danger: "orange",
                warning: "yellow",
                ok: "#21abd2"
              }[eachDanger[key]]}
            >
            </MDTypography>
          </Grid>
       );
     }
     // 완성된 배열을 state에 넣어준다.
     SETdangerData(arr);
  };

  useEffect(() => {
    // 리덕스에서 가져온 eachDanger 스테이트가 변경될때마다 렌더링 해주는 함수 실행시킨다.
    dangerDetail();
  }, [eachDanger]);

  useEffect(() => {
    MLBproduct();
    test();
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="info"
                icon="weekend"
                title="STORAGES"
                count={281}
                percentage={{
                  color: "success",
                  amount: "",
                  label: "",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="warning"
                icon="leaderboard"
                title="WARNING"
                count="2,300"
                percentage={{
                  color: "success",
                  amount: "+3%",
                  label: "than last month",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="store"
                title="DANGER"
                count="34k"
                percentage={{
                  color: "success",
                  amount: "+1%",
                  label: "than yesterday",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="error"
                icon="person_add"
                title="ERROR"
                count="2"
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Just updated",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="person_add"
                title="OFF"
                count="2"
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Just updated",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="secondary"
                icon="person_add"
                title="TRAFFIC"
                count="55"
                percentage={{
                  color: "success",
                  amount: "",
                  label: "",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="info"
                  title="장비 종류별 장애 추이"
                  description=""
                  date="campaign sent 2 days ago"
                  chart={reportsBarChartData}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <PieChart
                  title="장애 유형별 % 파이 차트"
                  description={
                    <>
                      (<strong>+15%</strong>) increase in today sales.
                    </>
                  }
                  height="11.5rem"
                  chart={pieChartData}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="completed tasks"
                  description=""
                  date="just updated"
                  chart={tasks}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>

        <MDBox>
          <Grid container spacing={3} className="main-table">
            <Grid item xs={12} md={6} lg={8}>
              <Projects name="NEW / ADD STORAGES" stateColor="green" state="ok" />
            </Grid>
            <Grid item xs={12} md={6} lg={8}>
              <Projects name="ERROR | DANGER | WARNING" stateColor="green" state="off" customer={true} />
            </Grid>
            <Grid item xs={12} md={6} lg={8}>
              <Projects name="OFF STORAGES" stateColor="red" state="off" />
            </Grid>
            <Grid item xs={12} md={6} lg={8} >
              <MDBox className="cpu" >
                <MDBox>
                  <Grid container spacing={4} className="graph">
                    {/* 상세 error, danger, warning 데이터 html배열 state다. */}
                    {dangerData}
                  </Grid>
                </MDBox>
                <Card id="agent" >
                  {/* AGENT HEALTH */}
                  <MDBox display="flex" justifyContent="space-between" p={2.2}>
                    <MDBox>
                      <MDTypography variant="h6" gutterBottom>
                        AGENT HEALTH
                      </MDTypography>
                    </MDBox>
                  </MDBox>
                  <MDBox display="flex" justifyContent="space-between" mt={2.5} id="agent_health">
                    <MDBox mb={1.5} width="27%">
                      <ComplexStatisticsCard
                        color="success"
                        icon="weekend"
                        title="ACTIVE"
                        count={15623}
                        percentage={{
                          color: "success",
                          amount: "",
                          label: "",
                        }}
                      />
                    </MDBox>
                    <MDBox mb={1.5} width="27%">
                      <ComplexStatisticsCard
                        color="error"
                        icon="weekend"
                        title="OFF"
                        count={3}
                        percentage={{
                          color: "success",
                          amount: "",
                          label: "",
                        }}
                      />
                    </MDBox>
                    <MDBox mb={1.5} width="44.5%">
                      {/* 테그배열을 return 해준다. */}
                      {showOFFstorages()}
                    </MDBox>
                  </MDBox>
                </Card>
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        
        {/* 상품 */}
        <MDBox pt={2} px={2} lineHeight={1.25} mt={4} >
          <MDTypography variant="h2" fontWeight="medium" className="title">
            이번주 신상품
          </MDTypography>
        </MDBox>
        <MDBox p={2}>
          <Grid container spacing={6}>
            {products_mlb.map((item, i) => {
               return (
                 <Grid item xs={12} md={6} xl={3} key={i} onClick={() => {navigate(`/detail/${item.id}`);}}>
                  <DefaultProjectCard
                    image={item.img}
                    label={item.title}
                    title={`${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`}
                    description=""
                    action={{
                      type: "internal",
                      route: "/pages/profile/profile-overview",
                      color: "info",
                      label: "구매 하기",
                    }}
                  />
                </Grid>
               );
            })}
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
