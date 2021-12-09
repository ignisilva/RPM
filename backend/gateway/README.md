# gateway 개발일지

## dotenv 적용

- $ npm install --save @nest/config

- $ npm install --save joi

- $ npm install --save-dev cross-env

## RDBMS (postgresql) 연결

<br>

### 1)Postgres 설정

<br>

postgresql 실행

> $ psql -U ROOTID

<br>

#### 로컬 및 UFT-8 설정

<br>

서버 utf-8 확인

> $ show server_encoding

서버 utf-8 설정

> $ set server_encoding = "UTF-8"

클라 utf-8 확인

> $ show client_encoding

클라 utf-8 설정

> $ set client_encoding = "UTF-8"

local 시간 확인

> $ show timezone;

local 시간 변경

> $ set time zome 'Asia/Seoul';

<br>

#### DB 생성

<br>

DB 목록 조회

> \list or \l

DB 생성

> create database DB_NAME;

DB 선택(연결)

> \connect DB_NAME or \c DB_NAME

<br>

#### 유저 생성 및 권한 인가

<br>

현재 사용자 조회

> select current_user;

모든 사용자 조회

> \du or \du+

유저 생성

> create user USER_NAME password 'USER_PASSWORD';

유저 비밀번호 변경

> alter user USER_NAME with password 'NEW_PASSWORD';

사용자 권한 인가

> grant all privileges on database DB_NAME to USER_NAME;

### 2) TypeORM 설정

Typeorm 관련 설치

> $ npm install --save @nestjs/typeorm typeorm mysql2
