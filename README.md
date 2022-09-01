# Wanted Pre-Onboarding 6차 10팀 과제1: 사전과제 Best Practice

## [신이재](https://www.github.com/eazae)

> ### 구현 명세

> <https://github.com/walking-sunset/selection-task>

<br>

> 리팩토링 전의 프로젝트 URL <br> > <https://github.com/eazae/wanted-pre-onboarding-fe>

<br>

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
📁 components: 각 화면의 상위 컴포넌트들<br>
📁 commons: 화면들 간에 재사용될 가능성이 있는 하위 컴포넌트들<br>

&nbsp; 기타 관련
> 📁 utils: 재사용 가능성이 있는 함수들 정의<br>
📁 api: API axios instance와 api 호출 메서드 정의<br>
📁 styles: global 스타일 정의<br>

<br>

#### API 통신 관련

- axios를 사용해서 RESTapi 통신을 관리했어요
- interceptor를 걸어 JWT 토큰이 header에 포함되는 부분을 통합했어요

<br>

#### 시연 영상

<https://user-images.githubusercontent.com/96093461/184886541-14e4b8f3-ad18-4c6f-9ae7-201150db269d.mov>
