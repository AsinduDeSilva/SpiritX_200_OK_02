CREATE DATABASE  IF NOT EXISTS `spirit11` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `spirit11`;
-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: spirit11
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `players`
--

DROP TABLE IF EXISTS `players`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `players` (
  `balls_faced` int NOT NULL,
  `innings_played` int NOT NULL,
  `is_editable` bit(1) NOT NULL,
  `overs_bowled` int NOT NULL,
  `runs_conceded` int NOT NULL,
  `total_runs` int NOT NULL,
  `wickets` int NOT NULL,
  `id` bigint NOT NULL AUTO_INCREMENT,
  `category` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `university` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `players`
--

LOCK TABLES `players` WRITE;
/*!40000 ALTER TABLE `players` DISABLE KEYS */;
INSERT INTO `players` VALUES (588,10,_binary '\0',3,21,530,0,1,'Batsman','Chamika Chandimal','University of the Visual & Performing Arts'),(208,10,_binary '\0',40,240,250,8,2,'All-Rounder','Dimuth Dhananjaya','University of the Visual & Performing Arts'),(175,7,_binary '\0',35,210,210,7,3,'All-Rounder','Avishka Mendis','Eastern University'),(866,15,_binary '\0',5,35,780,0,4,'Batsman','Danushka Kumara','University of the Visual & Performing Arts'),(365,7,_binary '\0',3,24,329,0,5,'Batsman','Praveen Vandersay','Eastern University'),(305,5,_binary '\0',2,18,275,0,6,'Batsman','Niroshan Mathews','University of the Visual & Performing Arts'),(264,11,_binary '\0',88,528,132,29,7,'Bowler','Chaturanga Gunathilaka','University of Moratuwa'),(824,14,_binary '\0',1,8,742,0,8,'Batsman','Lahiru Rathnayake','University of Ruhuna'),(866,15,_binary '\0',3,24,780,0,9,'Batsman','Jeewan Thirimanne','University of Jaffna'),(808,14,_binary '\0',4,32,728,0,10,'Batsman','Kalana Samarawickrama','Eastern University'),(337,15,_binary '\0',75,450,405,15,11,'All-Rounder','Lakshan Vandersay','University of the Visual & Performing Arts'),(280,14,_binary '\0',140,560,140,46,12,'Bowler','Roshen Samarawickrama','University of Kelaniya'),(240,10,_binary '\0',80,320,120,26,13,'Bowler','Sammu Sandakan','University of Ruhuna'),(240,10,_binary '\0',100,400,120,33,14,'Bowler','Kalana Jayawardene','University of Jaffna'),(154,7,_binary '\0',63,252,77,21,15,'Bowler','Binura Samarawickrama','University of the Visual & Performing Arts'),(242,11,_binary '\0',88,440,121,29,16,'Bowler','Dasun Thirimanne','Eastern University'),(471,8,_binary '\0',1,7,424,0,17,'Batsman','Angelo Samarawickrama','University of Kelaniya'),(333,6,_binary '\0',3,27,300,0,18,'Batsman','Nuwan Jayawickrama','University of Ruhuna'),(533,10,_binary '\0',2,16,480,0,19,'Batsman','Kusal Dhananjaya','South Eastern University'),(300,5,_binary '\0',5,45,270,0,20,'Batsman','Chamika Bandara','Eastern University'),(426,8,_binary '\0',5,45,384,0,21,'Batsman','Dilruwan Shanaka','University of Peradeniya'),(291,14,_binary '\0',70,350,350,14,22,'All-Rounder','Danushka Jayawickrama','University of Peradeniya'),(530,9,_binary '\0',3,27,477,0,23,'Batsman','Charith Shanaka','University of Colombo'),(850,15,_binary '\0',0,1,765,0,24,'Batsman','Asela Nissanka','University of Sri Jayewardenepura'),(240,10,_binary '\0',90,540,120,30,25,'Bowler','Wanindu Hasaranga','University of Colombo'),(308,14,_binary '\0',112,448,154,37,26,'Bowler','Asela Vandersay','University of the Visual & Performing Arts'),(500,10,_binary '\0',2,18,450,0,27,'Batsman','Pathum Fernando','University of Peradeniya'),(366,6,_binary '\0',1,8,330,0,28,'Batsman','Angelo Kumara','Eastern University'),(490,9,_binary '\0',5,35,441,0,29,'Batsman','Danushka Rajapaksa','University of Peradeniya'),(110,5,_binary '\0',40,160,55,13,30,'Bowler','Suranga Shanaka','South Eastern University'),(400,8,_binary '\0',1,9,360,0,31,'Batsman','Pathum Dhananjaya','Eastern University'),(611,11,_binary '\0',0,1,550,0,32,'Batsman','Asela Asalanka','South Eastern University'),(308,14,_binary '\0',112,448,154,37,33,'Bowler','Minod Rathnayake','University of Kelaniya'),(600,12,_binary '\0',2,16,540,0,34,'Batsman','Binura Lakmal','University of Kelaniya'),(530,9,_binary '\0',1,7,477,0,35,'Batsman','Praveen Asalanka','Eastern University'),(520,9,_binary '\0',3,21,468,0,36,'Batsman','Angelo Jayawardene','University of Jaffna'),(270,15,_binary '\0',135,810,135,45,37,'Bowler','Kamindu Asalanka','University of Moratuwa'),(229,11,_binary '\0',44,264,275,8,38,'All-Rounder','Sadeera Rajapaksa','University of Jaffna'),(883,15,_binary '\0',1,7,795,0,39,'Batsman','Sandakan Hasaranga','University of Kelaniya'),(303,14,_binary '\0',56,336,364,11,40,'All-Rounder','Bhanuka Rajapaksa','University of Moratuwa'),(500,9,_binary '\0',1,7,450,0,41,'Batsman','Chamika Rajapaksa','University of Ruhuna'),(866,15,_binary '\0',5,35,780,0,42,'Batsman','Kamindu Lakmal','University of the Visual & Performing Arts'),(168,7,_binary '\0',63,315,84,21,43,'Bowler','Lakshan Gunathilaka','University of Peradeniya'),(678,13,_binary '\0',2,18,611,0,44,'Batsman','Tharindu Thirimanne','South Eastern University'),(444,8,_binary '\0',3,27,400,0,45,'Batsman','Dinesh Samarawickrama','University of Jaffna'),(261,5,_binary '\0',4,36,235,0,46,'Batsman','Suranga Sandakan','University of Moratuwa'),(408,8,_binary '\0',3,27,368,0,47,'Batsman','Sandakan Dickwella','University of Jaffna'),(266,5,_binary '\0',2,16,240,0,48,'Batsman','Sammu Rajapaksa','University of Ruhuna'),(308,14,_binary '\0',140,840,154,46,49,'Bowler','Suranga Bandara','University of Moratuwa'),(220,12,_binary '\0',60,360,264,12,50,'All-Rounder','Tharindu Embuldeniya','University of the Visual & Performing Arts');
/*!40000 ALTER TABLE `players` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-03-09 19:42:33
