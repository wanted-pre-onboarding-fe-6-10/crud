# wanted-pre-onboarding-fe

프리온보딩 프론트엔드 코스 선별과제 입니다.

<br>

> ## 폴더구조

 <br>

```javascript
src
┣ api                //api
┃ ┣ authAPI.js
┃ ┣ customAxios.js
┃ ┗ todoAPI.js
┣ components         //컴포넌트 UI
┃ ┣ auth                  // 로그인,회원가입 UI 폴
┃ ┃ ┣ AuthTemplate.js
┃ ┃ ┣ LoginForm.js
┃ ┃ ┗ RegisterForm.js
┃ ┣ common                // 다른 컴포넌트에서 공통적으로 사용되는 UI
┃ ┃ ┣ Button.js
┃ ┃ ┗ Input.js
┃ ┗ todo                  // 투두리스트 UI
┃ ┃ ┣ TodoInsert.js
┃ ┃ ┣ TodoItem.js
┃ ┃ ┣ TodoList.js
┃ ┃ ┗ TodoTemplate.js
┣ hoc                     //컴포넌트에서 사용되는 state, api호출, 함수의 커스텀 훅
┃ ┣ useAuthHook.js
┃ ┗ useTodoHook.js
┣ pages
┃ ┣ LoginPage.js
┃ ┣ RegisterPage.js
┃ ┗ TodoPage.js
┣ App.css
┣ App.js
┣ App.test.js
┣ Routes.js               //Routing 관련 폴더
┣ index.css
┣ index.js
┣ logo.svg
┣ reportWebVitals.js
```

> ## api

- todo관련 api에는 access_token이 무조건 필요하므로 interceptor를 활용해서 토큰이 로컬 스토리지에 있는 경우 api 요청 전에 headers에 포함되도록 코드 작성 (customAxios.js)

<br>

> ## components

- 각 컴포넌트들의 UI만 보여질 수 있도록 UI에 관련된 코드만 작성
- 각 컴포넌트에서 필요한 state, api 호출 함수 등은 커스텀 훅에서 return 받아 사용
- 다른 코드와 섞이지 않고 딱 UI만 확인 할 수 있는 점에서 좋은것 같음..?, 유지보수성/ 리팩토링의 용이성..?

<br>

> ## components/common

- Button,Input 같은 경우 로그인/회원가입/투두리스트 생성,수정,삭제 등에서 지속적으로 사용
- 기본적인 스타일만 정해 놓고 각 컴포넌트의 스타일에 따라서 props를 통해 스타일 변경

<br>

> ## hoc

- 각 컴포넌트들에서 사용되야 할 state, api 호출 함수를 모아논 커스텀 훅
- 로그인/회원가입 api, input에서의 onChange, value등이 있는 커스텀 훅(useAuthHook.js)
- 투두리스트의 CRUD api, 수정 input에서의 onChange,value 등이 있는 커스텀 훅(useTodoHook.js)
- 커스텀 훅으로 따로 분리함으로써 컴포넌트의 행동에 관련한 코드 수정 시 유지보수, 리팩토링 할 때 좋을 듯 하다..?

<br>

> ## pages

- pages 폴더 안에는 각 페이지에 들어갈 컴포넌트만 export해서 사용
- pages에 어떤 컴포넌트가 있는지 한눈에 확인이 가능 할 꺼 같아서

<br>

> ## Routes.js

- 라우팅 관련 코드 모음 (윤관님 코드 참고)
- App.js에서 관리하는 것보다 Routes.js 파일로 관리 후 App.js에서 import 후 사용하는게 깔끔한 것 같다.

<br>

> ## Styled-Components

- 한 파일 안에서 작성
- 파일이 쪼개져 있으면 나중에 구조 변경 이나 또 다른 리팩토링을 할 때 파일을 찾아가야 하는 귀찮음..? 불편함..?
- 팀 코드 컨벤션에 따라 다른것 같음

<br>

---

<br>

> ## 회원가입 / 로그인

- 회원가입 / 로그인 후 localStorage에 토큰 저장
- 토큰 확인 후 /todo로 리다이렉트
  <br>

![회원가입:로그인](https://user-images.githubusercontent.com/69576360/187741309-f346099d-80c9-48eb-ad61-824d1298c295.gif)

  <br>

> ## 투두 리스트 생성

   <br>

![리스트 생성](https://user-images.githubusercontent.com/69576360/187741383-7fd38c53-c6d4-4d33-9c0f-e3cbd545e6fa.gif)

  <br>

> ## 투두 리스트 수정

  <br>

![리스트 수정](https://user-images.githubusercontent.com/69576360/187741396-3d6bd5c5-83c2-42c4-89fc-4a69f21e4a03.gif)

  <br>

> ## 투두 리스트 삭제

- 토큰 확인 후 없으면 root 페이지로 리다이렉트
  <br>

![리스트 삭제](https://user-images.githubusercontent.com/69576360/187741403-67a2e4d9-18ca-4294-866d-77a0b23773cd.gif)
