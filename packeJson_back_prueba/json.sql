CREATE DATABASE  IF NOT EXISTS `json` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `json`;
-- MySQL dump 10.13  Distrib 8.0.43, for Win64 (x86_64)
--
-- Host: localhost    Database: json
-- ------------------------------------------------------
-- Server version	9.4.0

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
-- Table structure for table `brands`
--

DROP TABLE IF EXISTS `brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `brands` (
  `brand_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`brand_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES (1,'Nike'),(2,'Adidas'),(3,'Puma'),(4,'Under Armour'),(5,'Reebok'),(6,'Levi\'s'),(7,'H&M'),(8,'Otros');
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `category_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Básico'),(2,'Casual'),(3,'Deportivo'),(4,'Artístico'),(5,'Música'),(6,'Minimalista'),(7,'Tipográfica'),(8,'Oversize');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colors`
--

DROP TABLE IF EXISTS `colors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `colors` (
  `color_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`color_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colors`
--

LOCK TABLES `colors` WRITE;
/*!40000 ALTER TABLE `colors` DISABLE KEYS */;
INSERT INTO `colors` VALUES (1,'Blanco'),(2,'Negro'),(3,'Gris'),(4,'Amarillo'),(5,'Verde'),(6,'Verde Oscuro'),(7,'Verde Oliva'),(8,'Turquesa'),(9,'Azul'),(10,'Azul Marino'),(11,'Morado'),(12,'Rojo'),(13,'Rosa'),(14,'Naranja'),(15,'Beige'),(16,'Marron');
/*!40000 ALTER TABLE `colors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `delivery`
--

DROP TABLE IF EXISTS `delivery`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `delivery` (
  `delivery_id` int NOT NULL AUTO_INCREMENT,
  `order_id` int DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `shipping_address` varchar(255) DEFAULT NULL,
  `shipping_date` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`delivery_id`),
  KEY `fk_delivery_order` (`order_id`),
  CONSTRAINT `fk_delivery_order` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `delivery`
--

LOCK TABLES `delivery` WRITE;
/*!40000 ALTER TABLE `delivery` DISABLE KEYS */;
/*!40000 ALTER TABLE `delivery` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inventory`
--

DROP TABLE IF EXISTS `inventory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inventory` (
  `inventory_id` int NOT NULL AUTO_INCREMENT,
  `product_id` int DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  PRIMARY KEY (`inventory_id`),
  KEY `fk_inventory_product` (`product_id`),
  CONSTRAINT `fk_inventory_product` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inventory`
--

LOCK TABLES `inventory` WRITE;
/*!40000 ALTER TABLE `inventory` DISABLE KEYS */;
/*!40000 ALTER TABLE `inventory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_details`
--

DROP TABLE IF EXISTS `order_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_details` (
  `order_detail_id` int NOT NULL AUTO_INCREMENT,
  `order_id` int DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `quantity` int NOT NULL,
  `unit_price` decimal(10,2) NOT NULL,
  `subtotal` decimal(10,2) NOT NULL,
  PRIMARY KEY (`order_detail_id`),
  KEY `fk_orderdetails_order` (`order_id`),
  KEY `fk_orderdetails_product` (`product_id`),
  CONSTRAINT `fk_orderdetails_order` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_orderdetails_product` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_details`
--

LOCK TABLES `order_details` WRITE;
/*!40000 ALTER TABLE `order_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `order_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `payment_id` int DEFAULT NULL,
  `order_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `total_amount` decimal(10,2) NOT NULL,
  `status` varchar(50) NOT NULL,
  PRIMARY KEY (`order_id`),
  KEY `fk_order_user` (`user_id`),
  KEY `fk_order_payment` (`payment_id`),
  CONSTRAINT `fk_order_payment` FOREIGN KEY (`payment_id`) REFERENCES `payment_methods` (`payment_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_order_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment_methods`
--

DROP TABLE IF EXISTS `payment_methods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment_methods` (
  `payment_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `credit_card_number` varchar(16) NOT NULL,
  `credit_card_expiry` varchar(7) DEFAULT NULL,
  `name_on_card` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `state` varchar(100) DEFAULT NULL,
  `zip_code` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`payment_id`),
  KEY `fk_payment_method_user` (`user_id`),
  CONSTRAINT `fk_payment_method_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment_methods`
--

LOCK TABLES `payment_methods` WRITE;
/*!40000 ALTER TABLE `payment_methods` DISABLE KEYS */;
/*!40000 ALTER TABLE `payment_methods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `product_id` int NOT NULL AUTO_INCREMENT,
  `color_id` int DEFAULT NULL,
  `size_id` int DEFAULT NULL,
  `category_id` int DEFAULT NULL,
  `brand_id` int DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `description` text,
  `price` decimal(10,2) NOT NULL,
  `gender` varchar(20) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`product_id`),
  KEY `fk_products_color` (`color_id`),
  KEY `fk_products_size` (`size_id`),
  KEY `fk_products_category` (`category_id`),
  KEY `fk_products_brand` (`brand_id`),
  CONSTRAINT `fk_products_brand` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`brand_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `fk_products_category` FOREIGN KEY (`category_id`) REFERENCES `categories` (`category_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `fk_products_color` FOREIGN KEY (`color_id`) REFERENCES `colors` (`color_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `fk_products_size` FOREIGN KEY (`size_id`) REFERENCES `sizes` (`size_id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,1,3,1,8,'Franela Blanca Esencial','https://i.pinimg.com/736x/70/c6/1d/70c61d829f558494811a37b4fbff83f4.jpg','Franela básica de algodón 100% para un estilo casual y cómodo. Perfecta para el uso diario.',9.99,'unisex','2025-09-10 20:16:14'),(2,2,4,1,8,'Franela Negra Clásica','https://i.pinimg.com/736x/82/e5/39/82e5394d2056b545f1d5a2c9ab8e0d39.jpg','El esencial negro que nunca pasa de moda. Ideal para combinar con cualquier outfit.',10.50,'unisex','2025-09-10 20:16:14'),(3,3,3,1,8,'Franela Gris Minimal','https://i.pinimg.com/736x/2d/af/c0/2dafc080155b40686641c490f52b12ca.jpg','Tonos grisáceos que aportan elegancia y versatilidad a tu guardarropa básico.',8.99,'unisex','2025-09-10 20:16:14'),(4,4,2,2,8,'Franela Amarilla Vibrante','https://i.pinimg.com/1200x/44/11/c0/4411c0ae7e281c4cc9fdbd639383253c.jpg','Color vibrante que ilumina tu día. Perfecta para looks casuales con actitud.',11.25,'unisex','2025-09-10 20:16:14'),(5,5,5,2,8,'Franela Verde Frescura','https://i.pinimg.com/1200x/7d/33/76/7d3376ad074838116fbd9065698aa429.jpg','Inspirada en la naturaleza, esta franela aporta frescura y estilo relajado.',9.75,'unisex','2025-09-10 20:16:14'),(6,9,4,2,8,'Franela Azul Cielo','https://i.pinimg.com/1200x/a4/b0/47/a4b047c9ed105b8ae6daa2b9a8dfa1b4.jpg','El color del cielo en tus looks casuales. Suave y cómoda para todo el día.',10.00,'unisex','2025-09-10 20:16:14'),(7,2,3,3,8,'Franela Negra Activa','https://i.pinimg.com/736x/40/18/ae/4018aea74d95c67b8dac05ff0a9bd4a1.jpg','Diseñada para movimiento y comodidad durante tus actividades deportivas.',12.00,'unisex','2025-09-10 20:16:14'),(8,1,4,3,8,'Franela Blanca Performance','https://i.pinimg.com/1200x/98/b2/7c/98b27c0674ec5fd69bcf64f91f112dca.jpg','Tecnología de secado rápido para mantenerte seco durante el ejercicio.',11.50,'unisex','2025-09-10 20:16:14'),(9,10,5,3,8,'Franela Azul Marino Deportiva','https://i.pinimg.com/736x/bd/f3/03/bdf303e3e2a20e69b5e7c3709f41bfa6.jpg','Rendimiento y estilo se unen en esta franela para amantes del fitness.',10.75,'unisex','2025-09-10 20:16:14'),(10,12,3,4,8,'Franela Roja Artística','https://i.pinimg.com/736x/78/25/db/7825dbd709949af615b17c2b265eb094.jpg','Expresión artística en forma de franela. Para mentes creativas y libres.',9.25,'unisex','2025-09-10 20:16:14'),(11,11,4,4,8,'Franela Morada Creativa','https://i.pinimg.com/1200x/ad/df/a0/addfa0b85b54fa1b1fe673aa148e4799.jpg','Inspiración artística en tonos púrpuras. Usa tu creatividad con estilo.',10.99,'unisex','2025-09-10 20:16:14'),(12,13,2,4,8,'Franela Rosa Artística','https://i.pinimg.com/1200x/88/0f/2d/880f2d38b1bd8293c46fb3953fb7524b.jpg','Diseño único que fusiona moda y expresión artística contemporánea.',11.75,'unisex','2025-09-10 20:16:14'),(13,2,4,5,8,'Franela Negra Rhythm','https://i.pinimg.com/1200x/fb/fc/a7/fbfca7cad7c35e0cfa84bbd34fb3066d.jpg','Para los amantes de la música. Siente el ritmo en cada paso que das.',9.50,'unisex','2025-09-10 20:16:14'),(14,1,3,5,8,'Franela Blanca Melody','https://i.pinimg.com/1200x/2e/3a/f2/2e3af29228d290af606013821f18f544.jpg','Tan pura como una melodía perfecta. Estilo musical para el día a día.',10.25,'unisex','2025-09-10 20:16:14'),(15,2,5,5,8,'Franela Negra Beat','https://i.pinimg.com/1200x/37/61/e9/3761e9f08a7712b74b16d51f5e7a4cfd.jpg','Color energético que representa la vibra y el beat de tu música favorita.',11.00,'unisex','2025-09-10 20:16:14'),(16,3,3,6,8,'Franela Gris Essence','https://i.pinimg.com/736x/b2/a1/a2/b2a1a248de39ed25410663ba4d40523a.jpg','Menos es más. Diseño limpio y elegante para quienes aprecian la simplicidad.',8.50,'unisex','2025-09-10 20:16:14'),(17,15,4,6,8,'Franela Beige Serenity','https://i.pinimg.com/736x/4d/cf/68/4dcf68ec3a091ab59fbac6cfb372b59f.jpg','Tranquilidad y elegancia en un diseño minimalista que nunca pasa desapercibido.',9.75,'unisex','2025-09-10 20:16:14'),(18,16,3,6,8,'Franela Marrón Natural','https://i.pinimg.com/736x/d7/98/60/d79860808de9084abc04069f7cab6dfd.jpg','Conecta con la naturaleza a través de este diseño minimalista en tonos tierra.',10.50,'unisex','2025-09-10 20:16:14'),(19,2,4,7,8,'Franela Negra Typography','https://i.pinimg.com/736x/d9/c4/ca/d9c4ca9c6514f3503c07d0d005b8ef31.jpg','Mensajes con estilo. Expresa quién eres a través de la tipografía elegante.',11.25,'unisex','2025-09-10 20:16:14'),(20,1,3,7,8,'Franela Blanca Words','https://i.pinimg.com/1200x/0e/91/52/0e9152aab3c9bb85a4a5f2d5023f4853.jpg','Palabras que inspiran en una franela que habla por sí misma. Diseño limpio y moderno.',9.99,'unisex','2025-09-10 20:16:14'),(21,12,5,7,8,'Franela Roja Statement','https://i.pinimg.com/1200x/74/45/1a/74451af1a0a626f2c1660ad2f4f2a34f.jpg','Declara tu estilo con mensajes audaces en vibrante color rojo.',12.00,'unisex','2025-09-10 20:16:14'),(22,2,6,8,8,'Franela Negra Oversize','https://i.pinimg.com/1200x/73/08/7e/73087e412053e7b96583ca004547fe08.jpg','Comodidad máxima con estilo urbano. Perfecta para looks relajados y modernos.',10.75,'unisex','2025-09-10 20:16:14'),(23,1,6,8,8,'Franela Blanca Comfort','https://i.pinimg.com/1200x/dd/5c/44/dd5c44bc6bbc5e6b51927e867ec320ff.jpg','Holgada y suave como una nube. La elección perfecta para días de relax.',11.50,'unisex','2025-09-10 20:16:14'),(24,9,5,8,8,'Franela Azul Relaxed','https://i.pinimg.com/1200x/5a/25/68/5a2568e4f2b1feb7b117134ec1b7b9a3.jpg','Estilo oversize con tonos azules que transmiten calma y comodidad absoluta.',9.25,'unisex','2025-09-10 20:16:14');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reviews` (
  `review_id` int NOT NULL AUTO_INCREMENT,
  `product_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `rating` int DEFAULT NULL,
  `review` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`review_id`),
  KEY `fk_reviews_product_idx` (`product_id`),
  KEY `fk_reviews_user` (`user_id`),
  CONSTRAINT `fk_reviews_product` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_reviews_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `chk_reviews_rating` CHECK ((`rating` between 1 and 5))
) ENGINE=InnoDB AUTO_INCREMENT=137 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
INSERT INTO `reviews` VALUES (103,21,18,4,'Buena franela tipográfica. El mensaje es inspirador y la calidad decente.','2025-10-15 16:40:31'),(104,3,22,5,'¡Increíble calidad! La franela gris minimal superó mis expectativas. El material es suave y cómodo, perfecta para el uso diario.','2025-03-10 18:22:18'),(105,8,22,4,'Buena franela deportiva. Me encanta para hacer ejercicio, aunque esperaba que fuera un poco más fresca.','2025-04-05 13:15:33'),(106,12,22,5,'La franela morada es simplemente hermosa. El color es exactamente como en las fotos y la calidad premium.','2025-05-20 20:45:12'),(107,18,22,4,'Cómoda y elegante. Perfecta para looks casuales de oficina. El material es de buena calidad.','2025-06-15 15:30:45'),(108,5,2,5,'¡Me encanta el verde de esta franela! Es perfecta para el verano y muy fresca. La recomiendo 100%.','2025-04-01 14:25:47'),(109,14,2,4,'Buena franela musical. El diseño es bonito aunque el material podría ser un poco más grueso.','2025-05-12 19:20:33'),(110,22,2,5,'¡Excelente compra! La franela oversize es super cómoda y perfecta para pajama days.','2025-06-08 17:45:22'),(111,7,3,3,'Regular. Esperaba mejor calidad por el precio. La franela negra deportiva se encogió un poco al lavar.','2025-04-20 21:35:19'),(112,16,3,5,'¡Fantástica! La franela blanca melody es suave como la seda. Perfecta para conciertos.','2025-05-25 16:15:48'),(113,20,3,4,'Buena relación calidad-precio. Me gusta el mensaje inspirador de la franela tipográfica.','2025-06-18 18:30:27'),(114,2,4,5,'Franela negra clásica de excelente calidad. No se destiñe y mantiene su forma después de lavados.','2025-05-25 15:40:15'),(115,11,4,4,'Bonito color rojo. La franela artística tiene un diseño único que recibe muchos cumplidos.','2025-06-12 20:20:39'),(116,19,4,5,'¡Adoro esta franela beige! Minimalista pero con estilo. Perfecta para combinar con todo.','2025-07-05 13:55:22'),(117,6,5,4,'Bonito azul cielo. Cómoda para el día a día aunque un poco delgada para mi gusto.','2025-06-15 17:25:44'),(118,13,5,2,'Decepcionante. La franela rosa artística se veía mejor en foto. El material es muy delgado.','2025-07-10 19:40:18'),(119,21,5,5,'¡Perfecta para el verano! La franela blanca words es ligera y muy cómoda.','2025-08-02 14:15:33'),(120,1,6,5,'Excelente franela básica blanca. Algodón 100% de buena calidad, no transparenta.','2025-07-28 18:50:27'),(121,17,6,4,'Buena franela marrón. Color tierra muy bonito y material resistente.','2025-08-20 16:35:19'),(122,9,7,5,'¡Ideal para el gym! La franela azul marino deportiva es transpirable y de secado rápido.','2025-08-18 20:45:22'),(123,24,7,4,'Cómoda franela oversize. Perfecta para días de relax en casa.','2025-09-05 15:20:38'),(124,4,8,3,'El color amarillo es vibrante pero la tela no es tan suave como esperaba. Regular.','2025-09-03 19:30:45'),(125,15,8,5,'¡Me encanta! La franela negra beat es perfecta para conciertos. Muy rockera.','2025-09-25 14:15:52'),(126,10,9,4,'Buena franela performance. Cumple su función para deporte aunque el precio es algo elevado.','2025-09-20 17:40:29'),(127,23,9,5,'¡Statement perfecto! La franela roja llama la atención positiva. Muy buena calidad.','2025-10-10 18:25:17'),(128,24,10,5,'Franela azul relaxed super cómoda. Perfecta para viajes largos y días de descanso.','2025-10-05 13:35:44'),(129,18,10,4,'Elegante y versátil. La franela gris essence va con todo y para cualquier ocasión.','2025-10-22 20:20:33'),(130,2,11,5,'¡Perfecta franela negra! La uso casi todos los días. No se deforma con los lavados.','2025-04-25 16:15:40'),(131,7,12,4,'Buena para deporte. La franela negra activa es cómoda aunque algo calurosa.','2025-05-15 18:30:22'),(132,12,13,5,'¡Hermoso color morado! La calidad superó mis expectativas. Muy suave al tacto.','2025-06-20 15:45:18'),(133,19,14,4,'Bonita franela beige. Minimalista y elegante, aunque un poco holgada de más.','2025-07-12 19:20:35'),(134,22,15,5,'¡Love it! La franela oversize negra es perfecta para looks urbanos. Muy cómoda.','2025-08-08 14:35:49'),(135,5,16,3,'Regular. El verde es bonito pero la tela es muy delgada para el precio que tiene.','2025-09-05 17:50:27'),(136,14,17,5,'¡Excelente! La franela negra rhythm tiene el estilo perfecto para amantes de la música.','2025-09-28 20:15:42');
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sizes`
--

DROP TABLE IF EXISTS `sizes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sizes` (
  `size_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`size_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sizes`
--

LOCK TABLES `sizes` WRITE;
/*!40000 ALTER TABLE `sizes` DISABLE KEYS */;
INSERT INTO `sizes` VALUES (1,'XS'),(2,'S'),(3,'M'),(4,'L'),(5,'XL'),(6,'XXL');
/*!40000 ALTER TABLE `sizes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `rol` varchar(50) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (2,'juan.perez@email.com','$2b$10$V7s9z8WnH5q1M2rKjLp4E.1wXyZ3RtS6vB8cN7dF5gH2jKlM9nQqC','Juan','Perez','04129876543','2025-02-15 13:23:45',''),(3,'carlos.gonzalez@email.com','$2b$10$T5r8W2nH5q1M2rKjLp4E.3wXyZ3RtS6vB8cN7dF5gH2jKlM9nQqC','Carlos','Gonzalez','04221234567','2025-03-22 18:30:22',''),(4,'miguel.rodriguez@email.com','$2b$10$U6s9z8WnH5q1M2rKjLp4E.5wXyZ3RtS6vB8cN7dF5gH2jKlM9nQqC','Miguel','Rodriguez','04147654321','2025-04-05 20:45:18',''),(5,'jose.martinez@email.com','$2b$10$V7s9z8WnH5q1M2rKjLp4E.7wXyZ3RtS6vB8cN7dF5gH2jKlM9nQqC','Jose','Martinez','04249876543','2025-05-18 15:12:33',''),(6,'luis.lopez@email.com','$2b$10$W8t0a9XnI6q1M2rKjLp4E.9wXyZ3RtS6vB8cN7dF5gH2jKlM9nQqC','Luis','Lopez','04161234567','2025-06-09 12:15:27',''),(7,'antonio.garcia@email.com','$2b$10$X9u1b0YoJ7r2N3sLkQ5F.2wXyZ3RtS6vB8cN7dF5gH2jKlM9nQqC','Antonio','Garcia','04227654321','2025-07-23 23:20:44',''),(8,'francisco.hernandez@email.com','$2b$10$Y0v2c1ZpK8s3O4tMlR6G.4wXyZ3RtS6vB8cN7dF5gH2jKlM9nQqC','Francisco','Hernandez','04149876543','2025-08-12 17:45:09',''),(9,'david.sanchez@email.com','$2b$10$Z1w3d2AqL9t4P5uNmS7H.6wXyZ3RtS6vB8cN7dF5gH2jKlM9nQqC','David','Sanchez','04241234567','2025-09-01 14:30:55',''),(10,'alejandro.ramirez@email.com','$2b$10$A2x4e3BrM0u5Q6vOnT8I.8wXyZ3RtS6vB8cN7dF5gH2jKlM9nQqC','Alejandro','Ramirez','04167654321','2025-02-28 21:22:38',''),(11,'rafael.torres@email.com','$2b$10$B3y5f4CsN1v6R7wPoU9J.0wXyZ3RtS6vB8cN7dF5gH2jKlM9nQqC','Rafael','Torres','04267654321','2025-03-15 16:18:42',''),(12,'maria.gomez@email.com','$2b$10$C4z6g5DtO2w7S8xQpV0K.1wXyZ3RtS6vB8cN7dF5gH2jKlM9nQqC','Maria','Gomez','04121234567','2025-04-20 19:33:29',''),(13,'ana.flores@email.com','$2b$10$D5a7h6EuP3x8T9yRqW1L.3wXyZ3RtS6vB8cN7dF5gH2jKlM9nQqC','Ana','Flores','04229876543','2025-05-07 13:45:17',''),(14,'laura.diaz@email.com','$2b$10$E6b8i7FvQ4y9U0zSrX2M.5wXyZ3RtS6vB8cN7dF5gH2jKlM9nQqC','Laura','Diaz','04141234567','2025-06-14 22:20:53',''),(15,'carmen.ortiz@email.com','$2b$10$F7c9j8GwR5z0V1tTsY3N.7wXyZ3RtS6vB8cN7dF5gH2jKlM9nQqC','Carmen','Ortiz','04241239876','2025-07-29 18:12:48',''),(16,'isabel.vargas@email.com','$2b$10$G8d0k9HxS6a1W2uUtZ4O.9wXyZ3RtS6vB8cN7dF5gH2jKlM9nQqC','Isabel','Vargas','04169876543','2025-08-05 15:30:25',''),(17,'elena.castro@email.com','$2b$10$H9e1l0IyT7b2X3vVuA5P.2wXyZ3RtS6vB8cN7dF5gH2jKlM9nQqC','Elena','Castro','04227651234','2025-09-19 20:45:32',''),(18,'patricia.romero@email.com','$2b$10$I0f2m1JzU8c3Y4wWvB6Q.4wXyZ3RtS6vB8cN7dF5gH2jKlM9nQqC','Patricia','Romero','04149871234','2025-02-10 12:22:19',''),(19,'sofia.suarez@email.com','$2b$10$J1g3n2K0V9d4Z5xXwC7R.6wXyZ3RtS6vB8cN7dF5gH2jKlM9nQqC','Sofia','Suarez','04241239865','2025-03-25 17:55:41',''),(20,'daniela.mendoza@email.com','$2b$10$K2h4o3L1W0e5A6yYxD8S.8wXyZ3RtS6vB8cN7dF5gH2jKlM9nQqC','Daniela','Mendoza','04167659876','2025-04-12 14:40:57',''),(21,'adriana.guzman@email.com','$2b$10$L3i5p4M2X1f6B7zZyE9T.0wXyZ3RtS6vB8cN7dF5gH2jKlM9nQqC','Adriana','Guzman','04267651234','2025-05-30 23:15:23',''),(22,'simon.bolivar@email.com','$2b$10$yhoftFGonzSCCdJUEOPIvu488JwrRXXe7PHiX2x/BDaX2z3i5wDCO','Simón','Bolívar','04161233210','2025-09-10 20:49:59',''),(23,'admin@email.com','$2b$10$DG71rSSZDfMymPMw11mtge0ldJkita61LP1B5ZN28aIYTDTWFncvi','admin','admin','00000000000','2025-09-10 23:38:50',''),(24,'admin1@example.com','$2a$10$wT0lq1j.2i.5Q.h.Jv1.j.d1c5a.1B1f.e2a1A5B.e6a9A5F12','John','Doe','1234567890','2025-09-10 07:44:15','admin'),(25,'admin2@example.com','$2a$10$wT0lq1j.2i.5Q.h.Jv1.j.d1c5a.1B1f.e2a1A5B.e6a9A5F12','Jane','Smith','0987654321','2025-09-10 07:44:15','admin'),(26,'user1@example.com','$2a$10$f3b4d5e6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6','Mike','Johnson','1122334455','2025-09-10 07:44:15','user'),(27,'jeison.perdomo@example.com','$2a$10$wT0lq1j.2i.5Q.h.Jv1.j.d1c5a.1B1f.e2a1A5B.e6a9A5F12','Jeison','Perdomo','041440164564','2025-09-10 22:19:24','user'),(28,'user_rueba@example.com','$2b$10$1eJ16604x27pWZexXvpp5uKQL2c0HD2672Zwezmb9CV0rLJi.ErXy','Jeison','Perdomo','041440164564','2025-09-10 22:34:48','user');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'json'
--

--
-- Dumping routines for database 'json'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-09-10 19:48:47
