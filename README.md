# Best Todolist - 10팀

# 컴포넌트 설계

![image](https://velog.velcdn.com/images/jhplus13/post/87b8c356-9feb-41f5-8fa7-10d9c8962a0c/image.png)

# 구현

1. 로그인, 회원가입

- 비슷한 UI, 하나의 컴포넌트(AuthForm)으로 재사용
- api 응답객체를 통한 로그인,회원가입 성공 또는 실패 alert

2. 투두리스트

- 반복되는 투두 리스트 한줄을 TodoItem 컴포넌트로 분리하여 재사용
- api 호출 사용 감소
  : 투두리스트 데이터를 state로 저장해놓아 데이터 업데이트시 프론트의 데이터도 같이 업데이트 하여 api get요청 최대한 감소
