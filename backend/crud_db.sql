-- phpMyAdmin SQL Dump
-- version 3.3.9
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: May 27, 2022 at 01:01 PM
-- Server version: 5.1.53
-- PHP Version: 5.3.4

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `crud_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `bill`
--

CREATE TABLE IF NOT EXISTS `bill` (
  `billno` int(10) NOT NULL AUTO_INCREMENT,
  `customer_name` varchar(30) DEFAULT NULL,
  `amount` decimal(12,2) DEFAULT NULL,
  PRIMARY KEY (`billno`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=52 ;

--
-- Dumping data for table `bill`
--

INSERT INTO `bill` (`billno`, `customer_name`, `amount`) VALUES
(50, 'raman', '416.00'),
(51, 'raman', '636.00');

-- --------------------------------------------------------

--
-- Table structure for table `bill_items`
--

CREATE TABLE IF NOT EXISTS `bill_items` (
  `billno` int(10) DEFAULT NULL,
  `product_id` int(10) DEFAULT NULL,
  `purchase_qty` int(10) DEFAULT NULL,
  `product_price` decimal(12,2) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bill_items`
--

INSERT INTO `bill_items` (`billno`, `product_id`, `purchase_qty`, `product_price`) VALUES
(50, 7888, 4, '34.00'),
(50, 7890, 5, '56.00'),
(51, 7888, 2, '34.00'),
(51, 7888, 2, '34.00'),
(51, 7893, 4, NULL),
(51, 7900, 1, '500.00');

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE IF NOT EXISTS `cart` (
  `customer_name` varchar(30) DEFAULT NULL,
  `product_id` int(10) DEFAULT NULL,
  `qty` int(10) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`customer_name`, `product_id`, `qty`) VALUES
('ramu', 34, 55),
('ramu', 7888, 2),
('ramu', 7890, 8),
('ramu', 7888, 2),
('ramu', NULL, NULL),
('ramu', NULL, NULL),
('ramu', NULL, NULL),
('ramu', 7893, 4),
('ramu', 7900, 1);

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE IF NOT EXISTS `login` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) DEFAULT NULL,
  `password` varchar(30) DEFAULT NULL,
  `type` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `username`, `password`, `type`) VALUES
(1, 'admin', 'admin', 'admin'),
(2, 'raman', 'raman', 'customer'),
(3, 'pintu', 'pintu', 'customer'),
(7, 'haria', '1234', 'customer'),
(6, 'kk', '123', 'customer'),
(8, 'sumit', '123123', 'customer');

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE IF NOT EXISTS `payment` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `customer_name` varchar(30) DEFAULT NULL,
  `cardno` varchar(20) DEFAULT NULL,
  `amount` decimal(12,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=57 ;

--
-- Dumping data for table `payment`
--

INSERT INTO `payment` (`id`, `customer_name`, `cardno`, `amount`) VALUES
(52, 'raman', '45665435', '156.00'),
(53, 'raman', '213123', '72.00'),
(54, 'raman', '123123123', '416.00'),
(55, 'raman', '13131', '416.00'),
(56, 'raman', '1233', '636.00');

-- --------------------------------------------------------

--
-- Table structure for table `person`
--

CREATE TABLE IF NOT EXISTS `person` (
  `name` varchar(30) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `person`
--

INSERT INTO `person` (`name`) VALUES
(''),
('amit'),
('ssss');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE IF NOT EXISTS `product` (
  `product_id` int(10) NOT NULL AUTO_INCREMENT,
  `product_name` varchar(30) DEFAULT NULL,
  `product_price` int(30) DEFAULT NULL,
  `qty` int(10) NOT NULL,
  `product_image` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7901 ;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`product_id`, `product_name`, `product_price`, `qty`, `product_image`) VALUES
(7888, 'oil', 34, 3433, '1652707138822.jpg'),
(7893, NULL, NULL, 0, NULL),
(7894, NULL, NULL, 0, NULL),
(7900, 'shampoo', 500, 0, NULL),
(7895, NULL, NULL, 0, NULL),
(7898, NULL, NULL, 0, NULL),
(7899, NULL, NULL, 0, NULL);
