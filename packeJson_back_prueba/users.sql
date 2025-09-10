-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 10, 2025 at 07:11 PM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `packejsondb`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `rol` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `email`, `password`, `name`, `last_name`, `phone_number`, `created_at`, `rol`) VALUES
(1, 'admin1@example.com', '$2a$10$wT0lq1j.2i.5Q.h.Jv1.j.d1c5a.1B1f.e2a1A5B.e6a9A5F12', 'John', 'Doe', '1234567890', '2025-09-10 03:44:15', 'admin'),
(2, 'admin2@example.com', '$2a$10$wT0lq1j.2i.5Q.h.Jv1.j.d1c5a.1B1f.e2a1A5B.e6a9A5F12', 'Jane', 'Smith', '0987654321', '2025-09-10 03:44:15', 'admin'),
(3, 'user1@example.com', '$2a$10$f3b4d5e6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6', 'Mike', 'Johnson', '1122334455', '2025-09-10 03:44:15', 'user'),
(4, 'jeison.perdomo@example.com', '$2a$10$wT0lq1j.2i.5Q.h.Jv1.j.d1c5a.1B1f.e2a1A5B.e6a9A5F12', 'Jeison', 'Perdomo', '041440164564', '2025-09-10 18:19:24', 'user'),
(5, 'user_rueba@example.com', '$2b$10$1eJ16604x27pWZexXvpp5uKQL2c0HD2672Zwezmb9CV0rLJi.ErXy', 'Jeison', 'Perdomo', '041440164564', '2025-09-10 18:34:48', 'user');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
