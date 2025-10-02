
insert into students(name , class , stream) values
('Manan',7,'Science'); 

select * from students;

CREATE TABLE students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  class INT NOT NULL,
  stream VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

insert into students(name , class , stream) values 
('Rupesh',8,'Science'),
('Anand',3,'Science'),
('Rahul',9,'Science')
; 

SELECT
  id, name, class, stream,
  DATE_FORMAT(CONVERT_TZ(created_at,'+00:00','+05:30'), '%Y-%m-%d %H:%i:%s') AS created_at
FROM students;

SELECT
  id,
  name,
  class,
  stream,
  DATE_FORMAT(CONVERT_TZ(created_at,'+00:00','+05:30'), '%Y-%m-%d %H:%i:%s') AS created_at
FROM students;

CREATE USER 'app_user'@'localhost' IDENTIFIED BY 'strongpassword123';
GRANT ALL PRIVILEGES ON app_db.* TO 'app_user'@'localhost';
FLUSH PRIVILEGES;
