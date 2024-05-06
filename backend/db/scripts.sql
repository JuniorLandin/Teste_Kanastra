CREATE DATABASE IF NOT EXISTS charger;
USE charger;

CREATE TABLE IF NOT EXISTS charger.app_cadastro_kanastra_charges (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    government_id VARCHAR(11) NOT NULL,
    email VARCHAR(255) NOT NULL,
    debt_amount DECIMAL(10, 2) NOT NULL,
    debt_due_date DATE NOT NULL
);