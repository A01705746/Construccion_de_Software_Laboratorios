-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-04-2021 a las 20:02:17
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `videojuegos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personajes`
--

CREATE TABLE `personajes` (
  `id` int(11) NOT NULL,
  `nombre` varchar(60) COLLATE utf8_spanish2_ci NOT NULL,
  `imagen` varchar(400) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `personajes`
--

INSERT INTO `personajes` (`id`, `nombre`, `imagen`, `created_at`) VALUES
(1, 'Ahri', 'https://i.pinimg.com/originals/04/dc/b8/04dcb89e227620656fd0bf8fc2055ac4.jpg', '2021-04-19 17:58:06'),
(2, 'Akali', 'https://a-static.besthdwallpaper.com/cazador-akali-league-of-legends-lol-papel-pintado-2880x1620-65757_52.jpg', '2021-04-19 17:58:06'),
(3, 'Evelynn', 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Evelynn_0.jpg', '2021-04-19 17:58:06'),
(4, 'Sona', 'http://pm1.narvii.com/6523/df35d0778a9cd3ddceb88135e5a532512deadb12_00.jpg', '2021-04-19 17:58:06');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `personajes`
--
ALTER TABLE `personajes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `personajes`
--
ALTER TABLE `personajes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
