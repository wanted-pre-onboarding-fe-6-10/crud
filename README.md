# Wanted Pre-Onboarding 6차 10팀 과제1: 사전과제 Best Practice

> ### 구현 명세

> <https://github.com/walking-sunset/selection-task>

<br>

## 10팀의 프로젝트 리팩토링 방향

> 각자 best 방법으로 코드 구현한 뒤, 본인의 코드 설명 후 Best Practice를 채택하기로 했습니다

>

- 각자 orginization 에서 브랜치 판 뒤 Fork
- Eslint, Prettier, Husky 적용
- JavaScript 사용
- styled-component로 스타일링
- 리액트 폴더 구조에 대한 설명 준비
- reset CSS (선택사항)
- 모듈화 (OT 내용 참고)
- 상태관리 라이브러리 → 명세에 나와있는 라이브러리 이외에는 사용하지 말 것

<br>

## 논의되었던 내용

1. react router dom, styled-components 설치
2. .env로 환경변수 관리
3. styled-reset 사용 관련
4. axios VS fetch 선택
5. chmod ug+x .husky/\* 이슈 → 스크립트에 포함?
   <br>[참고링크](https://stackoverflow.com/questions/68367259/husky-needs-to-make-executable-for-every-new-branch)

6. .eslintcache .gitignore 파일에 추가
7. eslint-config-prettier, eslint-plugin-prettier 디펜던시 사용 관련
8. 폴더 구조 통일 할지?
9. "endOfLine": "auto" .prettierrc 에 추가
10. 필요없는 라이브러리들 제거

<br>


## 팀의 코드 컨벤션

### Git commit 메세지 컨벤션

```json
type: 작업 내용
```

![image](https://user-images.githubusercontent.com/96093461/187818854-829f7efd-082e-4edb-abeb-c1b9f9b4ae49.png)

### Git Pull request

![image](https://user-images.githubusercontent.com/96093461/187818882-2719fc0b-955a-4ddc-ba7b-767aa57287fb.png)

- main 브랜치에서 각자의 이름으로 브랜치를 생성
- 팀원들은 작업 완료 후 main 브랜치로 PR 날림
- 팀원들은 각 PR에 대한 커멘트를 달아 best practice를 논의 후 선정
- Best practice로 선정 된 PR을 main 브랜치로 merge

### 변수명

```jsx
타입별 변수명 
boolean : is-, has-, can-, ...
function : get-, handle-, submit-, …
array : -s (ex. users.map(user ⇒ user.id)), …
피해야 할 변수명
data, info, foo, user1, mdhms, …

```

- 맥락을 이해하기 힘든 변수명은 피하기
  - 구현 방식 대신 무엇인지를 나타내는 변수명 `(How vs What)` 을 선택하여 개발자의 의도를 들어내기
  - 이름을 지을 땐 세부 구현사항을 손으로 가린 채 변수명만 보고 `(이게뭐지?)`라고 반문해보면 도움이 됩니다.

### Lint, code formatter

`.eslintrc`

```json
{
  "extends": ["react-app", "plugin:prettier/recommended"],
  "rules": {
    "no-var": "warn", // var 금지
    "no-multiple-empty-lines": "warn", // 여러 줄 공백 금지
    "no-console": ["warn", { "allow": ["warn", "error"] }], // console.log() 금지
    "eqeqeq": "warn", // 일치 연산자 사용 필수
    "dot-notation": "warn", // 가능하다면 dot notation 사용
    "no-unused-vars": "warn", // 사용하지 않는 변수 금지
    "react/destructuring-assignment": "warn", // state, prop 등에 구조분해 할당 적용
    "react/jsx-pascal-case": "warn", // 컴포넌트 이름은 PascalCase로
    "react/no-direct-mutation-state": "warn", // state 직접 수정 금지
    "react/jsx-no-useless-fragment": "warn", // 불필요한 fragment 금지
    "react/no-unused-state": "warn", // 사용되지 않는 state
    "react/jsx-key": "warn", // 반복문으로 생성하는 요소에 key 강제
    "react/self-closing-comp": "warn", // 셀프 클로징 태그 가능하면 적용
    "react/jsx-curly-brace-presence": "warn" // jsx 내 불필요한 중괄호 금지
  }
}
```

`.prettierrc`

```jsx
{
  "printWidth": 100,
  "tabWidth": 2,
  "arrowParens": "avoid",
  "singleQuote": true,
  "endOfLine": "auto"
}
```

## ✍️ 작업 log

> UI 보다는 내부적인 코드 구현 리팩토링에 집중해 보았습니다!

#### 스타일링 관련

- styled-reset 을 이용해서 CSS reset을 진행했어요
- GlobalStyle 컴포넌트를 두어 global한 스타일을 정의해두었어요
- styled-component로 스타일링을 하고 있어요

<br>

#### Dependency 관련

- eslint-config-prettier, eslint-plugin-prettier를 함께 사용하는 것으로 변경했어요

###### &nbsp; &nbsp; &nbsp; &nbsp;(참고링크: <https://stackoverflow.com/questions/44690308/whats-the-difference-between-prettier-eslint-eslint-plugin-prettier-and-eslint/44690309#44690309>)

- 필요없는 라이브러리들을 제거했어요
- .eslintrc, .prettierrc를 정의해서 코드를 관리했어요

<br>

#### 프로젝트 파일 구조 관련

&nbsp; 컴포넌트 관련

> 📁 pages: 앱의 각 화면<br>
> 📁 components: 각 화면의 상위 컴포넌트들<br>
> 📁 commons: 화면들 간에 재사용될 가능성이 있는 하위 컴포넌트들<br>
> 📁 hoc: 각 컴포넌트에서 사용되야 할 state, api 호출 함수를 모아둔 커스텀 훅<br>

&nbsp; 기타 관련

> 📁 api: API axios instance와 api 호출 메서드 정의<br>

```
src
 ┣ api
 ┃ ┣ authAPI.js
 ┃ ┣ customAxios.js
 ┃ ┗ todoAPI.js
 ┣ components
 ┃ ┣ auth
 ┃ ┃ ┣ AuthTemplate.js
 ┃ ┃ ┣ LoginForm.js
 ┃ ┃ ┗ RegisterForm.js
 ┃ ┣ common
 ┃ ┃ ┣ Button.js
 ┃ ┃ ┗ Input.js
 ┃ ┗ todo
 ┃ ┃ ┣ TodoInsert.js
 ┃ ┃ ┣ TodoItem.js
 ┃ ┃ ┣ TodoList.js
 ┃ ┃ ┗ TodoTemplate.js
 ┣ hoc
 ┃ ┣ useAuthHook.js
 ┃ ┗ useTodoHook.js
 ┣ pages
 ┃ ┣ LoginPage.js
 ┃ ┣ RegisterPage.js
 ┃ ┗ TodoPage.js
 ┣ App.css
 ┣ App.js
 ┣ App.test.js
 ┣ Routes.js
 ┣ index.css
 ┣ index.js
 ┣ logo.svg
 ┣ reportWebVitals.js
 ┗ setupTests.js
```

<br>

#### API 통신 관련

- axios를 사용해서 RESTapi 통신을 관리했어요
- interceptor를 걸어 JWT 토큰이 header에 포함되는 부분을 통합했어요

<br>

#### 시연 영상

<br>

#### 회원가입/로그인

![회원가입:로그인](https://user-images.githubusercontent.com/69576360/187741309-f346099d-80c9-48eb-ad61-824d1298c295.gif)

#### 리스트 생성

![리스트 생성](https://user-images.githubusercontent.com/69576360/187741383-7fd38c53-c6d4-4d33-9c0f-e3cbd545e6fa.gif)

#### 리스트 수정

![리스트 수정](https://user-images.githubusercontent.com/69576360/187741396-3d6bd5c5-83c2-42c4-89fc-4a69f21e4a03.gif)

#### 리스트 삭제

![리스트 삭제](https://user-images.githubusercontent.com/69576360/187741403-67a2e4d9-18ca-4294-866d-77a0b23773cd.gif)
