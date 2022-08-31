# 과제 리펙토링

1. TS -> JS 변경

2. .env 환경변수 설정 파일 적용 API_URL (AWS 주소 비공개)

3. 폴더 구조 변경 (api , components, pages, utils) 및 파일 정리

4. 윤관님 Router 참고하여 useEffect 가 아닌 routing에서 token 값 참고하여 변경 하고싶었으나 아직 구현 X..

5. 맥락을 이해하기 힘든 변수명 변경

- 타입별 변수명
  - boolean : `is-`, `has-`, `can-`, ...
  - function : `get-`, `handle-`, `submit-`, …
  - array : `-s` (ex. `users.map(user ⇒ user.id)`), …
- 피해야 할 변수명
  - `data`, `info`, `foo`, `user1`, `mdhms`, …

# 필요하다 생각되는 Best Practice (개인적인 의견입니다.)

\*\* 8.30일 저녁까지 만들어 주신 과제를 참고했습니다. \*\*

## 프로젝트 폴더 구조

---

### 팀원분들의 과제를 확인해봤습니다.

### 폴더 구조로 나눠놓으신 분도 있고, components만 만드신분도 있고 다양한 방법으로 과제를 만들어주셨습니다.

### 그중 scr폴더를 각자 따로 정리해봤습니다.

- 신이재님

  <img src="https://velog.velcdn.com/images/he-sw/post/7e817542-2f01-45be-86d9-33be0449102c/image.png" width="50%" height="50%"/>

- 정재욱님

  <img src="https://velog.velcdn.com/images/he-sw/post/542e931f-c715-4af6-84dd-cde448685007/image.png" width="50%" height="50%"/>

- 김은정님, 전지현님

  <img src="https://velog.velcdn.com/images/he-sw/post/6523fef6-4ee3-418c-9344-1a81b05fe23e/image.png" width="50%" height="50%"/>

- 박진성님

  <img src="https://velog.velcdn.com/images/he-sw/post/4370a6f8-423d-431e-a16f-bf0c2e4544f4/image.png" width="50%" height="50%"/>

- 윤관님

  <img src="https://velog.velcdn.com/images/he-sw/post/4aec195f-d2d5-4ef0-a6be-79af4fc337bb/image.png" width="50%" height="50%"/>

- 추승연님

  <img src="https://velog.velcdn.com/images/he-sw/post/0b8920de-1d0e-4fba-b645-e02eb20e9397/image.png" width="50%" height="50%"/>

---

### 위에 사진으로 보신것처럼 각자만의 스타일이 있어서 똑같은 방법으로 구현하신분이 거의 없습니다.

### 다른사람의 코드를 처음 봤을때 서로가 작성한 규칙이 없다면 코드의 의도를 파악하는데 시간을 많이 쏟게 된다고 생각합니다.

### (물론 작은 프로젝트라서 어려움은 없었습니다..)

### 아래는 제가 파악하기 쉬웠던 팀원분들의 폴더를 정리해봤습니다.

---

| 신이재님 폴더 | 내부구조                              | 내부 설명                                   |
| ------------- | ------------------------------------- | ------------------------------------------- |
| api           | authAPI.js, axios.js, todoAPI.js      | API 정리                                    |
| commons       | Input, Button, Content, Title, ...    | 재사용가능한 styled-components              |
| components    | Todo (DeleteButton,NewItemInput ... ) | TodoPage에 사용되는 컴포넌트                |
|               | Main (LoginForm,SignupForm )          | Main(Login, Signup)Page에 사용되는 컴포넌트 |
| pages         | MainPage, TodoPage, Index             | 페이지                                      |
| utils         | checkTokenExists                      | 로컬스토리지 커스텀 utils                   |

| 정재욱님 폴더 | 내부구조                              | 내부 설명                             |
| ------------- | ------------------------------------- | ------------------------------------- |
| api           | customAxios.js                        | customAxios 생성                      |
| components    | Todo (TodoCreate,TodoList ... )       | TodoPage에 사용되는 컴포넌트          |
|               | auth (LoginForm,RegisterForm )        | authPage에 사용되는 컴포넌트          |
| hook          | auth, todo                            | auto , todo hook                      |
| pages         | LoginPage, TodoPage, Modify, Register | 페이지 (수정페이지를 따로 만드셨네요) |
| store         | authSlice, todoSlice , store          | Redux/toolkit 상태관리 store          |

| 전지현님, 김은정님 폴더 | 내부구조              | 내부 설명                         |
| ----------------------- | --------------------- | --------------------------------- |
| style                   | GlovalStyle, vairable | 글로벌, 자주사용되는 CSS vairable |
| components              | authFormStyle.js      | TodoPage에 사용되는 컴포넌트      |
| pages                   | todo, signin, signup  | 페이지                            |
| store                   | todoData              | Mobx 상태관리                     |
| config                  | APP_API               | api url 분리                      |

---

## 위에 보이시는 것처럼 폴더 이름만 보고 내부 내용들이

## 어떤것이 있는지 대강 예상이 되서 코드 리뷰할때 더 편리합니다..

- https://www.youtube.com/watch?v=XEO3mFvrDx0&t=956s 참고하면 좋을 영상 추천드립니다.
- https://velog.io/@raverana96/react-리액트-프로젝트의-폴더구조

---

![Footer](https://capsule-render.vercel.app/api?type=waving&color=auto&height=200&section=footer)
