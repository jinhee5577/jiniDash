/*eslint-disable*/
import { configureStore, createSlice } from '@reduxjs/toolkit';

const userInfo = createSlice({ // Slice는 하나의 state를 뜻함.
    name: 'userInfo', // state이름
    initialState: {}, // state초기값
    reducers: {  // state변경함수들 이곳에
      getInfo(state, action) {
        return action.payload;
      },
    },
});

export let { getInfo } = userInfo.actions; // userInfo.actions안에 state변경함수들이 담긴 객체이다.


// 각해당 가져온 위험 에러 경고 서버
const eachDanger = createSlice({ // Slice는 하나의 state를 뜻함.
  name: 'eachDanger', // state이름
  initialState: {TEMPERATURE: "", VOLTAGE_SENSOR: "", NIC: "", CPU: "", RAM: "", DISK: "", SAS: "", SCC: "", SCSI: ""}, // state초기값
  reducers: {  // state변경함수들 이곳에
    changeDangerServer(state, action) {
      return action.payload;
    },
  },
});

export let { changeDangerServer } = eachDanger.actions;



export default configureStore({
    reducer: {
      userInfo: userInfo.reducer,
      eachDanger: eachDanger.reducer,
    }
});
