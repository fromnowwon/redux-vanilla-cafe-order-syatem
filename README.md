# Cafe Order System

Vanilla JS에 Redux를 활용한 간단한 카페 주문 시스템 예제입니다.

## 프로젝트 구조

```bash
redux-vanilla-cafe-order-system
├── view.js
├── store.js
├── actions.js
├── reducers.js
└── package.json
```

- `actions.js`: 액션 타입과 액션 크리에이터 함수 정의
- `reducers.js`: 초기 상태와 리듀서 함수 정의
- `store.js`: 스토어 생성 및 구독 설정
- `view.js`: 주문 목록 화면

## 실행 방법

1. 프로젝트 클론

```bash
git clone https://github.com/fromnowwon/redux-vanilla-cafe-order-syatem.git
```

2. 패키지 설치
```bash
npm install
```

3. 실행

```bash
node view.js
```

