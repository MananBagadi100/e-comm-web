DESCRIBE users;

SELECT * FROM users;

DELETE FROM users
WHERE user_id = 7;

CREATE TABLE userQueries (
  query_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  username VARCHAR(35),
  email VARCHAR(35),
  contactNo VARCHAR(35),
  issueType VARCHAR(35),
  issueMessage VARCHAR(1000),
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(user_id)
) AUTO_INCREMENT = 1000;

DESCRIBE userQueries;

SELECT * FROM userQueries;

TRUNCATE userQueries;

