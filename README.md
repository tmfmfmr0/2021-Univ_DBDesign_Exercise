# **2021db**
###  **데이터베이스 설계**


<br><br>

---
---

## <span style = "color:red"> **3주차 DB테이블 설명**
3주차에는 Student 테이블을 만들었다.<br>

### 1. **Student**
### -> Student 테이블의 Attribute : 
- **학번** : 고정된 길이이기 때문에 *char(8)*, 개개인을 구분할 수 있어야 하므로 ***Primary key*** (primary key로 선언하면 자동으로 not null, unique 적용됨)
- **이름** : *varchar(20)*, *not null*
- **학과** : *varchar(15)*, *not null*
- **학년** : *int*, *not null*
- **입학일자** : *date*, *not null*
- **이메일** : *varchar(30)* 

### -> Student 테이블 예시 : 
학번|이름|학과|학년|입학일자|이메일
:---:|:---:|:---:|:---:|:---:|:---:
11111111|이름1|학과1|1|2011.01.01|이메일1@email.com
22222222|이름2|학과2|2|2012.02.02|이메일2@email.com

<br>

---
---

## <span style = "color:red"> **8주차 DB테이블 설명**
8주차에는 Employee, Department 테이블을 만들었다.<br>

### 1. **Employee**
### -> Employee 테이블의 Attribute : 

- **Fname** : *varchar(15)*, *not null*
- **Minit** : *char(1)*,
- **Lname** : *varchar(15)*, *not null*
- **Ssn** : *char(9)*, ***Primary key***
- **Bdate** : *date*, *not null*
- **Address** : *varchar(50)*
- **Sex** : *char(1)*
- **Salary** : *decimal(5)*
- **SuperSsn** : *char(9)*
- **Dno** : int, *not null*

### -> Employee 테이블 예시 : 
Fname|Minit|Lname|Ssn|Bdate|Address|Sex|Salary|SuperSsn|Dno
:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:
FnameA|A|LnameA|111111111|2000.01.01|AddressA|M|500||1
FnameB|B|LnameB|222222222|2000.02.02|AddressB|F|500|111111111|2

### 2. **Department**
### -> Department 테이블의 Attribute : 

- **Dnumber** : *int*, ***Primary key***
- **Dname** : *varchar(15)*, *not null*, *unique*
- **MgrSsn** : *char(9)*, *not null*, ***Foreign key*** (references Employ(Ssn))
- **MgrStartDate** : *date*

### -> Department 테이블 예시 : 
Dnumber|Dname|MgrSsn|MgrStartDate
:---:|:---:|:---:|:---:
1|부서1|111111111|2020.01.01
2|부서2|222222222|2020.02.02

<br>

---
---

## <span style = "color:red"> **10주차 DB테이블 설명**
10주차에는 User, Department 테이블을 만들었다.<br>
User에 따라 Department 

### 1. **User**
### -> User 테이블의 Attribute : 

- **ID** : *char(25)* (varchar 대신 크기가 넉넉한 char 사용), ***Primary key***
- **Password** : *char(20)*, *not null*
- **Role** : *char(20)*, *not null*

### -> User 테이블 예시 : 
ID|Password|Role
:---:|:---:|:---:
admin|admin1234|admin
test|test1234|users

### 2. **Department**
### -> Department 테이블의 Attribute : 

- **Dname** : *char(20)*, *not null*, *unique*
- **Dnumber** : *int*, ***Primary key***

### -> Department 테이블 예시 : 
Dname|Dnumber
:---:|:---:
정보통신공학과|0
컴퓨터공학과|1

<br>

---
---

## <span style = "color:yellow">텍스트 작성법</span>
여백 <>br
- 리스트 -/+
> 인용문 >


## <span style = "color:yellow">코드 작성법</span>

<pre>
<code>
pre> code> /code> /pre>
</code>
</pre>

```c
// ex. C
printf("test");
```

```c++
// ex. C++
cout << "test" << endl;
```


## <span style = "color:yellow">테이블 작성법</span>
이름|과|전공|학번
---|---|---|---
김영희|정보통신공학과|정보통신|12201111
홍길동|컴퓨터공학과|데이터베이스|12191111
이순신|인공지능학과|인공지능|12181111


## <span style = "color:yellow">텍스트 강조법</span>
- **데이터베이스** 실습은 재미 ~~없어요~~있어요..
