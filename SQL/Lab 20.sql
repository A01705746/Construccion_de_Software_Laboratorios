/* Consulta de un tabla completa */
SELECT *
FROM materiales
/*
Salida
1000	Varilla 3/16	100.00
1010	Varilla 4/32	115.00
1020	Varilla 3/17	130.00
...
44 rows
*/

/* Selecci�n */
SELECT * FROM materiales
WHERE clave=1000
/*
Salida
1000	Varilla 3/16	100.00
1 rows
*/

/* Proyecci�n */
SELECT clave,rfc,fecha
FROM entregan
/*
Salida
1000	AAAA800101   	1998-07-08 00:00:00.000
1000	AAAA800101   	1999-08-08 00:00:00.000
1000	AAAA800101   	2000-04-06 00:00:00.000
132 rows
*/

/* Reuni�n Natural */
SELECT * FROM materiales,entregan
WHERE materiales.clave = entregan.clave
/*
Salida
1000	Varilla 3/16	100.00	1000	AAAA800101   	5000	1998-07-08 00:00:00.000	165.00
1000	Varilla 3/16	100.00	1000	AAAA800101   	5019	1999-08-08 00:00:00.000	254.00
1000	Varilla 3/16	100.00	1000	AAAA800101   	5019	2000-04-06 00:00:00.000	7.00
132 rows
*/
/*
Si alg�n material no ha se ha entregado �Aparecer�a en el resultado de esta consulta?
No aparecer�a en la consulta.
*/

/* Reuni�n con criterio espec�fico */
SELECT * FROM entregan,proyectos
WHERE entregan.numero < = proyectos.numero
/*
Salida
1000	AAAA800101   	5000	1998-07-08 00:00:00.000	165.00	5000	Vamos Mexico
1200	EEEE800101   	5000	2000-03-05 00:00:00.000	177.00	5000	Vamos Mexico
1400	AAAA800101   	5000	2002-03-12 00:00:00.000	382.00	5000	Vamos Mexico
1188 rows
*/

/* Uni�n (se ilustra junto con selecci�n) */
SELECT * FROM entregan WHERE clave=1450
UNION
SELECT * FROM entregan WHERE clave=1300
/*
Salida
1300	GGGG800101   	5005	2002-06-10 00:00:00.000	521.00
1300	GGGG800101   	5005	2003-02-02 00:00:00.000	457.00
1300	GGGG800101   	5010	2003-01-08 00:00:00.000	119.00
3 rows
*/
/*
�Cu�l ser�a una consulta que obtuviera el mismo resultado sin usar el operador Uni�n? Compru�balo. 
*/
SELECT *
FROM entregan
WHERE clave=1450 OR clave=1300
/*
Salida
1300	GGGG800101   	5005	2002-06-10 00:00:00.000	521.00
1300	GGGG800101   	5005	2003-02-02 00:00:00.000	457.00
1300	GGGG800101   	5010	2003-01-08 00:00:00.000	119.00
3 rows
*/

/* Intersecci�n (se ilustra junto con selecci�n y proyecci�n) */
SELECT clave FROM entregan WHERE numero=5001
INTERSECT
SELECT clave FROM entregan WHERE numero=5018
/*
Salida
1010
1 rows
*/

/* Diferencia (se ilustra con selecci�n) */
SELECT * FROM entregan
EXCEPT
SELECT * FROM entregan WHERE clave=1000
/*
Salida
1010	BBBB800101   	5001	2000-05-03 00:00:00.000	528.00
1010	BBBB800101   	5018	2000-11-10 00:00:00.000	667.00
1010	BBBB800101   	5018	2002-03-29 00:00:00.000	523.00
129 rows
*/

/* Producto cartesiano */
SELECT *
FROM entregan,materiales 
/*
Salida
1000	AAAA800101   	5000	1998-07-08 00:00:00.000	165.00	1000	Varilla 3/16	100.00
1000	AAAA800101   	5019	1999-08-08 00:00:00.000	254.00	1000	Varilla 3/16	100.00
1000	AAAA800101   	5019	2000-04-06 00:00:00.000	7.00	1000	Varilla 3/16	100.00
5808 rows
*/
/*
�C�mo est� definido el n�mero de tuplas de este resultado en t�rminos del n�mero de tuplas de entregan y de materiales?
Son 132 tuplas de entregan, 44 de materiales, se trata de una operaci�n de 132*44, que da 5808, los que hace el comando es
poner la primera tupla de entregan con la primera de materiales, luego la segunda tupla de entregan con la primera de materiales,
esto hasta terminar con la tabla de entregan y repetir el proceso con la segunda tupla de materiales hasta acabar con materiales.
*/

/* Construcci�n de consultas a partir de una especificaci�n */
-- obtener las descripciones de los materiales entregados en el a�o 2000.
SET DATEFORMAT DMY
SELECT Descripcion
FROM Materiales, Entregan
WHERE Materiales.Clave = Entregan.Clave
AND Fecha BETWEEN '1/1/2000' AND '31/12/2000'
/*
Salida
Varilla 3/16
Varilla 4/32
Varilla 4/32
28 rows
*/
/*
�Por qu� aparecen varias veces algunas descripciones de material?
Porque en ese a�o se entregaro m�s de una vez en distintas fechas
*/

/* Uso del calificador distinct */
-- Agrega la palabra distinct inmediatamente despu�s de la palabra select a la consulta que planteaste antes.
SET DATEFORMAT DMY
SELECT DISTINCT Descripcion
FROM Materiales, Entregan
WHERE Materiales.Clave = Entregan.Clave
AND Fecha BETWEEN '1/1/2000' AND '31/12/2000'
/*
Salida
Arena
Block
Cantera rosa
22 rows
*/
/*
�Qu� resultado obtienes en esta ocasi�n? 
Las descripciones de los materiales entregados en el 2000 sin repeticiones y ordenados en orden alfab�tico.
*/

/* Ordenamientos */
-- Obt�n los n�meros y denominaciones de los proyectos con las fechas y cantidades de sus entregas,
-- ordenadas por n�mero de proyecto, presentando las fechas de la m�s reciente a la m�s antigua. 
SELECT Proyectos.Numero, Denominacion, Fecha, Cantidad
FROM Proyectos, Entregan
WHERE Entregan.Numero = Proyectos.Numero
ORDER BY Proyectos.Numero DESC, Fecha DESC
/*
Salida
5019	Queretaro limpio	2003-01-12 00:00:00.000	107.00
5019	Queretaro limpio	2002-10-02 00:00:00.000	199.00
5019	Queretaro limpio	2002-02-08 00:00:00.000	665.00
5019	Queretaro limpio	2000-08-03 00:00:00.000	463.00
132 rows
*/

/* Operadores de cadena */
SELECT * FROM Materiales where Descripcion LIKE 'Si%'
-- �Qu� resultado obtienes?
/* Los materiales que empiezan con 'Si' */
/*
Salida
1120	Sillar rosa	100.00
1130	Sillar gris	110.00
2 rows
*/
-- Explica que hace el s�mbolo '%'.
/* Indica que puede haber m�s caracteres antes o despu�s de la condici�n dependiendo de su posici�n */
-- �Qu� sucede si la consulta fuera : LIKE 'Si' ?
SELECT * FROM Materiales where Descripcion LIKE 'Si'
/*
Salida

0 rows
*/
-- �Qu� resultado obtienes?
/* No devuelve nada */
-- Explica a qu� se debe este comportamiento.
/* Sin el porcentaje la condici�n se vuelve estricta y s�lo devolvera los materiales cuya descripci�n sea 'Si' */

DECLARE @foo varchar(40);
DECLARE @bar varchar(40);
SET @foo = '�Que resultado';
SET @bar = ' ���??? '
SET @foo += ' obtienes?';
PRINT @foo + @bar;

-- �Qu� resultado obtienes de ejecutar el siguiente c�digo?
/* �Que resultado obtienes? ���???  */
-- �Para qu� sirve DECLARE?
/* Declara atributos sin tablas */
-- �Cu�l es la funci�n de @foo?
/* Guarda una cadena de caracteres */
-- �Que realiza el operador SET?
/* Le asigna una valor al atributo */

-- Ahora explica el comportamiento, funci�n y resultado de cada una de las siguientes consultas:

SELECT RFC FROM Entregan WHERE RFC LIKE '[A-D]%';
/*
Muestra todos los RFC que empiezan con la A, B, C o D, los [] dan la condici�n de coincidencia y el % el resto del RFC
AAAA800101   
AAAA800101   
AAAA800101
72 rows
*/
SELECT RFC FROM Entregan WHERE RFC LIKE '[^A]%';
/*
Muestra todos los RFC excepto los que empiezan con A, los [] dan la condici�n de coincidencia y el % el resto del RFC
BBBB800101   
BBBB800101   
BBBB800101
114 rows
*/
SELECT Numero FROM Entregan WHERE Numero LIKE '___6';
/*
Selecciona todos los n�mero de 4 d�gitos que terminan en 6, tiene 3 _ y al final el 6
*/

/* Operadores l�gicos */
/* BETWEEN */
SELECT Clave,RFC,Numero,Fecha,Cantidad
FROM Entregan
WHERE Numero BETWEEN 5000 AND 5010;
/*
Salida
1000	AAAA800101   	5000	1998-07-08 00:00:00.000	165.00
1010	BBBB800101   	5001	2000-05-03 00:00:00.000	528.00
1020	CCCC800101   	5002	2001-07-29 00:00:00.000	582.00
60 rows
*/
-- �C�mo filtrar�as rangos de fechas?
/* Utilizando BETWEEN 'D/M/Y' AND 'D/M/Y' */

/* Exists */
SELECT RFC,Cantidad, Fecha,Numero
FROM [Entregan]
WHERE [Numero] BETWEEN 5000 AND 5010 AND
Exists ( SELECT [RFC]
FROM [Proveedores]
WHERE RazonSocial LIKE 'La%' and [Entregan].[RFC] = [Proveedores].[RFC] )
/*
Salida
AAAA800101   	165.00	1998-07-08 00:00:00.000	5000
CCCC800101   	582.00	2001-07-29 00:00:00.000	5002
AAAA800101   	86.00	1999-01-12 00:00:00.000	5008
16 rows
*/
-- �Qu� hace la consulta?
/*
Devuelve el RFC, Cantidad, Fecha y Numero de los Proveedores cuya raz�n social empieza con 'La' y su numero de entrega sea entre 5000 y 5010.
*/
-- �Qu� funci�n tiene el par�ntesis ( ) despu�s de EXISTS?
/*
Es para denotar una subconsulta.
*/

-- Tomando de base la consulta anterior del EXISTS, realiza el query que devuelva el mismo resultado, pero usando el operador IN
SELECT RFC,Cantidad, Fecha,Numero
FROM [Entregan]
WHERE [Numero] BETWEEN 5000 AND 5010 AND
RFC IN ( SELECT [RFC]
FROM [Proveedores]
WHERE RazonSocial LIKE 'La%' and [Entregan].[RFC] = [Proveedores].[RFC] )
/*
Salida
AAAA800101   	165.00	1998-07-08 00:00:00.000	5000
CCCC800101   	582.00	2001-07-29 00:00:00.000	5002
AAAA800101   	86.00	1999-01-12 00:00:00.000	5008
16 rows
*/

-- Tomando de base la consulta anterior del EXISTS, realiza el query que devuelva el mismo resultado,
-- pero usando el operador NOT IN. Realiza un ejemplo donde apliques alg�n operador : ALL, SOME o ANY.
SELECT RFC,Cantidad, Fecha,Numero
FROM [Entregan]
WHERE [Numero] BETWEEN 5000 AND 5010 AND
RFC NOT IN ( SELECT [RFC]
FROM [Proveedores]
WHERE RazonSocial NOT LIKE 'La%' and [Entregan].[RFC] = [Proveedores].[RFC] )
/*
Salida
AAAA800101   	165.00	1998-07-08 00:00:00.000	5000
CCCC800101   	582.00	2001-07-29 00:00:00.000	5002
AAAA800101   	86.00	1999-01-12 00:00:00.000	5008
16 rows
*/

/* ALL */

/* TOP */
SELECT TOP 2 * FROM Proyectos
-- �Qu� hace la siguiente sentencia? Explica por qu�.
/*
Devuelve las primeras 2 tuplas de la tabla Proyectos, esto porque se seleccion� la cantidad de tuplas seguido del operador TOP.
*/

SELECT TOP Numero FROM Proyectos
-- �Qu� hace la siguiente sentencia? Explica por qu�.
/*
Marca un error porque no se especifica cuantos elementos se quieren mostrar.
*/

/* Modificando la estructura de un tabla existente */
-- Agrega a la tabla materiales la columna PorcentajeImpuesto con la instrucci�n
ALTER TABLE materiales ADD PorcentajeImpuesto NUMERIC(6,2); 
-- A fin de que los materiales tengan un impuesto, les asignaremos impuestos ficticios basados en sus claves con la instrucci�n
UPDATE materiales SET PorcentajeImpuesto = 2*clave/1000;

SELECT * FROM Materiales
/*
Salida
1000	Varilla 3/16	100.00	2.00
1010	Varilla 4/32	115.00	2.02
1020	Varilla 3/17	130.00	2.04
44 rows
*/

-- �Qu� consulta usar�as para obtener el importe de las entregas es decir, el total en dinero de lo entregado,
-- basado en la cantidad de la entrega y el precio del material y el impuesto asignado?
SELECT * FROM Entregan

SELECT SUM((Cantidad*(Costo+Costo*(PorcentajeImpuesto/100)))) as 'Importe'
FROM Entregan, Materiales
WHERE Entregan.Clave = Materiales.Clave
/*
Salida
10953961.3574000000
1 rows
*/

/* Creaci�n de vistas */

/* Vista 1 */
CREATE VIEW ImporteEntregas AS
SELECT SUM((Cantidad*(Costo+Costo*(PorcentajeImpuesto/100)))) as 'Importe'
FROM Entregan, Materiales
WHERE Entregan.Clave = Materiales.Clave

SELECT * FROM ImporteEntregas
/*
Salida
10953961.3574000000
1 rows
*/

/* Vista 2 */
CREATE VIEW vista2 AS
SELECT * FROM Entregan

SELECT * FROM vista2
/*
Salida
1000	AAAA800101   	5000	1998-07-08 00:00:00.000	165.00
1000	AAAA800101   	5019	1999-08-08 00:00:00.000	254.00
1000	AAAA800101   	5019	2000-04-06 00:00:00.000	7.00
132 rows
*/

/* Vista 3 */
CREATE VIEW vista3 AS
SELECT RFC,Cantidad, Fecha,Numero
FROM [Entregan]
WHERE [Numero] BETWEEN 5000 AND 5010 AND
Exists ( SELECT [RFC]
FROM [Proveedores]
WHERE RazonSocial LIKE 'La%' and [Entregan].[RFC] = [Proveedores].[RFC] )

SELECT * FROM vista3
/*
Salida
AAAA800101   	165.00	1998-07-08 00:00:00.000	5000
CCCC800101   	582.00	2001-07-29 00:00:00.000	5002
AAAA800101   	86.00	1999-01-12 00:00:00.000	5008
16 rows
*/

/* Vista 4 */
CREATE VIEW vista4 AS
SELECT RFC FROM Entregan WHERE RFC LIKE '[A-D]%';

SELECT * FROM vista4
/*
Salida
AAAA800101   
AAAA800101   
AAAA800101
72 rows
*/

/* Vista 5 */
CREATE VIEW vista5 AS
SELECT * FROM Materiales where Descripcion LIKE 'Si%'

SELECT * FROM vista5
/*
Salida
1120	Sillar rosa	100.00
1130	Sillar gris	110.00
2 rows
*/

/* Ejercicios */
SELECT * FROM Entregan
SELECT * FROM Proyectos
SELECT * FROM Materiales
SELECT * FROM Proveedores

-- Los materiales (clave y descripci�n) entregados al proyecto "M�xico sin ti no estamos completos".
SELECT M.Clave, Descripcion
FROM Entregan E, Materiales M, Proyectos P
WHERE E.Clave = M.Clave
AND E.Numero = P.Numero
AND P.Denominacion = 'Mexico sin ti no estamos completos'
/*
Salida
1030	Varilla 4/33
1230	Cemento 
1430	Pintura B1022
3 rows
*/

-- Los materiales (clave y descripci�n) que han sido proporcionados por el proveedor "Acme tools".
SELECT M.Clave, Descripcion
FROM Entregan E, Materiales M, Proveedores P
WHERE E.Clave = M.Clave
AND E.RFC = P.RFC
AND P.RazonSocial = 'Acme tools'
/*
Salida
Como no existe el proveedor Acme tools no devuelve ning�n dato
0 rows
*/

-- El RFC de los proveedores que durante el 2000 entregaron en promedio cuando menos 300 materiales.
SET DATEFORMAT DMY
SELECT E.RFC, AVG(Cantidad) as 'Promedio de entrega'
FROM Entregan E, Proveedores P
WHERE E.RFC = P.RFC
AND Fecha BETWEEN '1/1/2000' AND '31/12/2000'
GROUP BY E.RFC
HAVING AVG(Cantidad) >= 300
ORDER BY 'Promedio de entrega' DESC
/*
Salida
HHHH800101   	489.500000
EEEE800101   	442.666666
BBBB800101   	392.400000
7 rows
*/

-- El Total entregado por cada material en el a�o 2000.
SET DATEFORMAT DMY
SELECT Descripcion, SUM(Cantidad) as 'Total entregado'
FROM Entregan E, Materiales M
WHERE E.Clave = M.Clave
AND Fecha BETWEEN '1/1/2000' AND '31/12/2000'
GROUP BY M.Descripcion
ORDER BY 'Total entregado' DESC
/*
Salida
Recubrimiento P1019	1415.00
Varilla 4/32		1195.00
Varilla 3/19		1063.00
22 rows
*/

-- La Clave del material m�s vendido durante el 2001. (se recomienda usar una vista intermedia para su soluci�n)
CREATE VIEW m1 AS
SELECT Clave, SUM(Cantidad) as 'Cantidad_vendida'
FROM Entregan
WHERE Fecha BETWEEN '1/1/2001' AND '31/12/2001'
GROUP BY Clave
Select * from m1

SELECT TOP 1 *
FROM m1
/*
Salida
1020	1060.00
1 rows
*/

-- Productos que contienen el patr�n 'ub' en su nombre.
SELECT Descripcion
FROM Materiales
WHERE Descripcion LIKE '%ub%'
/*
Salida
Recubrimiento P1001
Recubrimiento P1010
Recubrimiento P1019
12 rows
*/

-- Denominaci�n y suma del total a pagar para todos los proyectos.
SELECT Denominacion, SUM((Cantidad*(Costo+Costo*(PorcentajeImpuesto/100)))) as 'Total a pagar'
FROM Entregan E, Proyectos P, Materiales M
WHERE E.Clave = M.Clave
AND E.Numero = P.Numero
GROUP BY Denominacion
ORDER BY 'Total a pagar' DESC
/*
Salida
Queretaro limpio	1531722.8730000000
CIT Yucatan	1278989.4880000000
Restauraci�n de instalaciones del CEA	1121424.3890000000
20 rows
*/

-- Denominaci�n, RFC y RazonSocial de los proveedores que se suministran materiales al proyecto Televisa en
-- acci�n que no se encuentran apoyando al proyecto Educando en Coahuila (Solo usando vistas).
CREATE VIEW m2 AS
SELECT Denominacion, E.RFC, RazonSocial
FROM Proveedores P, Proyectos Pr, Entregan E, Materiales M
WHERE E.Clave = M.Clave
AND E.Numero = Pr.Numero
AND E.RFC = P.RFC
AND Denominacion NOT IN 
(SELECT Denominacion
FROM Proyectos
WHERE Denominacion = 'Educando en Coahuila')

SELECT * FROM m2

SELECT * FROM m2
WHERE Denominacion = 'Televisa en acci�n'
/*
Salida
Televisa en acci�n	CCCC800101   	La Ferre
Televisa en acci�n	CCCC800101   	La Ferre
Televisa en acci�n	AAAA800101   	La fragua
8 rows
*/

-- Denominaci�n, RFC y RazonSocial de los proveedores que se suministran materiales al
-- proyecto Televisa en acci�n que no se encuentran apoyando al proyecto Educando en Coahuila
-- (Sin usar vistas, utiliza not in, in o exists).
SELECT Denominacion, E.RFC, RazonSocial
FROM Proveedores P, Proyectos Pr, Entregan E, Materiales M
WHERE E.Clave = M.Clave
AND E.Numero = Pr.Numero
AND E.RFC = P.RFC
AND Denominacion = 'Televisa en acci�n'
AND Denominacion NOT IN 
(SELECT Denominacion
FROM Proyectos
WHERE Denominacion = 'Educando en Coahuila')
/*
Salida
Televisa en acci�n	CCCC800101   	La Ferre
Televisa en acci�n	CCCC800101   	La Ferre
Televisa en acci�n	AAAA800101   	La fragua
8 rows
*/

-- Costo de los materiales y los Materiales que son entregados al proyecto Televisa
-- en acci�n cuyos proveedores tambi�n suministran materiales al proyecto Educando en Coahuila.
SELECT Costo, Descripcion
FROM Proveedores P, Proyectos Pr, Entregan E, Materiales M
WHERE E.Clave = M.Clave
AND E.Numero = Pr.Numero
AND E.RFC = P.RFC
AND Denominacion = 'Televisa en acci�n'
AND P.RFC IN 
(SELECT RFC
FROM Entregan
WHERE Numero = 5008
INTERSECT
SELECT RFC
FROM Entregan
WHERE Numero = 5004)
/*
Salida
50.00	Ladrillos rojos
34.00	Tepetate
2 rows
*/

-- Nombre del material, cantidad de veces entregados y total del costo de dichas entregas por material de todos los proyectos.
SELECT * FROM Entregan
SELECT * FROM Proyectos
SELECT * FROM Materiales
SELECT * FROM Proveedores

SELECT Descripcion, COUNT(E.Clave) as 'Veces Entregada', SUM((Cantidad*(Costo+Costo*(PorcentajeImpuesto/100)))) as 'Total Costo', Denominacion
FROM Proyectos Pr, Entregan E, Materiales M
WHERE E.Clave = M.Clave
AND E.Numero = Pr.Numero
GROUP BY Descripcion, Denominacion
ORDER BY Denominacion ASC
/*
Salida
Cantera rosa	1	235376.9280000000	Ampliaci�n de la carretera a la huasteca
Pintura C1010	1	46737.6000000000	Ampliaci�n de la carretera a la huasteca
Recubrimiento P1010	2	220280.8080000000	Ampliaci�n de la carretera a la huasteca
87 rows
*/