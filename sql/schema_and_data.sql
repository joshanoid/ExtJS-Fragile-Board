CREATE DATABASE  IF NOT EXISTS `fragile` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci */;
USE `fragile`;
-- MySQL dump 10.13  Distrib 5.6.13, for Win32 (x86)
--
-- Host: 127.0.0.1    Database: fragile
-- ------------------------------------------------------
-- Server version	5.5.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `card_comments`
--

DROP TABLE IF EXISTS `card_comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `card_comments` (
  `cc_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `cc_usr_id` bigint(20) unsigned NOT NULL,
  `cc_comment` text COLLATE utf8_unicode_ci NOT NULL,
  `cc_date` datetime NOT NULL,
  PRIMARY KEY (`cc_id`),
  KEY `cc_usr_id_fk_idx` (`cc_usr_id`),
  CONSTRAINT `cc_usr_id_fk` FOREIGN KEY (`cc_usr_id`) REFERENCES `users` (`usr_id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='stores comments about a card';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `card_comments`
--

LOCK TABLES `card_comments` WRITE;
/*!40000 ALTER TABLE `card_comments` DISABLE KEYS */;
/*!40000 ALTER TABLE `card_comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `card_history`
--

DROP TABLE IF EXISTS `card_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `card_history` (
  `ch_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `ch_type` varchar(45) COLLATE utf8_unicode_ci NOT NULL COMMENT 'history main type, eg update, transition',
  `ch_event` varchar(45) COLLATE utf8_unicode_ci NOT NULL COMMENT 'event subtype',
  `ch_author` bigint(20) unsigned NOT NULL COMMENT 'the author of the event',
  `ch_details` text COLLATE utf8_unicode_ci NOT NULL COMMENT 'details about the event',
  `ch_date` datetime NOT NULL COMMENT 'event date',
  PRIMARY KEY (`ch_id`),
  KEY `author_fk_idx` (`ch_author`),
  CONSTRAINT `author_fk` FOREIGN KEY (`ch_author`) REFERENCES `users` (`usr_id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='stores lifecycle about a card';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `card_history`
--

LOCK TABLES `card_history` WRITE;
/*!40000 ALTER TABLE `card_history` DISABLE KEYS */;
/*!40000 ALTER TABLE `card_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `card_priority`
--

DROP TABLE IF EXISTS `card_priority`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `card_priority` (
  `cp_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `cp_name` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `cp_description` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`cp_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='stores card priorities';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `card_priority`
--

LOCK TABLES `card_priority` WRITE;
/*!40000 ALTER TABLE `card_priority` DISABLE KEYS */;
INSERT INTO `card_priority` VALUES (1,'NORMAL','Normal'),(2,'FEATURE','Block all Cards on Feature level'),(3,'BOARD','Block all Cards on Board level');
/*!40000 ALTER TABLE `card_priority` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `card_status`
--

DROP TABLE IF EXISTS `card_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `card_status` (
  `cs_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `cs_name` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`cs_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `card_status`
--

LOCK TABLES `card_status` WRITE;
/*!40000 ALTER TABLE `card_status` DISABLE KEYS */;
INSERT INTO `card_status` VALUES (1,'ACTIVE'),(2,'CANCELLED'),(3,'FREEZED');
/*!40000 ALTER TABLE `card_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `card_types`
--

DROP TABLE IF EXISTS `card_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `card_types` (
  `ct_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `ct_name` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`ct_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='stores card types';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `card_types`
--

LOCK TABLES `card_types` WRITE;
/*!40000 ALTER TABLE `card_types` DISABLE KEYS */;
INSERT INTO `card_types` VALUES (1,'Task'),(2,'Bug');
/*!40000 ALTER TABLE `card_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cards`
--

DROP TABLE IF EXISTS `cards`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cards` (
  `c_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `c_title` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `c_description` text COLLATE utf8_unicode_ci,
  `c_lane_id` bigint(20) unsigned NOT NULL,
  `c_type_id` bigint(20) unsigned DEFAULT '1',
  `c_status_id` bigint(20) unsigned DEFAULT '1',
  `c_priority_id` bigint(20) unsigned DEFAULT '1',
  `c_user_id` bigint(20) unsigned NOT NULL,
  `c_start` datetime DEFAULT NULL,
  `c_color` varchar(7) COLLATE utf8_unicode_ci NOT NULL DEFAULT '#80DDFF',
  PRIMARY KEY (`c_id`),
  KEY `lane_fk_idx` (`c_lane_id`),
  KEY `type_fk_idx` (`c_type_id`),
  KEY `status_fk_idx` (`c_status_id`),
  KEY `priority_fk_idx` (`c_priority_id`),
  KEY `user_fk_idx` (`c_user_id`),
  CONSTRAINT `lane_fk` FOREIGN KEY (`c_lane_id`) REFERENCES `lanes` (`l_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `priority_fk` FOREIGN KEY (`c_priority_id`) REFERENCES `card_priority` (`cp_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `status_fk` FOREIGN KEY (`c_status_id`) REFERENCES `card_status` (`cs_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `type_fk` FOREIGN KEY (`c_type_id`) REFERENCES `card_types` (`ct_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `user_fk` FOREIGN KEY (`c_user_id`) REFERENCES `users` (`usr_id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cards`
--

LOCK TABLES `cards` WRITE;
/*!40000 ALTER TABLE `cards` DISABLE KEYS */;
INSERT INTO `cards` VALUES (13,'initail DB domain','design the db model',1,1,1,1,1,'2013-12-19 11:35:16','#80DDFF'),(14,'Implement Add Card','Impelemnt Add Card',1,1,1,1,1,'2013-12-19 11:35:16','#000000'),(15,'Add server log','design the db model',1,1,1,1,1,'2013-12-19 11:35:16','#AB39F2'),(16,'Test Bug1','This is a test bug description',5,2,1,1,1,'2013-12-19 11:35:16','#80DDFF'),(17,'Test bug2','Description for test bug',6,2,1,1,1,'2013-12-19 11:35:16','#80DDFF'),(18,'Test task 1','design the db model',7,1,1,1,1,'2013-12-19 11:35:16','#80DDFF'),(19,'Test task 2','Implement Add Card',7,1,1,1,1,'2013-12-19 11:35:16','#80DDFF'),(20,'Test task 3','design the db model',8,1,1,1,1,'2013-12-19 11:35:16','#80DDFF'),(21,'Test Bug3','This is a test bug description',4,2,1,1,1,'2013-12-19 11:35:16','#80DDFF'),(22,'Test bug4','Description for test bug',4,2,1,1,1,'2013-12-19 11:35:16','#80DDFF'),(23,'Test bug5','Description for test bug',4,2,1,1,1,'2013-12-19 11:35:16','#80DDFF'),(24,'initail DB domain','design the db model',9,1,1,1,1,'2013-12-19 11:35:16','#80DDFF');
/*!40000 ALTER TABLE `cards` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `cards_BINS` BEFORE INSERT ON `cards` FOR EACH ROW
BEGIN
SET NEW.c_start = now();
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `ci_sessions`
--

DROP TABLE IF EXISTS `ci_sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ci_sessions` (
  `session_id` varchar(40) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  `ip_address` varchar(45) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  `user_agent` varchar(120) COLLATE utf8_unicode_ci NOT NULL,
  `last_activity` int(10) unsigned NOT NULL DEFAULT '0',
  `user_data` text COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`session_id`),
  KEY `last_activity_idx` (`last_activity`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ci_sessions`
--

LOCK TABLES `ci_sessions` WRITE;
/*!40000 ALTER TABLE `ci_sessions` DISABLE KEYS */;
INSERT INTO `ci_sessions` VALUES ('08f5290c7afdc5f681f61f103f30ed38','127.0.0.1','Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1700.76 Safari/537.36',1391077350,''),('50d4d0e7a759426ad3aa54bff5cb0801','127.0.0.1','Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1700.76 Safari/537.36',1390994260,'a:2:{s:9:\"user_data\";s:0:\"\";s:4:\"user\";a:5:{s:2:\"id\";s:1:\"2\";s:8:\"username\";s:1:\"t\";s:9:\"firstname\";s:4:\"Test\";s:8:\"lastname\";s:6:\"User 2\";s:5:\"email\";s:16:\"testuser@test.te\";}}'),('542b2e4d6dbfae4691cc0a27a27ee205','127.0.0.1','Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1700.76 Safari/537.36',1390925990,'a:2:{s:9:\"user_data\";s:0:\"\";s:4:\"user\";a:5:{s:2:\"id\";s:1:\"2\";s:8:\"username\";s:1:\"t\";s:9:\"firstname\";s:4:\"Test\";s:8:\"lastname\";s:6:\"User 2\";s:5:\"email\";s:16:\"testuser@test.te\";}}'),('5d79268bba95187023873e270d58399f','127.0.0.1','Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1700.76 Safari/537.36',1391098134,'a:2:{s:9:\"user_data\";s:0:\"\";s:4:\"user\";a:5:{s:2:\"id\";s:1:\"2\";s:8:\"username\";s:1:\"t\";s:9:\"firstname\";s:4:\"Test\";s:8:\"lastname\";s:6:\"User 2\";s:5:\"email\";s:16:\"testuser@test.te\";}}'),('62d1e7dd8e0d9dc44d1564e236c3ecbd','127.0.0.1','Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1700.102 Safari/537.36',1391159786,'');
/*!40000 ALTER TABLE `ci_sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lanes`
--

DROP TABLE IF EXISTS `lanes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lanes` (
  `l_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `l_parent_id` bigint(20) unsigned DEFAULT NULL,
  `l_project_id` bigint(20) unsigned NOT NULL,
  `l_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `l_limit` int(10) unsigned DEFAULT '10',
  `l_order` int(10) unsigned DEFAULT '1',
  PRIMARY KEY (`l_id`),
  KEY `i_project_id_fk_idx` (`l_project_id`),
  CONSTRAINT `i_project_id_fk` FOREIGN KEY (`l_project_id`) REFERENCES `projects` (`p_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lanes`
--

LOCK TABLES `lanes` WRITE;
/*!40000 ALTER TABLE `lanes` DISABLE KEYS */;
INSERT INTO `lanes` VALUES (1,NULL,1,'Requested',10,1),(2,NULL,1,'In Progress',10,1),(3,NULL,1,'Test',10,1),(4,NULL,1,'Done',10,1),(5,2,1,'Sub2:In Progress',10,1),(6,2,1,'Sub2:Done',10,1),(7,3,1,'Sub3:In Progress',10,1),(8,3,1,'Sub3:Done',10,1),(9,NULL,2,'Requested',10,1),(10,NULL,2,'In Progress',10,1),(11,NULL,2,'Test',10,1),(12,NULL,2,'Done',10,1);
/*!40000 ALTER TABLE `lanes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project_access`
--

DROP TABLE IF EXISTS `project_access`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `project_access` (
  `pa_pid` bigint(20) unsigned NOT NULL,
  `pa_uid` bigint(20) unsigned NOT NULL,
  KEY `pa_pid_fk_idx` (`pa_pid`),
  KEY `pa_uid_fk_idx` (`pa_uid`),
  CONSTRAINT `pa_pid_fk` FOREIGN KEY (`pa_pid`) REFERENCES `projects` (`p_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `pa_uid_fk` FOREIGN KEY (`pa_uid`) REFERENCES `users` (`usr_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project_access`
--

LOCK TABLES `project_access` WRITE;
/*!40000 ALTER TABLE `project_access` DISABLE KEYS */;
/*!40000 ALTER TABLE `project_access` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projects`
--

DROP TABLE IF EXISTS `projects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `projects` (
  `p_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `p_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`p_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projects`
--

LOCK TABLES `projects` WRITE;
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;
INSERT INTO `projects` VALUES (1,'Fake project'),(2,'asd dsfsd f'),(4,'tmrt'),(5,'werfgwefwe');
/*!40000 ALTER TABLE `projects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `usr_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `usr_username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `usr_password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `usr_first_name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `usr_last_name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `usr_email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`usr_id`),
  UNIQUE KEY `usr_email` (`usr_email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'testuser','secure','Test','User','Test_User@epam.com'),(2,'t','s','Test','User 2','testuser@test.te');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'fragile'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2014-02-10 16:30:51
