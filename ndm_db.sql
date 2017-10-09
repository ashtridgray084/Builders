-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 09, 2017 at 09:06 PM
-- Server version: 10.1.26-MariaDB
-- PHP Version: 7.1.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ndm_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `attendance_tbl`
--

CREATE TABLE `attendance_tbl` (
  `id` int(11) NOT NULL,
  `userID` varchar(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `department` varchar(255) NOT NULL,
  `shift` varchar(255) NOT NULL,
  `dates` varchar(255) NOT NULL,
  `time_in` varchar(255) NOT NULL,
  `time_out` varchar(255) NOT NULL,
  `workday` varchar(255) NOT NULL,
  `attend_day` varchar(255) NOT NULL,
  `absence_day` varchar(255) NOT NULL,
  `lateness` varchar(255) NOT NULL,
  `early_leave` varchar(255) NOT NULL,
  `leaved` varchar(255) NOT NULL,
  `sickleave` varchar(255) NOT NULL,
  `ot_hrs` varchar(255) NOT NULL,
  `ot` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `attendance_tbl`
--

INSERT INTO `attendance_tbl` (`id`, `userID`, `name`, `department`, `shift`, `dates`, `time_in`, `time_out`, `workday`, `attend_day`, `absence_day`, `lateness`, `early_leave`, `leaved`, `sickleave`, `ot_hrs`, `ot`) VALUES
(1, '2', 'Jon', 'EngineerA', 'Shift1 (Day)', '2017-09-01~2017-09-06', '0800,0759,0750,0730,0737', '1700,1705,1702,1701,1723', '5', '5', '0', '0', '0', '0', '5', '0', '0'),
(2, '3', 'Adam', 'EngineerB', 'Shift2 (Night)', '2017-09-01~2017-09-06', '1730,1705,1702,1701,1723', '0800,0759,0750,0730,0737', '5', '5', '0', '1', '0', '0', '5', '0', '0'),
(3, '4', 'George Domingo', 'WorkerA', 'Shift1 (Day)', '2017-09-01', '0700', '1700', '1', '1', '0', '0', '0', '5', '0', '0', '0'),
(4, '5', 'Philips', 'WorkerA', 'Shift1 (Day)', '2017-09-01~2017-09-06', '0800,0752,0750,0758,0740', '1700,1705,1717,1707,1701', '5', '5', '0', '0', '0', '0', '0', '0', '0'),
(16, '6', 'Bran', 'WorkerA', 'Shift1 (Day)', '2017-09-01~2017-09-06', '0800,0712,0730,0738,0800', '1700,1702,1705,1700,1701', '5', '5', '0', '1', '0', '0', '0', '0', '0'),
(17, '7', 'Ben', 'WorkerA', 'Shift1 (Day)', '2017-09-01~2017-09-06', '0800,0712,0730,0738,0800', '1700,1702,1705,1700,1701', '5', '5', '0', '1', '0', '0', '0', '0', '0'),
(18, '8', 'Rocky', 'WorkerA', 'Shift1 (Day)', '2017-09-01~2017-09-06', '0800,0712,0730,0738,0800', '1700,1702,1705,1700,1701', '5', '5', '0', '1', '0', '0', '0', '0', '0'),
(19, '9', 'Gio', 'WorkerA', 'Shift1 (Day)', '2017-09-01~2017-09-06', '0800,0712,0730,0738,0800', '1700,1702,1705,1700,1701', '5', '5', '0', '1', '0', '0', '0', '0', '0'),
(20, '10', 'Alphonse', 'WorkerA', 'Shift1 (Day)', '2017-09-01~2017-09-06', '0800,0712,0730,0738,0800', '1700,1702,1705,1700,1701', '5', '5', '0', '1', '0', '0', '0', '0', '0'),
(21, '11', 'John', 'WorkerB', 'Shift1 (Night)', '2017-09-01~2017-09-06', '0800,0712,0730,0738,0800', '1700,1702,1705,1700,1701', '5', '5', '0', '1', '0', '0', '0', '0', '0'),
(22, '12', 'Matteo', 'WorkerB', 'Shift1 (Night)', '2017-09-01~2017-09-06', '0800,0712,0730,0738,0800', '1700,1702,1705,1700,1701', '5', '5', '0', '1', '0', '0', '0', '0', '0'),
(23, '13', 'James', 'WorkerB', 'Shift1 (Night)', '2017-09-01~2017-09-06', '0800,0712,0730,0738,0800', '1700,1702,1705,1700,1701', '5', '5', '0', '1', '0', '0', '0', '0', '0'),
(24, '14', 'Claude', 'WorkerB', 'Shift1 (Night)', '2017-09-01~2017-09-06', '0800,0712,0730,0738,0800', '1700,1702,1705,1700,1701', '5', '5', '0', '1', '0', '0', '0', '0', '0'),
(25, '15', 'Simon', 'WorkerB', 'Shift1 (Night)', '2017-09-01~2017-09-06', '0800,0712,0730,0738,0800', '1700,1702,1705,1700,1701', '5', '5', '0', '1', '0', '0', '0', '0', '0'),
(26, '16', 'Peter', 'WorkerB', 'Shift1 (Night)', '2017-09-01~2017-09-06', '0800,0712,0730,0738,0800', '1700,1702,1705,1700,1701', '5', '5', '0', '1', '0', '0', '0', '0', '0'),
(27, '17', 'Luke', 'WorkerB', 'Shift1 (Night)', '2017-09-01~2017-09-06', '0800,0712,0730,0738,0800', '1700,1702,1705,1700,1701', '5', '5', '0', '1', '0', '0', '0', '0', '0'),
(28, '1', 'Jisel', 'EngineerC', 'DayShift', '2017-09-01~2017-09-06', '0800', '1700', '1', '1', '5', '0', '0', '1', '1', '0', '0');

-- --------------------------------------------------------

--
-- Table structure for table `bk_csv_history`
--

CREATE TABLE `bk_csv_history` (
  `id` int(11) NOT NULL,
  `type_of_file` varchar(255) DEFAULT NULL,
  `editor_name` varchar(255) DEFAULT NULL,
  `db_name` varchar(255) DEFAULT NULL,
  `file_name` varchar(255) DEFAULT NULL,
  `dated` varchar(255) DEFAULT NULL,
  `timed` varchar(255) DEFAULT NULL,
  `sn_number` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `scpid` varchar(255) NOT NULL,
  `raw_scp_id` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bk_csv_history`
--

INSERT INTO `bk_csv_history` (`id`, `type_of_file`, `editor_name`, `db_name`, `file_name`, `dated`, `timed`, `sn_number`, `status`, `scpid`, `raw_scp_id`) VALUES
(1, 'By Excel file', 'IC-Manager', 'himirror-QA20161110', '/var/www/uploads/skinprod_test_doc.xlsx', '2017/09/06', '01:30:23pm', 'Clinique-00043', 'Success', '6087', ''),
(2, 'By Excel file', 'IC-Manager', 'himirror-QA20161110', '/var/www/uploads/skinprod_test_doc.xlsx', '2017/09/06', '01:30:46pm', 'Clinique-00043', 'Success', '6088', ''),
(3, 'By Excel file', 'IC-Manager', 'himirror-QA20161110', '/var/www/uploads/skinprod_test_doc.xlsx', '2017/09/06', '01:32:14pm', 'Clinique-00043', 'Success', '6089', ''),
(4, 'By Excel file', 'IC-Manager', 'himirror-QA20161110', '/var/www/uploads/skinprod_test_doc.xlsx', '2017/09/06', '05:16:28pm', 'Clinique-00043', 'Success', '6090', ''),
(5, 'By Excel file', 'IC-Manager', 'himirror-QA20161110', '/var/www/uploads/skinprod_test_doc.xlsx', '2017/09/06', '05:38:28pm', 'Clinique-00043', 'Success', '6091', ''),
(6, 'By Excel file', 'IC-Manager', 'himirror-QA20161110', '/var/www/uploads/skuncare_product_list_20170905.xlsx', '2017/09/11', '04:50:04pm', 'uriage_us_20170905_01', 'Success', '', '6102'),
(7, 'By Excel file', 'IC-Manager', 'himirror-QA20161110', '/var/www/uploads/skuncare_product_list_20170905.xlsx', '2017/09/11', '04:50:05pm', 'greatbarrierisland_us_20170905_01', 'Success', '', '6103'),
(8, 'By Excel file', 'IC-Manager', 'himirror-QA20161110', '/var/www/uploads/skuncare_product_list_20170905.xlsx', '2017/09/11', '04:50:05pm', 'pierresapothecary_us_20170905_01', 'Success', '', '6104'),
(9, 'By Excel file', 'IC-Manager', 'himirror-QA20161110', '/var/www/uploads/skuncare_product_list_20170905.xlsx', '2017/09/11', '04:50:06pm', 'palmers_us_20170907_01', 'Success', '', '6105'),
(10, 'By Excel file', 'IC-Manager', 'himirror-QA20161110', '/var/www/uploads/skuncare_product_list_20170905.xlsx', '2017/09/11', '04:50:06pm', 'pierresapothecary_us_20170907_01', 'Success', '', '6106'),
(11, 'By Excel file', 'IC-Manager', 'himirror-QA20161110', '/var/www/uploads/skuncare_product_list_20170905.xlsx', '2017/09/11', '04:50:07pm', 'pierresapothecary_us_20170907_02', 'Success', '', '6107'),
(12, 'By Excel file', 'IC-Manager', 'himirror-QA20161110', '/var/www/uploads/skuncare_product_list_20170905.xlsx', '2017/09/11', '04:50:08pm', 'pierresapothecary_us_20170907_03', 'Success', '', '6108'),
(13, 'By Excel file', 'IC-Manager', 'himirror-QA20161110', '/var/www/uploads/skuncare_product_list_20170905.xlsx', '2017/09/11', '04:50:08pm', 'pierresapothecary_us_20170907_04', 'Success', '', '6109'),
(14, 'By Excel file', 'IC-Manager', 'himirror-QA20161110', '/var/www/uploads/skuncare_product_list_20170905.xlsx', '2017/09/11', '04:50:09pm', 'pierresapothecary_us_20170907_05', 'Success', '', '6110'),
(15, 'By Excel file', 'IC-Manager', 'himirror-QA20161110', '/var/www/uploads/skuncare_product_list_20170905.xlsx', '2017/09/11', '04:50:10pm', 'pierresapothecary_us_20170907_06', 'Success', '', '6111');

-- --------------------------------------------------------

--
-- Table structure for table `bk_login_history`
--

CREATE TABLE `bk_login_history` (
  `id` int(19) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `ip` varchar(255) DEFAULT NULL,
  `time` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bk_login_history`
--

INSERT INTO `bk_login_history` (`id`, `username`, `ip`, `time`) VALUES
(1, 'Jisel', '::1', NULL),
(2, 'Adam', '::1', NULL),
(3, 'Jisel', '::1', NULL),
(4, 'Jisel', '::1', NULL),
(5, 'Jisel', '::1', NULL),
(6, 'Jisel', '::1', NULL),
(7, 'Jisel', '::1', NULL),
(8, 'Jisel', '::1', NULL),
(9, 'Jisel', '::1', NULL),
(10, 'Jisel', '::1', NULL),
(11, 'Jisel', '::1', NULL),
(12, 'Jisel', '::1', NULL),
(13, 'Jisel', '::1', NULL),
(14, 'Jisel', '::1', NULL),
(15, 'Jisel', '::1', NULL),
(16, 'Jisel', '::1', NULL),
(17, 'Jon', '::1', NULL),
(18, 'Jon', '::1', NULL),
(19, 'Jisel', '::1', NULL),
(20, 'Jon', '::1', NULL),
(21, 'Jisel', '::1', NULL),
(22, 'Jon', '::1', NULL),
(23, 'Jisel', '::1', NULL),
(24, 'Jon', '::1', NULL),
(25, 'Jisel', '::1', NULL),
(26, 'Jisel', '::1', NULL),
(27, 'Jon', '::1', NULL),
(28, 'Jisel', '::1', NULL),
(29, 'Jisel', '::1', NULL),
(30, 'Jon', '::1', NULL),
(31, 'Jon', '::1', NULL),
(32, 'Jisel', '::1', NULL),
(33, 'Jisel', '::1', NULL),
(34, 'Jisel', '::1', NULL),
(35, 'Jon', '::1', NULL),
(36, 'Jisel', '::1', NULL),
(37, 'Jon', '::1', NULL),
(38, 'Jisel', '::1', NULL),
(39, 'Jisel', '::1', NULL),
(40, 'Jisel', '::1', NULL),
(41, 'Jisel', '::1', NULL),
(42, 'Jon', '::1', NULL),
(43, 'Jisel', '::1', NULL),
(44, 'Jisel', '::1', NULL),
(45, 'Jon', '::1', NULL),
(46, 'Jisel', '::1', NULL),
(47, 'Jisel', '::1', NULL),
(48, 'George25', '::1', NULL),
(49, 'philips', '::1', NULL),
(50, 'bran', '::1', NULL),
(51, 'bran', '::1', NULL),
(52, 'George', '::1', NULL),
(53, 'Jisel', '::1', NULL),
(54, 'Jisel', '::1', NULL),
(55, 'Jisel', '::1', NULL),
(56, 'Jon', '::1', NULL),
(57, 'Jisel', '::1', NULL),
(58, 'Jisel', '::1', NULL),
(59, 'Jisel', '::1', NULL),
(60, 'Jisel', '::1', NULL),
(61, 'Jon', '::1', NULL),
(62, 'Adam', '::1', NULL),
(63, 'Jon', '::1', NULL),
(64, 'Jisel', '::1', NULL),
(65, 'Jon', '::1', NULL),
(66, 'Jon', '::1', NULL),
(67, 'Jon', '::1', NULL),
(68, 'Jisel', '::1', NULL),
(69, 'JIsel', '::1', NULL),
(70, 'Jisel', '::1', NULL),
(71, 'Jisel', '::1', NULL),
(72, 'Jisel', '::1', NULL),
(73, 'Jisel', '::1', NULL),
(74, 'Jisel', '::1', NULL),
(75, 'Jisel', '::1', NULL),
(76, 'Jisel', '::1', NULL),
(77, 'Jisel', '::1', NULL),
(78, 'Jisel', '::1', NULL),
(79, 'Jisel', '::1', NULL),
(80, 'Jon', '::1', NULL),
(81, 'Jon', '::1', NULL),
(82, 'Adam', '::1', NULL),
(83, 'Jisel', '::1', NULL),
(84, 'Jon', '::1', NULL),
(85, 'Jisel', '::1', NULL),
(86, 'Jon', '::1', NULL),
(87, 'George', '::1', NULL),
(88, 'Jon', '::1', NULL),
(89, 'Jisel', '::1', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `bk_mailing_list`
--

CREATE TABLE `bk_mailing_list` (
  `mailing_ID` int(19) NOT NULL,
  `mailing_name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `mailing_email` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `editor_name` varchar(255) DEFAULT NULL,
  `mailing_language` varchar(255) DEFAULT NULL,
  `user_role` varchar(255) DEFAULT NULL,
  `function_category` varchar(255) DEFAULT NULL,
  `sender_mail_type` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bk_mailing_list`
--

INSERT INTO `bk_mailing_list` (`mailing_ID`, `mailing_name`, `mailing_email`, `editor_name`, `mailing_language`, `user_role`, `function_category`, `sender_mail_type`) VALUES
(2, 'Dianara', 'd.bathan@hkinpo.com.ph', NULL, NULL, NULL, 'cronjob', 'C'),
(3, 'Jessele', 'jessele.d@kinpo.com.ph', NULL, NULL, NULL, 'cronjob', 'C'),
(4, 'Christine', 'cj.deguzman@kinpo.com.ph', NULL, NULL, NULL, 'cronjob', 'C'),
(5, 'David', 'david.gumarao@kinpo.com.ph', NULL, NULL, NULL, 'cronjob', 'C'),
(6, 'Dafne', 'djdafne@himirror.com', NULL, NULL, NULL, 'cronjob', 'C'),
(7, 'Hanson', 'hanson_ji@himirror.com', NULL, NULL, NULL, 'cronjob', 'C'),
(8, 'Robert', 'robert_yeh@himirror.com', NULL, NULL, NULL, 'cronjob', 'C'),
(9, 'Ivan', 'ivan_chenhs@himirror.com', NULL, NULL, NULL, 'cronjob', 'C'),
(10, 'Cindy', 'Cindy_Chuang@himirror.com', NULL, NULL, NULL, 'cronjob', 'C'),
(11, 'Unarrange mail list', '曾裕翔 Alain <alain@himirror.com>; 白迺強 Justin Pai <justin_pai@himirror.com>; 葉子詰 Robert Yeh <robert_yeh@himirror.com>; 陳宏盛 Ivan Chen <ivan_chenhs@himirror.com>', NULL, 'zh_tw', NULL, 'Picture_blur', 'C'),
(12, 'Unarrange mail list', '曾裕翔 Alain <alain@himirror.com>; 白迺強 Justin Pai <justin_pai@himirror.com>; 葉子詰 Robert Yeh <robert_yeh@himirror.com>; 陳宏盛 Ivan Chen <ivan_chenhs@himirror.com>', NULL, 'zh_tw', NULL, 'Unable_to_Determine', 'C'),
(13, 'Unarrange mail list', '曾裕翔 Alain <alain@himirror.com>; 白迺強 Justin Pai <justin_pai@himirror.com>; 葉子詰 Robert Yeh <robert_yeh@himirror.com>; 陳宏盛 Ivan Chen <ivan_chenhs@himirror.com>', NULL, 'zh_tw', NULL, 'No_local_Information', 'C'),
(14, 'Unarrange mail list', '曾裕翔 Alain <alain@himirror.com>; 白迺強 Justin Pai <justin_pai@himirror.com>; 葉子詰 Robert Yeh <robert_yeh@himirror.com>; 陳宏盛 Ivan Chen <ivan_chenhs@himirror.com>', NULL, 'zh_tw', NULL, 'No_match_Information', 'C'),
(15, 'Unarrange mail list', '曾裕翔 Alain <alain@himirror.com>; 白迺強 Justin Pai <justin_pai@himirror.com>; 葉子詰 Robert Yeh <robert_yeh@himirror.com>; 陳宏盛 Ivan Chen <ivan_chenhs@himirror.com>', NULL, 'zh_tw', NULL, 'Non_skin_care_product', 'C'),
(16, 'Unarrange mail list', '曾裕翔 Alain <alain@himirror.com>; 白迺強 Justin Pai <justin_pai@himirror.com>; 葉子詰 Robert Yeh <robert_yeh@himirror.com>; 陳宏盛 Ivan Chen <ivan_chenhs@himirror.com>', NULL, 'zh_tw', NULL, 'Non_Facial_Care_Product', 'C'),
(17, 'Unarrange mail list', '曾裕翔 Alain <alain@himirror.com>; 白迺強 Justin Pai <justin_pai@himirror.com>; 葉子詰 Robert Yeh <robert_yeh@himirror.com>; 陳宏盛 Ivan Chen <ivan_chenhs@himirror.com>', NULL, 'ja_jp', NULL, 'Picture_blur', 'C'),
(18, 'Unarrange mail list', '曾裕翔 Alain <alain@himirror.com>; 白迺強 Justin Pai <justin_pai@himirror.com>; 葉子詰 Robert Yeh <robert_yeh@himirror.com>; 陳宏盛 Ivan Chen <ivan_chenhs@himirror.com>', NULL, 'ja_jp', NULL, 'Unable_to_Determine', 'C'),
(19, 'Unarrange mail list', '曾裕翔 Alain <alain@himirror.com>; 白迺強 Justin Pai <justin_pai@himirror.com>; 葉子詰 Robert Yeh <robert_yeh@himirror.com>; 陳宏盛 Ivan Chen <ivan_chenhs@himirror.com>', NULL, 'ja_jp', NULL, 'No_local_Information', 'C'),
(20, 'Unarrange mail list', '曾裕翔 Alain <alain@himirror.com>; 白迺強 Justin Pai <justin_pai@himirror.com>; 葉子詰 Robert Yeh <robert_yeh@himirror.com>; 陳宏盛 Ivan Chen <ivan_chenhs@himirror.com>', NULL, 'ja_jp', NULL, 'No_match_Information', 'C'),
(21, 'Unarrange mail list', '曾裕翔 Alain <alain@himirror.com>; 白迺強 Justin Pai <justin_pai@himirror.com>; 葉子詰 Robert Yeh <robert_yeh@himirror.com>; 陳宏盛 Ivan Chen <ivan_chenhs@himirror.com>', NULL, 'ja_jp', NULL, 'Non_skin_care_product', 'C'),
(22, 'Unarrange mail list', '曾裕翔 Alain <alain@himirror.com>; 白迺強 Justin Pai <justin_pai@himirror.com>; 葉子詰 Robert Yeh <robert_yeh@himirror.com>; 陳宏盛 Ivan Chen <ivan_chenhs@himirror.com>', NULL, 'ja_jp', NULL, 'Non_Facial_Care_Product', 'C');

-- --------------------------------------------------------

--
-- Table structure for table `bk_user`
--

CREATE TABLE `bk_user` (
  `userID` int(19) NOT NULL,
  `Username` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `Password` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `User_Type` varchar(255) CHARACTER SET utf8 DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bk_user`
--

INSERT INTO `bk_user` (`userID`, `Username`, `Password`, `User_Type`) VALUES
(1, 'Jisel', '1234', 'Admin'),
(2, 'Jon', '1234', 'Engineer'),
(3, 'Adam', '1234', 'Engineer'),
(4, 'George', '1234', 'Worker'),
(5, 'philips', '1234', 'Worker'),
(6, 'bran', '1234', 'Worker'),
(7, 'ben', '1234', 'Worker'),
(8, 'rocknroll', '1234', 'Worker'),
(9, 'Gionee', '1234', 'Worker'),
(10, 'Pistachio', '1234', 'Worker'),
(11, 'Pistachio', '1234', 'Worker'),
(12, 'March03', '1234', 'Worker'),
(13, 'Kitty', '1234', 'Worker'),
(14, 'Jes', '1234', 'Worker');

-- --------------------------------------------------------

--
-- Table structure for table `bk_user_access`
--

CREATE TABLE `bk_user_access` (
  `accessID` int(19) NOT NULL,
  `userID` int(19) NOT NULL,
  `memberinfo_mgt` int(11) DEFAULT NULL,
  `attendance_mgt` int(11) DEFAULT NULL,
  `schedule_mgt` int(11) DEFAULT NULL,
  `salary_mgt` int(11) DEFAULT NULL,
  `usersettings_mgt` int(11) DEFAULT NULL,
  `accesssettings_mgt` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bk_user_access`
--

INSERT INTO `bk_user_access` (`accessID`, `userID`, `memberinfo_mgt`, `attendance_mgt`, `schedule_mgt`, `salary_mgt`, `usersettings_mgt`, `accesssettings_mgt`) VALUES
(1, 1, 1, 1, 1, 1, 1, 1),
(2, 2, 1, 1, 1, 1, NULL, NULL),
(3, 3, 1, 1, 1, 1, NULL, NULL),
(4, 4, 1, 1, 1, 1, NULL, NULL),
(5, 5, 1, 1, 1, 1, NULL, NULL),
(6, 6, 1, 1, 1, 1, NULL, NULL),
(7, 7, 1, 1, 1, 1, NULL, NULL),
(8, 8, 1, 1, 1, 1, NULL, NULL),
(9, 9, 1, 1, 1, 1, NULL, NULL),
(10, 10, 1, 1, 1, 1, NULL, NULL),
(11, 11, 1, 1, 1, 1, NULL, NULL),
(12, 12, 1, 1, 1, 1, NULL, NULL),
(13, 13, 1, 1, 1, 1, NULL, NULL),
(14, 14, 1, 1, 1, 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `bk_user_profile`
--

CREATE TABLE `bk_user_profile` (
  `profileID` int(19) NOT NULL,
  `userID` int(19) NOT NULL,
  `first_name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `middle_name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `last_name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `age` varchar(11) CHARACTER SET utf8 DEFAULT NULL,
  `gender` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `status` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `nationality` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `birthdate` varchar(255) CHARACTER SET utf8 NOT NULL,
  `phone` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bk_user_profile`
--

INSERT INTO `bk_user_profile` (`profileID`, `userID`, `first_name`, `middle_name`, `last_name`, `email`, `password`, `age`, `gender`, `status`, `nationality`, `address`, `birthdate`, `phone`) VALUES
(1, 1, 'Jessele', 'Del', 'Mundo', 'jiseldm@gmail.com', '1234', '23', 'Female', 'Single', 'Filipino', 'Malvar, Batangas', '1994-02-25', ''),
(2, 2, 'Jon', 'Snow', 'Stark', 'jonsnow@stark.com', '1234', '23', 'Male', 'Single', 'American', 'New York', '1994-02-28', '97125874581'),
(3, 3, 'Adam Gio', 'DM', 'Domingo', 'adamgio.d@gmail.com', '1234', '23', 'Male', 'Single', 'American', 'New York, Manhattan', '1994-09-10', ''),
(4, 4, 'George', 'DM', 'Domingo', 'george.d@gmail.com', '1234', '22', 'Male', 'Single', 'Filipino', 'Malvar, Batangas', '1994-01-26', ''),
(5, 5, 'Philips', 'Reid', 'McDonalds', 'philips_mcdonalds@gmail.com', '1234', '23', 'Male', 'Single', 'American', 'Malvar, Batangas', '0000-00-00', ''),
(6, 6, 'Brandon', 'Tully', 'Stark', 'bran_stark@gmail.com', '1234', '23', 'Male', 'Single', 'Filipino', 'Northern, Winterfell', '0000-00-00', ''),
(7, 7, 'Ben', 'the', 'Beast', 'ben_beastprince@gmail.com', '1234', '23', 'Male', 'Married', 'Filipino', 'Batangas', '0000-00-00', ''),
(8, 8, 'Rocky', 'and', 'Roll', 'rocky_and_roll@gmail.com', '1234', '23', 'Male', 'Married', 'Filipino', '123 Malvar, Batangas', '1995-12-21', ''),
(9, 9, 'Gio', 'ni', 'Agioni', 'gio_agioni@gmail.com', '1234', '23', 'Male', 'Single', 'Filipino', 'Batangas', '0000-00-00', ''),
(10, 10, 'Picaso', 'potachio', 'cashew', 'pistachiocashew@gmail.com', '1234', '25', 'male', 'single', 'Filipino', 'Tanauan', '1992-05-14', '9987823543'),
(11, 11, 'Picaso', 'potachio', 'cashew', 'pistachiocashew@gmail.com', '1234', '25', 'male', 'single', 'filipino', 'calamba', '1992-05-14', '9987823543'),
(12, 12, 'March', 'April', 'May', 'march@gmail.com', '1234', '22', 'Male', 'Single', 'Filipino', 'Lemery', '1995-03-05', '9981234245'),
(13, 13, 'Hello', 'Kitty', 'World', 'kitty@world.com', '1234', '21', 'Male', 'Single', 'Filipino', 'Malvar, Batangas', '1996-02-23', '95543187564'),
(14, 14, 'Jes', 'Del', 'Mundo', 'jesdel@gmail.com', '1234', '23', 'Female', 'Single', 'Filipino', 'Bilucao', '1994-02-25', '9982521651');

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `customerNumber` int(11) NOT NULL,
  `customerName` varchar(50) NOT NULL,
  `contactLastName` varchar(50) NOT NULL,
  `contactFirstName` varchar(50) NOT NULL,
  `addressLine1` varchar(50) NOT NULL,
  `addressLine2` varchar(50) DEFAULT NULL,
  `city` varchar(50) NOT NULL,
  `state` varchar(50) DEFAULT NULL,
  `postalCode` varchar(15) DEFAULT NULL,
  `country` varchar(50) NOT NULL,
  `salesRepEmployeeNumber` int(11) DEFAULT NULL,
  `creditLimit` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`customerNumber`, `customerName`, `contactLastName`, `contactFirstName`, `addressLine1`, `addressLine2`, `city`, `state`, `postalCode`, `country`, `salesRepEmployeeNumber`, `creditLimit`) VALUES
(103, 'Atelier graphique', 'Schmitt', 'Carine ', '54, rue Royale', NULL, 'Nantes', NULL, '44000', 'France', 1370, 21000),
(112, 'Signal Gift Stores', 'King', 'Jean', '8489 Strong St.', NULL, 'Las Vegas', 'NV', '83030', 'USA', 1166, 71800),
(114, 'Australian Collectors, Co.', 'Ferguson', 'Peter', '636 St Kilda Road', 'Level 3', 'Melbourne', 'Victoria', '3004', 'Australia', 1611, 117300),
(119, 'La Rochelle Gifts', 'Labrune', 'Janine ', '67, rue des Cinquante Otages', NULL, 'Nantes', NULL, '44000', 'France', 1370, 118200),
(121, 'Baane Mini Imports', 'Bergulfsen', 'Jonas ', 'Erling Skakkes gate 78', NULL, 'Stavern', NULL, '4110', 'Norway', 1504, 81700),
(124, 'Mini Gifts Distributors Ltd.', 'Nelson', 'Susan', '5677 Strong St.', NULL, 'San Rafael', 'CA', '97562', 'USA', 1165, 210500),
(125, 'Havel & Zbyszek Co', 'Piestrzeniewicz', 'Zbyszek ', 'ul. Filtrowa 68', NULL, 'Warszawa', NULL, '01-012', 'Poland', NULL, 0),
(128, 'Blauer See Auto, Co.', 'Keitel', 'Roland', 'Lyonerstr. 34', NULL, 'Frankfurt', NULL, '60528', 'Germany', 1504, 59700),
(129, 'Mini Wheels Co.', 'Murphy', 'Julie', '5557 North Pendale Street', NULL, 'San Francisco', 'CA', '94217', 'USA', 1165, 64600),
(131, 'Land of Toys Inc.', 'Lee', 'Kwai', '897 Long Airport Avenue', NULL, 'NYC', 'NY', '10022', 'USA', 1323, 114900),
(141, 'Euro+ Shopping Channel', 'Freyre', 'Diego ', 'C/ Moralzarzal, 86', NULL, 'Madrid', NULL, '28034', 'Spain', 1370, 227600),
(146, 'Saveley & Henriot, Co.', 'Saveley', 'Mary ', '2, rue du Commerce', NULL, 'Lyon', NULL, '69004', 'France', 1337, 123900),
(148, 'Dragon Souveniers, Ltd.', 'Natividad', 'Eric', 'Bronz Sok.', 'Bronz Apt. 3/6 Tesvikiye', 'Singapore', NULL, '079903', 'Singapore', 1621, 103800),
(151, 'Muscle Machine Inc', 'Young', 'Jeff', '4092 Furth Circle', 'Suite 400', 'NYC', 'NY', '10022', 'USA', 1286, 138500),
(157, 'Diecast Classics Inc.', 'Leong', 'Kelvin', '7586 Pompton St.', NULL, 'Allentown', 'PA', '70267', 'USA', 1216, 100600),
(161, 'Technics Stores Inc.', 'Hashimoto', 'Juri', '9408 Furth Circle', NULL, 'Burlingame', 'CA', '94217', 'USA', 1165, 84600),
(166, 'Handji Gifts& Co', 'Victorino', 'Wendy', '106 Linden Road Sandown', '2nd Floor', 'Singapore', NULL, '069045', 'Singapore', 1612, 97900),
(167, 'Herkku Gifts', 'Oeztan', 'Veysel', 'Brehmen St. 121', 'PR 334 Sentrum', 'Bergen', NULL, 'N 5804', 'Norway  ', 1504, 96800),
(168, 'American Souvenirs Inc', 'Franco', 'Keith', '149 Spinnaker Dr.', 'Suite 101', 'New Haven', 'CT', '97823', 'USA', 1286, 0),
(173, 'Cambridge Collectables Co.', 'Tseng', 'Jerry', '4658 Baden Av.', NULL, 'Cambridge', 'MA', '51247', 'USA', 1188, 43400),
(175, 'Gift Depot Inc.', 'King', 'Julie', '25593 South Bay Ln.', NULL, 'Bridgewater', 'CT', '97562', 'USA', 1323, 84300),
(177, 'Osaka Souveniers Co.', 'Kentary', 'Mory', '1-6-20 Dojima', NULL, 'Kita-ku', 'Osaka', ' 530-0003', 'Japan', 1621, 81200),
(181, 'Vitachrome Inc.', 'Frick', 'Michael', '2678 Kingston Rd.', 'Suite 101', 'NYC', 'NY', '10022', 'USA', 1286, 76400),
(186, 'Toys of Finland, Co.', 'Karttunen', 'Matti', 'Keskuskatu 45', NULL, 'Helsinki', NULL, '21240', 'Finland', 1501, 96500),
(187, 'AV Stores, Co.', 'Ashworth', 'Rachel', 'Fauntleroy Circus', NULL, 'Manchester', NULL, 'EC2 5NT', 'UK', 1501, 136800),
(189, 'Clover Collections, Co.', 'Cassidy', 'Dean', '25 Maiden Lane', 'Floor No. 4', 'Dublin', NULL, '2', 'Ireland', 1504, 69400),
(198, 'Auto-Moto Classics Inc.', 'Taylor', 'Leslie', '16780 Pompton St.', NULL, 'Brickhaven', 'MA', '58339', 'USA', 1216, 23000),
(201, 'UK Collectables, Ltd.', 'Devon', 'Elizabeth', '12, Berkeley Gardens Blvd', NULL, 'Liverpool', NULL, 'WX1 6LT', 'UK', 1501, 92700),
(202, 'Canadian Gift Exchange Network', 'Tamuri', 'Yoshi ', '1900 Oak St.', NULL, 'Vancouver', 'BC', 'V3F 2K1', 'Canada', 1323, 90300),
(204, 'Online Mini Collectables', 'Barajas', 'Miguel', '7635 Spinnaker Dr.', NULL, 'Brickhaven', 'MA', '58339', 'USA', 1188, 68700),
(205, 'Toys4GrownUps.com', 'Young', 'Julie', '78934 Hillside Dr.', NULL, 'Pasadena', 'CA', '90003', 'USA', 1166, 90700),
(206, 'Asian Shopping Network, Co', 'Walker', 'Brydey', 'Suntec Tower Three', '8 Temasek', 'Singapore', NULL, '038988', 'Singapore', NULL, 0),
(211, 'King Kong Collectables, Co.', 'Gao', 'Mike', 'Bank of China Tower', '1 Garden Road', 'Central Hong Kong', NULL, NULL, 'Hong Kong', 1621, 58600),
(219, 'Boards & Toys Co.', 'Young', 'Mary', '4097 Douglas Av.', NULL, 'Glendale', 'CA', '92561', 'USA', 1166, 11000),
(239, 'Collectable Mini Designs Co.', 'Thompson', 'Valarie', '361 Furth Circle', NULL, 'San Diego', 'CA', '91217', 'USA', 1166, 105000),
(240, 'giftsbymail.co.uk', 'Bennett', 'Helen ', 'Garden House', 'Crowther Way 23', 'Cowes', 'Isle of Wight', 'PO31 7PJ', 'UK', 1501, 93900),
(242, 'Alpha Cognac', 'Roulet', 'Annette ', '1 rue Alsace-Lorraine', NULL, 'Toulouse', NULL, '31000', 'France', 1370, 61100),
(247, 'Messner Shopping Network', 'Messner', 'Renate ', 'Magazinweg 7', NULL, 'Frankfurt', NULL, '60528', 'Germany', NULL, 0),
(249, 'Amica Models & Co.', 'Accorti', 'Paolo ', 'Via Monte Bianco 34', NULL, 'Torino', NULL, '10100', 'Italy', 1401, 113000),
(250, 'Lyon Souveniers', 'Da Silva', 'Daniel', '27 rue du Colonel Pierre Avia', NULL, 'Paris', NULL, '75508', 'France', 1337, 68100);

-- --------------------------------------------------------

--
-- Table structure for table `datetime_tbl`
--

CREATE TABLE `datetime_tbl` (
  `id` int(19) NOT NULL,
  `userID` int(11) NOT NULL,
  `shiftID` int(11) NOT NULL,
  `time_in_am` varchar(255) DEFAULT NULL,
  `time_out_am` varchar(255) DEFAULT NULL,
  `time_in_pm` varchar(255) DEFAULT NULL,
  `time_out_pm` varchar(255) DEFAULT NULL,
  `time_in_ot` varchar(255) DEFAULT NULL,
  `time_out_ot` varchar(255) DEFAULT NULL,
  `department` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `member_info`
--

CREATE TABLE `member_info` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `emp_id` varchar(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `usertype` varchar(255) NOT NULL,
  `fname` varchar(255) NOT NULL,
  `lname` varchar(255) NOT NULL,
  `mname` varchar(255) NOT NULL,
  `age` varchar(11) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `nationality` varchar(255) NOT NULL,
  `home_address` varchar(255) NOT NULL,
  `birthday` date NOT NULL,
  `email_address` varchar(255) NOT NULL,
  `sss_number` varchar(255) NOT NULL,
  `tin_number` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `salary_tbl`
--

CREATE TABLE `salary_tbl` (
  `id` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `department` varchar(255) NOT NULL,
  `shift` varchar(255) NOT NULL,
  `dated` varchar(255) NOT NULL,
  `timed` varchar(255) NOT NULL,
  `overtime` varchar(255) NOT NULL,
  `overtime_special` varchar(255) NOT NULL,
  `lateness` varchar(255) NOT NULL,
  `early_leave` varchar(255) NOT NULL,
  `tax_deduct` varchar(255) NOT NULL,
  `salary_deduct` varchar(255) NOT NULL,
  `allowance` varchar(255) NOT NULL,
  `night_diff` varchar(255) NOT NULL,
  `salary_adjustment` varchar(255) NOT NULL,
  `pay_date` varchar(255) NOT NULL,
  `net_pay` varchar(255) NOT NULL,
  `gross_pay` varchar(255) NOT NULL,
  `total_deduct` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `salary_tbl`
--

INSERT INTO `salary_tbl` (`id`, `userID`, `name`, `department`, `shift`, `dated`, `timed`, `overtime`, `overtime_special`, `lateness`, `early_leave`, `tax_deduct`, `salary_deduct`, `allowance`, `night_diff`, `salary_adjustment`, `pay_date`, `net_pay`, `gross_pay`, `total_deduct`) VALUES
(1, 4, 'George D', 'Worker A', 'Shift1-(Day)', '2017-10-15', '0800-1700', '2', '0', '0', '0', '1500', '501', '500', '0', '0', '2017-09-15~2017-09-30', '5001', '6501', 2001);

-- --------------------------------------------------------

--
-- Table structure for table `schedule_tbl`
--

CREATE TABLE `schedule_tbl` (
  `id` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `usertype` varchar(255) NOT NULL,
  `department` varchar(255) NOT NULL,
  `shift` varchar(255) NOT NULL,
  `dates` varchar(255) NOT NULL,
  `timed` varchar(255) NOT NULL,
  `weeks` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `schedule_tbl`
--

INSERT INTO `schedule_tbl` (`id`, `userID`, `name`, `usertype`, `department`, `shift`, `dates`, `timed`, `weeks`) VALUES
(1, 4, 'George D', 'Worker', 'Worker A', 'DayShift', '2017-10-01~2017-10-05', '0800-1700', '2 - (M-T-W-TH-F)'),
(2, 2, 'Jon Snow', 'Engineer', 'Engineer A', 'DayShift', '2017-09-01~2017-09-06', '0800-1700', '2 - (M-T-W-TH-F)'),
(3, 5, 'Philips', 'Worker', 'Worker A', 'DayShift', '2017-09-01', '0800-1700', '2 - (M-T-W-TH-F)');

-- --------------------------------------------------------

--
-- Table structure for table `shift_tbl`
--

CREATE TABLE `shift_tbl` (
  `shiftID` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `mon` varchar(255) NOT NULL,
  `tue` varchar(255) NOT NULL,
  `wed` varchar(255) NOT NULL,
  `thu` varchar(255) NOT NULL,
  `fri` varchar(255) NOT NULL,
  `sat` varchar(255) NOT NULL,
  `shifts` varchar(255) NOT NULL,
  `total_time` varchar(255) NOT NULL,
  `cutoff` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `skincareproduct`
--

CREATE TABLE `skincareproduct` (
  `SCP_id` int(19) NOT NULL,
  `barcodeEAN13` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `barcodeGTIN` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `barcodeGTIN14` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `barcodeUPC` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `barcodeUPCA` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `brand_names` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `country_that_product_sell_in` char(50) CHARACTER SET utf8 DEFAULT NULL,
  `del_flag` varchar(1) CHARACTER SET utf8 DEFAULT NULL,
  `effective_period` datetime DEFAULT NULL,
  `features` text CHARACTER SET utf8,
  `gender` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `ingrediant` text CHARACTER SET utf8,
  `instruction` text CHARACTER SET utf8,
  `manufactured_location` char(50) CHARACTER SET utf8 DEFAULT NULL,
  `photos` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `product_link_web` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `product_names` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `product_names_sub` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `size_ml` double DEFAULT NULL,
  `size_oz` double DEFAULT NULL,
  `size_pces` double DEFAULT NULL,
  `product_categories_id` decimal(19,0) DEFAULT NULL,
  `product_textures_id` decimal(19,0) DEFAULT NULL,
  `product_type_id` decimal(19,0) DEFAULT NULL,
  `price_type` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `price_web` double DEFAULT NULL,
  `Approval_flag` varchar(1) CHARACTER SET utf8 DEFAULT NULL,
  `size_g` double DEFAULT NULL,
  `time_to_use` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `asin` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `step_id` decimal(19,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `emp_id` varchar(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `usertype` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `attendance_tbl`
--
ALTER TABLE `attendance_tbl`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bk_csv_history`
--
ALTER TABLE `bk_csv_history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bk_login_history`
--
ALTER TABLE `bk_login_history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bk_mailing_list`
--
ALTER TABLE `bk_mailing_list`
  ADD PRIMARY KEY (`mailing_ID`);

--
-- Indexes for table `bk_user`
--
ALTER TABLE `bk_user`
  ADD PRIMARY KEY (`userID`);

--
-- Indexes for table `bk_user_access`
--
ALTER TABLE `bk_user_access`
  ADD PRIMARY KEY (`accessID`);

--
-- Indexes for table `bk_user_profile`
--
ALTER TABLE `bk_user_profile`
  ADD PRIMARY KEY (`profileID`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`customerNumber`),
  ADD KEY `salesRepEmployeeNumber` (`salesRepEmployeeNumber`);

--
-- Indexes for table `member_info`
--
ALTER TABLE `member_info`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `salary_tbl`
--
ALTER TABLE `salary_tbl`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `schedule_tbl`
--
ALTER TABLE `schedule_tbl`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `shift_tbl`
--
ALTER TABLE `shift_tbl`
  ADD PRIMARY KEY (`shiftID`);

--
-- Indexes for table `skincareproduct`
--
ALTER TABLE `skincareproduct`
  ADD PRIMARY KEY (`SCP_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `attendance_tbl`
--
ALTER TABLE `attendance_tbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
--
-- AUTO_INCREMENT for table `bk_csv_history`
--
ALTER TABLE `bk_csv_history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT for table `bk_login_history`
--
ALTER TABLE `bk_login_history`
  MODIFY `id` int(19) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=90;
--
-- AUTO_INCREMENT for table `bk_mailing_list`
--
ALTER TABLE `bk_mailing_list`
  MODIFY `mailing_ID` int(19) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
--
-- AUTO_INCREMENT for table `bk_user`
--
ALTER TABLE `bk_user`
  MODIFY `userID` int(19) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT for table `bk_user_access`
--
ALTER TABLE `bk_user_access`
  MODIFY `accessID` int(19) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT for table `bk_user_profile`
--
ALTER TABLE `bk_user_profile`
  MODIFY `profileID` int(19) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT for table `member_info`
--
ALTER TABLE `member_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `salary_tbl`
--
ALTER TABLE `salary_tbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `schedule_tbl`
--
ALTER TABLE `schedule_tbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `shift_tbl`
--
ALTER TABLE `shift_tbl`
  MODIFY `shiftID` int(11) NOT NULL AUTO_INCREMENT;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
