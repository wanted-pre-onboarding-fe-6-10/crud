# Wanted-pre-onboarding project

<br>

프리온보딩 프론트엔드 1주차 첫번째 과제입니다.

<br>

### 폴더구조

<br>

project-1
┣
┣ .husky
┣ node_modules
┣ public
┃ ┣ index.html
┃ ┗ robots.txt
┣ src
┃ ┣ api // api 폴더
┃ ┃ ┣ AuthAPI.js
┃ ┃ ┣ TodoAPI.js
┃ ┃ ┗ axios.js
┃ ┣ component // 컴포넌트
┃ ┃ ┣ Auth // 로그인&회원가입 컴포넌트
┃ ┃ ┃ ┗ AuthForm.jsx
┃ ┃ ┗ Todo // 투두리스트 CRUD 컴포넌트
┃ ┃ ┃ ┗ TodoForm.jsx
┃ ┣ styles // 스타일 폴더
┃ ┃ ┣ GlobalStyle.js
┃ ┃ ┗ componentStyle.js
┃ ┣ App.css
┃ ┣ App.js // Routing
┃ ┣ index.js
┃ ┗ reportWebVitals.js
┣ .env
┣ .eslintcache
┣ .eslintrc
┣ .gitignore
┣ .prettierrc
┣ README.md
┣ package-lock.json
┗ package.json

<br>

### 프로젝트 기능 설명

<br>

### 실행방법

<br>

```
npm install
npm start
```

<br>

![ezgif com-gif-maker](https://user-images.githubusercontent.com/100207630/187807637-9c8e9976-2d98-4644-b8f6-ea9e889a5f0b.gif)

<br>

### 사전과제 개선 방향

<br>

- 폴더 구조 세분화 (api / style / component)
  <br>
- api 모듈화를 통해 반복되는 코드 최소화
  <br>
- styled-component
  <br>
