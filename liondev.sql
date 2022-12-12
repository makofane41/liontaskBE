-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 12, 2022 at 09:54 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `liondev`
--

-- --------------------------------------------------------

--
-- Table structure for table `employeeinfo`
--

CREATE TABLE `employeeinfo` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `leaveStart` date NOT NULL,
  `leaveEnd` date NOT NULL,
  `leaveType` varchar(255) NOT NULL,
  `leaveReason` varchar(300) NOT NULL,
  `leaveDays` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `employeeinfo`
--

INSERT INTO `employeeinfo` (`id`, `firstName`, `lastName`, `leaveStart`, `leaveEnd`, `leaveType`, `leaveReason`, `leaveDays`) VALUES
(1, 'given', 'makofane', '2022-12-12', '2022-12-13', 'testing ', 'testing', 1),
(2, 'shai', 'makofane', '2022-12-11', '2022-12-12', 'testing ', 'testing', 1),
(3, 'shai', 'makofane', '2022-12-11', '2022-12-12', 'testing ', 'testing', 1),
(4, 'noms', 'Makofane', '2022-12-14', '2022-12-31', 'none', 'none', 1),
(5, 'noms', 'Makofane', '2022-12-14', '2022-12-31', 'none', 'none', 1),
(6, 'kat', 'Makofane', '2022-12-14', '2022-12-31', 'none', 'none', 1),
(7, 'thulane', 'Makofane', '2022-12-13', '2022-12-14', 'xmas', 'holid', 5),
(8, 'dissssss', 'Makofane ', '2022-12-14', '2022-12-22', 'none', 'none', 1),
(9, 'shai', 'makofane', '2022-12-11', '2022-12-12', 'testing ', 'testing', 1),
(10, 'shai', 'makofane', '2022-12-11', '2022-12-12', 'testing ', 'testing', 1),
(11, 'shai', 'makofane', '2022-12-11', '2022-12-12', 'testing ', 'testing', 1),
(12, 'shai', 'makofane', '2022-12-11', '2022-12-16', 'testing ', 'testing', 4);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employeeinfo`
--
ALTER TABLE `employeeinfo`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employeeinfo`
--
ALTER TABLE `employeeinfo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
