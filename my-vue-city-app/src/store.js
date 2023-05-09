// 뷰엑스 스토어 - 전역뷰데이터 저장소!

import Vue from 'vue';
import Vuex from 'vuex';
import 'babel-polyfill';
import {myD0, myD1, myD2} from './jsData/cityData';

// Vuex 라이브러리를 Vue 프레임워크에서 사용하려면?
// Vue.use(Vuex) -> 뷰에서 뷰엑스 사용등록 필수
Vue.use(Vuex);

/*********************************************************** 

    [ SPA 개발 환경에서 store를 내보낸 후 사용 시 주의사항 ]

    -> vue 확장자 파일에서 이를 사용 시 일반 변수와 같이
    store라고 호출하면 에러 발생함

        ※ 왜? 일반 js파일이 아니기 때문
    
    -> 때문에 this.$store라고 호출해야 함
        - this: 뷰 인스턴스 객체 자신
        - $store: 전역 뷰엑스 스토어에 등록된 변수를 지칭

***********************************************************/

// 뷰엑스 스토어를 활용한 변수 셋팅하기 //

// 1. 뷰엑스 스토어 인스턴스를 생성한다!
export default new Vuex.Store({

    // (1) 데이터 셋팅구역 :
    state: {

        // 도시데이터 셋업
        // 스프레드 연산자로 두 개의 객체를 합침
        // {...객체1, ...객체2, ...객체3, ...}
        cityData: {...myD0, ...myD1},

        // 이미지정보 셋업변수
        imgsrc: "",

        // 도시설명정보 셋업변수
        desc: "",

    }, /////// state 구역 ///////////

    // (2) 데이터 변경 메서드 구역: ★ 호출 시 commit() 사용 ★
    mutations: {

        // 초기데이터 셋업 메서드
        initSet(헐) {
            console.log("데이터 변경\n초기화",헐);

            // 헐.imgsrc = param;
            // 파라미터가 객체일 경우(데이터다수일때!)

            // 이미지데이터 셋업
            헐.imgsrc = 헐.cityData.인트로.이미지;

            // 설명데이터 셋업
            헐.desc = 헐.cityData.인트로.설명;
            
        }, ////// initSet 메서드 /////

        // 데이터 변경 메서드
        chgData(헐,슉){

            // 이 자리에서 바로 스토어 변수를 업데이트 한다!!
            // 1. 이미지 변수 : imgsrc
            헐.imgsrc = 헐.cityData[슉].이미지;
            // 2. 도시설명 변수 : desc
            헐.desc = 헐.cityData[슉].설명;
            
        }, // chgData //

        // 메뉴 데이터 변경 메서드
        chgMenu(헐,슉){
        // 헐 - state 변수, 슉 - 전달값

            헐.cityData = 
                슉 ===1?
                    {...헐.myD0, ...헐.myD1}:
                    {...헐.myD0, ...헐.myD2};
                    console.log("뮤테 호출:",슉,헐.cityData);

        }, // chgMenu //
        
    }, // mutations //

    // (3) 백엔 관련 코딩 비동기처리 메서드 구역: ★ 호출 시 dispatch() 사용 ★
    actions:{
        myAct(헝,벙){
            console.log("나의 action:",헝,벙);
        }
    }
    
}); // 뷰엑스 인스턴스 //

// 내보내기
// export default store;
