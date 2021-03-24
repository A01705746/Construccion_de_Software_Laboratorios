/* Laboratorio 21 */

/*
Materiales(Clave, Descripción, Costo, PorcentajeImpuesto)
Proveedores(RFC, RazonSocial)
Proyectos(Numero, Denominacion)
Entregan(Clave, RFC, Numero, Fecha, Cantidad) 
*/

SELECT * FROM Entregan
SELECT * FROM Proyectos
SELECT * FROM Materiales
SELECT * FROM Proveedores

-- La suma de las cantidades e importe total de todas las entregas realizadas durante el 97.
SET DATEFORMAT DMY
SELECT SUM(Cantidad) as 'Cantidades', SUM((Cantidad*(Costo+Costo*(PorcentajeImpuesto/100)))) as 'Importe Total'
FROM Entregan E, Materiales M
WHERE E.Clave = M.Clave
AND Fecha BETWEEN '1/1/1997' AND '31/12/1997'

-- Para cada proveedor, obtener la razón social del proveedor, número de entregas e importe total de las entregas realizadas.
SELECT RazonSocial, COUNT(E.RFC) as 'Numero de entregas',SUM((Cantidad*(Costo+Costo*(PorcentajeImpuesto/100)))) as 'Importe Total'
FROM Entregan E, Proveedores P, Materiales M
WHERE E.RFC = P.RFC
AND E.Clave = M.Clave
GROUP BY RazonSocial
ORDER BY 'Numero de entregas' DESC, 'Importe Total' DESC

-- Por cada material obtener la clave y descripción del material, la cantidad total entregada, la mínima cantidad entregada,
-- la máxima cantidad entregada, el importe total de las entregas de aquellos materiales en los que la cantidad promedio entregada sea mayor a 400.
SELECT E.Clave, Descripcion, SUM(Cantidad) as 'Cantidad entregada', MIN(Cantidad) as 'Cantidad Minima' , MAX(Cantidad) as 'Cantidad Maxima', SUM((Cantidad*(Costo+Costo*(PorcentajeImpuesto/100)))) as 'Importe Total'
FROM Entregan E, Materiales M
WHERE E.Clave = M.Clave
GROUP BY E.Clave, Descripcion
HAVING AVG(Cantidad)>400
ORDER BY 'Cantidad entregada' DESC, 'Importe Total' DESC

-- Para cada proveedor, indicar su razón social y mostrar la cantidad promedio de cada material entregado, detallando la
-- clave y descripción del material, excluyendo aquellos proveedores para los que la cantidad promedio sea menor a 500.
SELECT RazonSocial, E.Clave, Descripcion, AVG(Cantidad) as 'Cantidad Promedio'
FROM Proveedores P, Entregan E, Materiales M
WHERE E.Clave = M.Clave
AND E.RFC = P.RFC
GROUP BY RazonSocial, E.Clave, Descripcion
HAVING AVG(Cantidad)>500
ORDER BY RazonSocial DESC

-- Mostrar en una solo consulta los mismos datos que en la consulta anterior pero para dos grupos de proveedores:
-- aquellos para los que la cantidad promedio entregada es menor a 370 y aquellos para los que la cantidad promedio entregada sea mayor a 450.
SELECT RazonSocial, E.Clave, Descripcion, AVG(Cantidad) as 'Cantidad Promedio'
FROM Proveedores P, Entregan E, Materiales M
WHERE E.Clave = M.Clave
AND E.RFC = P.RFC
GROUP BY RazonSocial, E.Clave, Descripcion
HAVING AVG(Cantidad) NOT BETWEEN 370 AND 450
ORDER BY RazonSocial DESC

/* Inserción de 5 nuevos materiales */
-- INSERT INTO tabla VALUES (valorcolumna1, valorcolumna2, [...] , valorcolumnan) ;
INSERT INTO Materiales VALUES (0001, 'Material prueba 1', 100 , 2);
INSERT INTO Materiales VALUES (0002, 'Material prueba 2', 100 , 2);
INSERT INTO Materiales VALUES (0003, 'Material prueba 3', 100 , 2);
INSERT INTO Materiales VALUES (0004, 'Material prueba 4', 100 , 2);
INSERT INTO Materiales VALUES (0005, 'Material prueba 5', 100 , 2);

-- Clave y descripción de los materiales que nunca han sido entregados.
SELECT Clave, Descripcion
FROM Materiales
WHERE Clave NOT IN (SELECT Clave FROM Entregan)

-- Razón social de los proveedores que han realizado entregas tanto al proyecto 'Vamos México' como al proyecto 'Querétaro Limpio'.
SELECT RazonSocial
FROM Proveedores P, Entregan E, Proyectos Pr
WHERE E.Numero = Pr.Numero
AND E.RFC = P.RFC
AND Denominacion = 'Vamos Mexico'
INTERSECT
SELECT RazonSocial
FROM Proveedores P, Entregan E, Proyectos Pr
WHERE E.Numero = Pr.Numero
AND E.RFC = P.RFC
AND Denominacion = 'Queretaro limpio'

-- Descripción de los materiales que nunca han sido entregados al proyecto 'CIT Yucatán'.
SELECT DISTINCT Descripcion
FROM Materiales M
WHERE Clave NOT IN (SELECT Clave
FROM Entregan E, Proyectos P
WHERE E.Numero = P.Numero
AND Denominacion = 'CIT Yucatan')

-- Razón social y promedio de cantidad entregada de los proveedores cuyo promedio de cantidad
-- entregada es mayor al promedio de la cantidad entregada por el proveedor con el RFC 'VAGO780901'.

/* Inserción de datos para cuadrar la consulta */
INSERT INTO Proveedores VALUES ('VAGO780901', 'Prueba');
INSERT INTO Entregan VALUES (0001, 'VAGO780901', 5017,'1-JAN-20' , 10);
INSERT INTO Entregan VALUES (0001, 'VAGO780901', 5018,'2-JAN-20' , 15);

SELECT RazonSocial, AVG(Cantidad) as 'Cantidad Entregada Promedio'
FROM Proveedores P, Entregan E
WHERE E.RFC = P.RFC
GROUP BY RazonSocial
HAVING AVG(Cantidad) > (SELECT AVG(Cantidad) FROM Entregan E WHERE E.RFC = 'VAGO780901')

-- RFC, razón social de los proveedores que participaron en el proyecto 'Infonavit Durango' y cuyas cantidades
-- totales entregadas en el 2000 fueron mayores a las cantidades totales entregadas en el 2001.
SET DATEFORMAT DMY
SELECT DISTINCT E.RFC, RazonSocial
FROM Proveedores P, Entregan E, Proyectos Pr
WHERE E.RFC = P.RFC
AND E.Numero = Pr.Numero
AND Denominacion = 'Infonavit Durango'
AND (SELECT SUM(Cantidad) FROM Entregan WHERE Fecha BETWEEN '1/1/2000' AND '31/12/2000') >
(SELECT SUM(Cantidad) FROM Entregan WHERE Fecha BETWEEN '1/1/2001' AND '31/12/2001')
