# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.33)
# Database: clocking_app
# Generation Time: 2021-12-22 02:17:13 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table event_logs
# ------------------------------------------------------------

DROP TABLE IF EXISTS `event_logs`;

CREATE TABLE `event_logs` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `timestamp` datetime NOT NULL,
  `event` varchar(100) DEFAULT '',
  `shift_id` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `event_logs` WRITE;
/*!40000 ALTER TABLE `event_logs` DISABLE KEYS */;

INSERT INTO `event_logs` (`id`, `user_id`, `timestamp`, `event`, `shift_id`)
VALUES
	(7,1,'2021-12-20 17:19:24','CLOCKED_IN','xsrnub2t'),
	(8,2,'2021-12-20 17:19:44','CLOCKED_IN','mgrln29y'),
	(9,1,'2021-12-20 17:20:20','CLOCKED_OUT','xsrnub2t'),
	(10,2,'2021-12-20 17:51:10','CLOCKED_OUT','mgrln29y'),
	(11,2,'2021-12-20 18:56:10','CLOCKED_IN','c7qc5apy'),
	(12,2,'2021-12-20 18:56:22','CLOCKED_OUT','mgrln29y'),
	(13,2,'2021-12-20 18:56:35','CLOCKED_IN','4g44930t'),
	(14,2,'2021-12-20 18:56:45','CLOCKED_OUT','4g44930t'),
	(15,2,'2021-12-20 18:56:57','CLOCKED_IN','kqa48atb'),
	(16,2,'2021-12-20 18:57:11','CLOCKED_OUT','kqa48atb'),
	(17,1,'2021-12-20 18:57:57','CLOCKED_IN','td48agnm'),
	(18,1,'2021-12-20 18:58:06','CLOCKED_OUT','td48agnm'),
	(19,1,'2021-12-20 19:39:46','CLOCKED_IN','0xbirbi7'),
	(20,1,'2021-12-20 19:40:01','CLOCKED_OUT','0xbirbi7'),
	(21,1,'2021-12-20 19:40:13','CLOCKED_IN','8v4vve3m'),
	(22,1,'2021-12-20 19:41:35','CLOCKED_OUT','8v4vve3m'),
	(23,1,'2021-12-20 20:32:56','CLOCKED_IN','xze17x7l'),
	(24,1,'2021-12-20 20:43:42','CLOCKED_OUT','xze17x7l'),
	(25,1,'2021-12-20 21:23:59','CLOCKED_IN','twci5brl'),
	(26,1,'2021-12-20 21:24:17','CLOCKED_OUT','twci5brl'),
	(27,1,'2021-12-20 21:24:29','CLOCKED_IN','9k7t159o'),
	(28,2,'2021-12-20 21:25:12','CLOCKED_IN','ft1iyruu'),
	(29,1,'2021-12-20 21:25:39','CLOCKED_OUT','9k7t159o'),
	(30,2,'2021-12-20 21:26:50','CLOCKED_OUT','ft1iyruu');

/*!40000 ALTER TABLE `event_logs` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table teams
# ------------------------------------------------------------

DROP TABLE IF EXISTS `teams`;

CREATE TABLE `teams` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `teams` WRITE;
/*!40000 ALTER TABLE `teams` DISABLE KEYS */;

INSERT INTO `teams` (`id`, `name`)
VALUES
	(1,'Team1');

/*!40000 ALTER TABLE `teams` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table user_teams
# ------------------------------------------------------------

DROP TABLE IF EXISTS `user_teams`;

CREATE TABLE `user_teams` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) unsigned NOT NULL,
  `team_id` int(11) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `team_id` (`team_id`),
  CONSTRAINT `user_teams_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `user_teams_ibfk_2` FOREIGN KEY (`team_id`) REFERENCES `teams` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `user_teams` WRITE;
/*!40000 ALTER TABLE `user_teams` DISABLE KEYS */;

INSERT INTO `user_teams` (`id`, `user_id`, `team_id`)
VALUES
	(1,1,1),
	(3,2,1);

/*!40000 ALTER TABLE `user_teams` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL DEFAULT '',
  `full_name` varchar(255) NOT NULL DEFAULT '',
  `password` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;

INSERT INTO `users` (`id`, `email`, `full_name`, `password`)
VALUES
	(1,'test@test.com','nouman','1234'),
	(2,'test1@test.com','Ryan','1234');

/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
