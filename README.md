## nike clone prodjct Back-end 소개
- 팀명 : Just Do It
- 전세계 대표 스포츠 의류 브랜드 [나이키](https://www.nike.com) 의 온라인 쇼핑몰 클론 프로젝트
- 짧은 프로젝트 기간동안 개발에 집중해야 하므로 디자인/기획 부분만 클론했습니다.
- 개발은 초기 세팅부터 전부 직접 구현했으며, 아래 데모 영상에서 보이는 부분은 모두 백앤드와 연결하여 실제 사용할 수 있는 서비스 수준으로 개발한 것입니다.


### 개발 인원 및 기간
- 개발기간 : 2022/9/19 ~ 2020/9/30 
- 개발 인원 : 프론트엔드 4명, 백엔드 3명
- [프론트엔드 github 링크](https://github.com/wecode-bootcamp-korea/37-1st-Just-Do-It-frontend)
- [백엔드 github 링크](https://github.com/wecode-bootcamp-korea/37-1st-Just-Do-It-backend)

### 프로젝트 선정이유
- 이 사이트는 프론트엔드/백엔드의 의존도가 어느 한 쪽으로 기울지 않습니다. 
또한 기능적 관점으로 보았을 때 로그인 및 회원가입, 장바구니, 위시리스트, 상품 필터 및 정렬 등 커머스 사이트의 기본적인 기능을 경험하기에 적합합니다.

### 데모 영상
[YouTube](https://www.youtube.com/watch?v=7PEgky67nF4)

<br>


## 적용 기술 및 구현 기능

### 적용 기술 & 라이브러리

> - Front-End : React.js, Sass
> - Back-End : Node.js, Express Web Framework, Json Web Token, Bcrypt, MySQL
> - Common : AWS(RDS), RESTful API


### 구현 기능

제품 리스트 페이지에서 가격순, 출시순, 할인순, 리뷰 순으로 정렬 / 사이즈, 컬러, 브랜드 별로 필터<br>
회원가입 & 로그인 (회원가입 : 정규표현식에 따른 예외핸들링, 14세 이상만 회원가입 가능 / 로그인 : bcrypt(compare), jwt 발급)<br>
상세페이지 (로그인, 비로그인에 따른 위시리스트 노출, 리뷰와 함께 노출)<br>
위시리스트 (CRD)<br>
장바구니 (CRUD) & 옵션변경에서 상세페이지 (R, API)<br>
구매하기 (orders 테이블 부재로 재고 관리만, 장바구니 구매시 카트 삭제(transaction))<br>

## 개인 구현 기능

필터 기능 : 사이즈, 컬러, 브랜드 별로 상품을 필터링하는 기능 구현<br>
정렬 기능 : 상품의 최근 출시일, 할인율, 높은가격, 낮은가격 순으로 정렬하는 기능 구현 <br>

<br>


## Reference

- 이 프로젝트는 [나이키](https://www.nike.com) 사이트를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 구매한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다.
