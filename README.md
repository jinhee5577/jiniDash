# jiniDash
### React와 material-dashboard템플릿을 활용하여 관리자페이지 백오피스 개발중입니다.

<p align="center">
  <img width="950" alt="img1" src="https://github.com/jinhee5577/jiniDash/assets/82584287/3d6e3bbe-f10d-40a6-89ea-cc8995dd6621">
</p>

<p align="center">
  <img width="950" alt="img3" src="https://github.com/jinhee5577/jiniDash/assets/82584287/1458a92f-230f-481f-8dd6-b672f7c265a9">
</p>

<p align="center">
  <img width="950" alt="img2" src="https://github.com/jinhee5577/jiniDash/assets/82584287/ccaf3ca8-9363-4b2b-8dda-990f9965d465">
</p>


개발중인 [jiniDash]프로젝트는 React와 Node.js, express, MongoDB를 이용한 관리자 페이지 백오피스를
개발 중입니다. 간단한 기획서를 바탕으로 React와 react 대시보드 템플릿을 활용하여 기획에 구성된
Front-end단에 맞춰 제공되는 컴포넌트를 제가 원하는 방향으로 모두 수정하고 일치하게 개발 하였으며
Node.js, express를 활용해서 만든 서버에서는 Front단에서 요청한 데이터를 처리해 주도록 개발 되었습니다.
express로 만든 서버에서는 백오피스 관련 데이터가 저장된 MongoDB에서 쿼리문에 맞춰 가져온 결과를
다시 Front-end에 전송해 주도록 RESTapi를 개발 하였습니다.

그 후 구글 클라우드에 연동하여 사이트를 배포 하였지만 로컬에서 개발한 프론트 화면이 배포를 한 사이트의
프론트 화면과 달라서 수정을 진행 중입니다.

#### 진행 기간 및 규모 : 2023년 06월 ~ 2023년 현재진행중, 개발 1명(본인).
#### 사용 기술 : React, Redux, Javascript, Node.js, express, MongoDB, kakao Login, react-material-dashboard.
#### 배포  : Google Cloud

성과 : react-material-dashboard를 이용하여 제공된 컴포넌트를 파악하고 제가 계획했던 방향으로 수정하며
빠르게 UI와 프론트 엔드를 개발할수 있는 방법을 습득 했습니다.
공부했던 Node.js, express로 간단한 RESTapi요청을 처리해줄수 있는 서버를 직접 만들어 서버와 통신 원리를
이해하고 공부할 수 있었습니다. 또한 다른 프로젝트에서 openAPI를 이용하여 발생했던 CORS에러를 해결하고자
Front-end에서 query string에 정보를 넣어 요청을 보내면 이곳 서버에서 요청을 받아 서버에서 직접 openAPI를
처리하여 받은 결과를 다시 Front-end로 전송해 주어 CORS에러를 해결 할 수 있었습니다.


## Table of Contents

- [Versions](#versions)
- [Demo](#demo)
- [Quick Start](#quick-start)
- [Documentation](#documentation)
- [File Structure](#file-structure)
- [Browser Support](#browser-support)
- [Resources](#resources)
- [Reporting Issues](#reporting-issues)
- [Technical Support or Questions](#technical-support-or-questions)
- [Licensing](#licensing)
- [Useful Links](#useful-links)

## Versions

[<img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react-logo.png?raw=true" width="60" height="60" />](https://www.creative-tim.com/product/material-dashboard-react?ref=readme-mdr)

| React |
| ----- |

| [![Material Dashboard React](https://s3.amazonaws.com/creativetim_bucket/products/71/thumb/material-dashboard-react.jpg?1638950990)](http://demos.creative-tim.com/material-dashboard-react/#/dashboard?ref=readme-mdr)

## Demo

- [Dashboard](http://demos.creative-tim.com/material-dashboard-react/#/dashboard?ref=readme-sudr)
- [Profile](https://demos.creative-tim.com/material-dashboard-react/#/profile?ref=readme-sudr)
- [RTL](https://demos.creative-tim.com/material-dashboard-react/#/rtl?ref=readme-sudr)
- [Sign In](https://demos.creative-tim.com/material-dashboard-react/#/authentication/sign-in?ref=readme-sudr)
- [Sign Up](https://demos.creative-tim.com/material-dashboard-react/#/authentication/sign-up?ref=readme-sudr)

[View More](https://demos.creative-tim.com/material-dashboard-react/#/dashboard?ref=readme-mdr).

## Quick start

Quick start options:

- Download from [Creative Tim](https://www.creative-tim.com/product/material-dashboard-react?ref=readme-mdr).

## Terminal Commands

1. Download and Install NodeJs LTS version from [NodeJs Official Page](https://nodejs.org/en/download/).
2. Navigate to the root ./ directory of the product and run `yarn install` or `npm install` to install our local dependencies.

## Documentation

The documentation for the Material Dashboard is hosted at our [website](https://www.creative-tim.com/learning-lab/react/overview/material-dashboard/?ref=readme-mdr).

### What's included

Within the download you'll find the following directories and files:

```
material-dashboard-react
    ├── public
    │   ├── apple-icon.png
    │   ├── favicon.png
    │   ├── index.html
    │   ├── manifest.json
    │   └── robots.txt
    ├── src
    │   ├── assets
    │   │   ├── images
    │   │   └── theme
    │   │       ├── base
    │   │       ├── components
    │   │       ├── functions
    │   │       ├── index.js
    │   │       └── theme-rtl.js
    │   │   └── theme-dark
    │   │       ├── base
    │   │       ├── components
    │   │       ├── functions
    │   │       ├── index.js
    │   │       └── theme-rtl.js
    │   ├── components
    │   │   ├── MDAlert
    │   │   ├── MDAvatar
    │   │   ├── MDBadge
    │   │   ├── MDBox
    │   │   ├── MDButton
    │   │   ├── MDInput
    │   │   ├── MDPagination
    │   │   ├── MDProgress
    │   │   ├── MDSnackbar
    │   │   └── MDTypography
    │   ├── context
    │   ├── examples
    │   │   ├── Breadcrumbs
    │   │   ├── Cards
    │   │   ├── Charts
    │   │   ├── Configurator
    │   │   ├── Footer
    │   │   ├── Items
    │   │   ├── LayoutContainers
    │   │   ├── Lists
    │   │   ├── Navbars
    │   │   ├── Sidenav
    │   │   ├── Tables
    │   │   └── Timeline
    │   ├── layouts
    │   │   ├── authentication
    │   │   ├── billing
    │   │   ├── dashboard
    │   │   ├── notifications
    │   │   ├── profile
    │   │   ├── rtl
    │   │   └── tables
    │   ├── App.js
    │   ├── index.js
    │   └── routes.js
    ├── .eslintrc.json
    ├── .prettierrc.json
    ├── CHANGELOG.md
    ├── ISSUE_TEMPLATE.md
    ├── jsconfig.json
    ├── LICENSE.md
    ├── package.json
    └── README.md
```

## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

<img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/chrome.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/firefox.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/edge.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/safari.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/opera.png" width="64" height="64">

## Resources

- [Live Preview](https://demos.creative-tim.com/material-dashboard-react/#/dashboard?ref=readme-mdr)
- [Download Page](https://www.creative-tim.com/product/material-dashboard-react?ref=readme-mdr)
- Documentation is [here](https://www.creative-tim.com/learning-lab/react/overview/material-dashboard/?ref=readme-mdr)
- [License Agreement](https://www.creative-tim.com/license?ref=readme-mdr)
- [Support](https://www.creative-tim.com/contact-us?ref=readme-mdr)
- Issues: [Github Issues Page](https://github.com/creativetimofficial/material-dashboard-react/issues)
- [Nepcha Analytics](https://nepcha.com?ref=readme) - Analytics tool for your website

## Reporting Issues

We use GitHub Issues as the official bug tracker for the Material Dashboard React. Here are some advices for our users that want to report an issue:

1. Make sure that you are using the latest version of the Material Dashboard React. Check the CHANGELOG from your dashboard on our [website](https://www.creative-tim.com/product/material-dashboard-react?ref=readme-mdr).
2. Providing us reproducible steps for the issue will shorten the time it takes for it to be fixed.
3. Some issues may be browser specific, so specifying in what browser you encountered the issue might help.


## Useful Links

- [More products](https://www.creative-tim.com/templates?ref=readme-mdr) from Creative Tim

- [Tutorials](https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w)

- [Freebies](https://www.creative-tim.com/bootstrap-themes/free?ref=readme-mdr) from Creative Tim

- [Affiliate Program](https://www.creative-tim.com/affiliates/new?ref=readme-mdr) (earn money)
