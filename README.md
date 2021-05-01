## CSJ Admin Template
- 개발스펙 : HTML5, Javascript, Tailwind CSS 2.x, Font Awesome 5.x Free
- Tailwind, Font Awesome 선언
```javascript
<head>
...
<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
...
</head>
```

### 프로젝트 실행하기
1. 프로젝트 복사하기
```shell
# git clone https://git-codecommit.ap-northeast-2.amazonaws.com/v1/repos/AI_Recruit-publish

# cd AI_Recruit-publish
```

2. 로컬 실행환경 설정
```shell
# yarn

# yarn add http-server
```

3. http 서버 설치 및 실행
```shell
# yarn http-server --port=80 /
```