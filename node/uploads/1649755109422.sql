use sys;
use green;
use study_db;

create table emp03
(
emp_id int not null,
emp_name varchar(200) not null,
gender varchar(10) null,
age int null,
hire_date Date null,
etc varchar(300) null,
primary key(emp_id)
);

select * from emp03;

insert into emp03(emp_id, emp_name, gender, age, hire_date)
values(1,'홍길동','남성',33,'2020-01-01');
insert into emp03(emp_id, emp_name, gender, age, hire_date)
values(2,'남대문','남성',23,'2003-05-24');
insert into emp03(emp_id, emp_name, gender, age, hire_date)
values(3,'scvman','남성',51,'2013-06-29');
insert into emp03(emp_id, emp_name, gender, age, hire_date)
values(4,'훌라라','여성',28,'2019-02-01');
insert into emp03(emp_id, emp_name, gender, age, hire_date)
values(5,'라이맨','여성',19,'2020-03-04');

commit;
rollback;
drop table emp03;
Delete from emp03 where emp_id = 5;

create table subway_statistics (
seq_id int not null,
station_name varchar(100) null,
boarding_date date null,
gubun varchar(20) null,
boarding_time int null,
passenger_number int null,
primary key(seq_id)
);

select * from subway_statistics ;

insert into subway_statistics values(1,'서울역(150)','2015-01-01','승차',7,345);
insert into subway_statistics values(2,'서울역(150)','2015-04-14','하차',7,347);
insert into subway_statistics values(3,'서울역(150)','2015-05-15','승차',7,548);
insert into subway_statistics values(4,'서울역(150)','2015-06-25','하차',7,5499);
insert into subway_statistics values(5,'잠실(250)','2015-01-01','승차',8,64545);
insert into subway_statistics values(6,'잠실(250)','2015-04-14','하차',8,645232);
insert into subway_statistics values(7,'충무로(300)','2015-05-15','승차',9,84345);
insert into subway_statistics values(8,'충무로(300)','2015-06-25','하차',9,34845);


drop table subway_statistics; 
commit;
rollback;

select seq_id,station_name,boarding_time,passenger_number
from subway_statistics;

select * from subway_statistics where station_name = '잠실(250)';
select * from subway_statistics where station_name != '잠실(250)';
select * from subway_statistics where station_name <> '잠실(250)';
select * from subway_statistics where station_name = '잠실(250)' and gubun ='승차' or boarding_time = '8';
select * from subway_statistics where station_name like '충무로%';

select emp_name
,age
,CASE when age between 0  and 19 then '10대'
	  when age between 20 and 29 then '20대'
	  when age between 30 and 39 then '30대'
	  when age between 40 and 49 then '40대'
	  else '50대 이상' 
	end as ages 
FROM emp03;

select * from emp03; 
select station_name from subway_statistics
where gubun = '승차'
group by station_name
order by station_name;

select count(*) cnt
,min(passenger_number) min_value
,max(passenger_number) max_value
,sum(passenger_number) sum_value
,avg(passenger_number) avg_value
from subway_statistics;

create table emp08
(
emp_id2 int not null,
emp_name2 varchar(100) not null,
gender varchar(10),
age int,
hire_date date,
etc varchar(300),
constraint emp08_pk primary key (emp_id2)
);
drop table emp08;
select * from emp08;
insert into emp08 (emp_id2, emp_name2 ,gender, age, hire_date) values 
(1,'선덕여왕','여성',33, STR_TO_DATE ('2016-11-17 12:00:00','%Y-%m-%d %h:%i:%s'));
insert into emp08 (emp_id2,emp_name2,gender ,age, hire_date ) values 
(2,'허난설원','여성',45,STR_TO_DATE ('2016-11-17','%Y-%m-%d'));
insert into emp08 (emp_id2,emp_name2,gender ,age, hire_date ) values 
(3,'김만덕','여성',15,STR_TO_DATE ('2011-03-23','%Y-%m-%d'));
insert into emp08 (emp_id2,emp_name2,gender ,age, hire_date ) values 
(4,'장희빈','여성',25,STR_TO_DATE ('2017-04-01','%Y-%m-%d'));
insert into emp08 (emp_id2,emp_name2,gender ,age, hire_date ) values 
(5,'신사임당','여성',69,STR_TO_DATE ('2020-12-24','%Y-%m-%d'));

select emp_id, emp_name, gender, age from emp03 union all 
select emp_id2, emp_name2, gender, age from emp08;
select * from emp03;
select * from emp08;

select emp_id, emp_name, gender, age from emp03 
union all select emp_id2, emp_name2, gender, age from emp08 
order by emp_id desc;

/*select emp_name from emp03             intersect
select emp_name2 from emp08 order by 1; */

create table emp_master (
emp_id int not null,
emp_name varchar(100) not null,
gender varchar(10),
age int,
hire_date date,
dept_id int,
address_id int,
constraint emp_master_pk primary key (emp_id)
);
select * from emp_master; 
drop table emp_master;

create table dept_master(
dept_id int not null,
dept_name varchar(100),
use_yn varchar(2) default 'y',
dept_desc varchar(100),
constraint dept_master_pk primary key(dept_id)
);

create table address_master (
address_id int not null,
city varchar(100),
gu varchar(100),
address_name varchar(100),
constraint address_master_pk primary key(address_id)
);
drop table address_master;
insert into emp_master (emp_id, emp_name, gender, age, hire_date, dept_id, address_id) values
(1, '김유신', '남성', 56, STR_TO_DATE ('2011-03-23','%Y-%m-%d'), 1, 1);
insert into emp_master (emp_id, emp_name, gender, age, hire_date, dept_id, address_id) values
(2, '신사임당', '여성', 26, STR_TO_DATE ('2013-01-13','%Y-%m-%d'), 1, 2);
insert into emp_master (emp_id, emp_name, gender, age, hire_date, dept_id, address_id) values
(3, '홍길동', '남성', 12, STR_TO_DATE ('2011-12-20','%Y-%m-%d'), 3, 2);
insert into emp_master (emp_id, emp_name, gender, age, hire_date, dept_id, address_id) values
(4, '강감찬', '남성', 67, STR_TO_DATE ('2011-05-22','%Y-%m-%d'), 2, 3);
insert into emp_master (emp_id, emp_name, gender, age, hire_date, dept_id, address_id) values
(5, '사나', '여성', 17, STR_TO_DATE ('2019-02-22','%Y-%m-%d'), 4, 4);
insert into dept_master (dept_id, dept_name) values (1,'회계팀');
insert into dept_master (dept_id, dept_name) values (2,'경영팀');
insert into dept_master (dept_id, dept_name) values (3,'전산팀');
insert into dept_master (dept_id, dept_name) values (4,'마케팅팀');
insert into address_master (address_id, city, gu, address_name) values
(1,'서울특별시','중구','새문안로 12');
insert into address_master (address_id, city, gu, address_name) values
(2,'대전광역시','남부','테헤란로 1');
insert into address_master (address_id, city, gu, address_name) values
(3,'서울특별시','서구','을지로 10');
insert into address_master (address_id, city, gu, address_name) values
(4,'서울특별시','북구','하이텔 2');

select * from dept_master;

select a.emp_id, a.emp_name, a.gender, a.age, a.dept_id, b.dept_id, b.dept_name, b.use_yn
from emp_master a, dept_master b
where a.dept_id = b.dept_id order by a.emp_id;
 
select a.emp_id, a.emp_name, a.gender, a.age, a.dept_id, b.dept_id, b.dept_name, b.use_yn
from emp_master a, dept_master b
where a.dept_id = b.dept_id 
and a.gender ='남성'
order by a.emp_id;

select a.emp_id, a.emp_name, a.gender, a.age, a.dept_id, b.dept_id, b.dept_name, b.use_yn
from emp_master a
inner join dept_master b 
on a.dept_id = b.dept_id 
where a.gender ='남성'
order by a.emp_id;

select a.emp_id, a.emp_name, a.gender, a.age, a.dept_id, b.dept_id, b.dept_name, b.use_yn,
       c.address_id, c.city, c.gu, c.address_name
from emp_master a, dept_master b, address_master c
where a.dept_id = b.dept_id 
and a.address_id = c.address_id
and a.gender ='남성'
order by a.emp_id;

select a.emp_id, a.emp_name, a.gender, a.age, a.dept_id, b.dept_id, b.dept_name, b.use_yn,
       c.address_id, c.city, c.gu, c.address_name
from emp_master a
inner join dept_master b 
on a.dept_id = b.dept_id 
inner join address_master c
on a.address_id = c.address_id
where a.gender ='남성'
order by a.emp_id;


insert into emp_master (emp_id, emp_name, gender, age, hire_date, dept_id, address_id)
values (6, '왕건', '남성', 35,  STR_TO_DATE ('2012-04-12','%Y-%m-%d'), null, 4);

commit;
/*null값은 못 읽음.*/
select * from emp_master;
select a.emp_id, a.emp_name, a.gender, a.age, a.dept_id, b.dept_id, b.dept_name, b.use_yn
from emp_master a, dept_master b where a.dept_id = b.dept_id order by  a.emp_id;

/*외부 조인으로 null값을 읽음*/
select a.emp_id, a.emp_name, a.gender, a.age, a.dept_id, b.dept_id, b.dept_name, b.use_yn
from emp_master a left join dept_master b on a.dept_id = b.dept_id order by  a.emp_id;

insert into dept_master (dept_id, dept_name) values (5, 'it팀');

commit;
select a.emp_id, a.emp_name, a.gender, a.age, a.dept_id, b.dept_id, b.dept_name, b.use_yn
from emp_master a right join dept_master b on a.dept_id = b.dept_id order by  a.emp_id;

select a.emp_id, a.emp_name, a.gender, a.age, a.dept_id, b.dept_id, b.dept_name, b.use_yn
from emp_master a join dept_master b on a.dept_id = b.dept_id order by  a.emp_id;
/*full outer join은 mysql에서 지원하지 않음*/
select a.emp_id, a.emp_name, a.gender, a.age, a.dept_id, b.dept_id, b.dept_name, b.use_yn
from emp_master a left join dept_master b on a.dept_id = b.dept_id 
UNION
select a.emp_id, a.emp_name, a.gender, a.age, a.dept_id, b.dept_id, b.dept_name, b.use_yn
from emp_master a right join dept_master b on a.dept_id = b.dept_id;


select * from emp_master;
select a.emp_id, a.emp_name, a.gender, a.age, a.dept_id, b.dept_id, b.dept_name, b.use_yn
from emp_master a, dept_master b order by  a.emp_id;

select * from dept_master a where a.dept_id = 
(select b.dept_id from emp_master b where b.emp_name ='홍길동');

select * from dept_master a where a.dept_id in 
(select b.dept_id from emp_master b where b.age between 10 and 20);

select * from emp_master a where (a.gender, a.age) 
in 
(select b.gender, b.age from emp_master b, address_master c 
where b.address_id = c.address_id and c.gu in ('중구','새문안로12'));

select * from dept_master a where exists (select 1 from emp_master b where b.age between 10 and 20 and a.dept_id = b.dept_id);

select * from dept_master a where a.dept_id not in (select b.dept_id from emp_master b where b.age between 10 and 20);

select * from dept_master a where not exists (select 1 from emp_master b where b.age between 10 and 20 and a.dept_id = b.dept_id);
/*rownum orcle에서만 됨 변경사항은 @ROWNUM:=@ROWNUM+1 이런 것*/
create table subway_dml_test as select * from subway_statistics where @ROWNUM:=@ROWNUM+1 < 1;
alter table subway_dml_test add primary key (seq_id);


insert into subway_dml_test select * from subway_statistics where station_name like '서울역%';

commit;
select * from subway_dml_test;

drop table subway_dml_test;

insert into subway_dml_test select * from subway_statistics where station_name not like '서울역%';

insert into subway_dml_test select a.* from subway_statistics a where not exists (select 1 from subway_dml_test b where a.seq_id = b.seq_id);
set sql_safe_updates=0;
delete from subway_dml_test where station_name like '서울역%';

select * from subway_dml_test where station_name like '잠실%' order by seq_id;
/*yyyy-mm-dd 에서 하루 dd가 1 증가함*/
update subway_dml_test set 
passenger_number = passenger_number +10, boarding_date = date_add(boarding_date, interval 1 day)
where station_name like '잠실%';

create table lotto_master (
seq_no int not null,
draw_date date,
num1 int,
num2 int,
num3 int,
num4 int,
num5 int,
num6 int,
bonus int
);

alter table lotto_master add constraint lotto_master_pk primary key(seq_no);
create table lotto_detail (
seq_no int not null,
rank_no int not null,
win_person_no int,
win_money int
);

alter table lotto_detail add constraint lotto_detail_pk primary key(seq_no, rank_no);

select num1,num2,num3,num4,num5,num6, count(*) from lotto_master group by num1,num2,num3,num4,num5,num6;















