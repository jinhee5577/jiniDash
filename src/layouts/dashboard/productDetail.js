/*eslint-disable*/ 
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "./extra.css";
import { Nav, Table} from 'react-bootstrap';
import { CSSTransition, } from 'react-transition-group';
import axios from 'axios';



function Detail( props ){
    const navigate = useNavigate();  //  이제 history 라는 변수엔 큰 object {} 자료가 하나 저장이 되어있습니다.
                                //  그 object 안에는 페이지 이동 내역 + 유용한 함수가 저장되어있습니다.
    const { id } = useParams();                           
    const [show, showchan] = useState(false);
    const [find, SETfind] = useState({}); // 선택한 상품.
    const [hart, hartchan] = useState(0);       
    let [tabnum, tabnumchan] = useState(0);
    const [alert, alertchan] = useState(true);
    let [csstrn, csstrnchan] = useState(false);
    let [color_selec, setcolor_selec] = useState('');
    let [size_selec, setsize_selec] = useState(0);

    const postID = async () => {
       try{
         const { data } = await axios.post(`https://jini3d.du.r.appspot.com/product/${id}`);
         data['select'] = [color_selec, size_selec];
         SETfind(data);
       //  console.log(data);
       } catch(err) {
         console.log(err);
       }       
    };

    const goCart = () => { // 장바구니 이동시
      if(!localStorage.token){
        window.alert('로그인을 먼저해주세요.');
        return;
      }
      
    };

    useEffect(() => {                                       
      let timer = setTimeout(() => { alertchan(false) } , 2000);
      return () => { clearTimeout(timer); }
    }, []);
        
    useEffect(() => {
      postID();
    }, []);    

    function hartplus (){ hartchan( hart + 1 ); }
        
    return (find.title
            ? (
                <div className="container nct_j">
                <div className="row">
                  {alert ? <h3 className="aleat_t">재고가 얼마 남지 않았습니다.</h3> : null}                         
                  <div className="col-md-6 prod">
                    {/* <img src={ 'https://codingapple1.github.io/shop/shoes' + (find.id + 1) + '.jpg'  }  width="90%" /> */}
                    <img src={find.img}  width="90%" />
                  </div>
                  <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{ find.title } </h4>  
                    <div className="hart" onClick={hartplus} >💕{hart}</div>              
                    <p className="ppo">{ find.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }원</p> 
                    <p className='drb drb1' >혜택정보 :  카드무이자</p> 
                    <p className='drb'>적립금 :  <span className='p_m'>{find.price / 1000}</span>p 적립</p>         
                    <p className='drb drb3' >배송비 :  전상품 무료배송</p>                               
                  </div>
                </div>
                <div className="buybox">
                  <button className="btn btn-danger btnjin" onClick={() => { showchan(!show) }} >{show ? "닫기" : '구매하기'}</button> 
                  {/* <button className="btn btn-danger" onClick={ () => { history.goBack(); } } >뒤로가기</button>  */}
                  <button className="btn btn-danger btnjin" onClick={() => { 
                     navigate('/cart');
                   //  props.dispatch({ type : 'addcart', payload : find, payload2 : props.noticechan });
                  }}>장바구니</button> 
                </div>
                {show === true 
                 ? <div className="popup">                                                               
                     <select name='color' onChange={(e) => {setcolor_selec(e.target.value);}}>
                        {find.option.color.map((item, i) => {
                           return <option value={item} key={i} >{item}</option>;
                        })}                         
                     </select>
                     <select name='size' onChange={(e) => {setsize_selec(e.target.value);}}>
                        {find.option.size.map((item, i) => { 
                           return <option value={item} key={i}>{item}</option>;
                        })}                         
                     </select>
                     <div className="total"> 
                        <h3></h3>
                        <h3><span className="s1">합계 :</span><span className="s2">{find.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</span></h3>                            
                     </div>
                   </div>      
                : null     
                }
      
                <Nav variant="pills" defaultActiveKey="link-0">
                  <Nav.Item>
                  <Nav.Link eventKey="link-0" onClick={() => {csstrnchan(false); tabnumchan(0);}} >상품정보</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                  <Nav.Link eventKey="link-1" onClick={() => {csstrnchan(false); tabnumchan(1);} } >사이즈</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                  <Nav.Link eventKey="link-2" onClick={() => {csstrnchan(false); tabnumchan(2);}} >리 뷰</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                  <Nav.Link eventKey="link-3" onClick={() => {csstrnchan(false); tabnumchan(3);}} >교환/반품</Nav.Link>
                  </Nav.Item>               
                </Nav>
      
                <CSSTransition in={csstrn} classNames="wow" timeout={400} >            
                  <TabUI tabnum={tabnum} csstrnchan={csstrnchan} find={find} />
                </CSSTransition>     
              </div>
            )
            : null
    );
}

function TabUI (props){ 
  useEffect( () => {
    props.csstrnchan(true);  
  });
        
  if(props.tabnum === 0){
     return <div className="tab_con"> 
                <h4>DETAIL</h4>               
                <img src={props.find.img}  width="60%"/>
            </div>
  }else if( props.tabnum === 1 ){
    let size_copy = [...props.find.option.size];
    size_copy.shift();

    return (<div className="tab_con">
              <h4>CHOOSE MY SIZE</h4>   
              <Table striped bordered hover>                 
                <tbody>
                  <tr>
                    {size_copy.map((s, i) => {
                       return <th key={i}>{s}</th>;
                    })}                         
                  </tr>
                </tbody>                        
              </Table>
            </div>
    );       
  }else if( props.tabnum === 2 ){
     return <div className="tab_con">(준비중 입니다.)</div>
  }else if( props.tabnum === 3 ){
     return <div className="tab_con">교환/반품 준비중 입니다. from JHshop</div>
  }    
}  


export default Detail;