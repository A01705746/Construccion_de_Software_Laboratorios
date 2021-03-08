/* Ejercicio 1 ------------------------------------------------------------------------------------- */

/* Borrado */
drop TABLE Entregan
drop TABLE Materiales
drop TABLE Proyectos
drop TABLE Proveedores

/* Crear tablas */
--IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Materiales')

CREATE TABLE Materiales
(
  Clave numeric(5) not null,
  Descripcion varchar(50),
  Costo numeric (8,2)
)

--IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Proveedores')

CREATE TABLE Proveedores
(
  RFC char(13) not null,
  RazonSocial varchar(50)
)

--IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Proyectos')

CREATE TABLE Proyectos
(
  Numero numeric(5) not null,
  Denominacion varchar(50)
)

--IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Entregan')

CREATE TABLE Entregan
(
  Clave numeric(5) not null,
  RFC char(13) not null,
  Numero numeric(5) not null,
  Fecha DateTime not null,
  Cantidad numeric (8,2)
)

/* Carga de datos */
BULK INSERT a1705746.a1705746.[Materiales]
  FROM 'e:\wwwroot\rcortese\materiales.csv'
  WITH
  (
    CODEPAGE = 'ACP',
    FIELDTERMINATOR = ',',
    ROWTERMINATOR = '\n'
  )

BULK INSERT a1705746.a1705746.[Proyectos]
  FROM 'e:\wwwroot\rcortese\Proyectos.csv'
  WITH
  (
    CODEPAGE = 'ACP',
    FIELDTERMINATOR = ',',
    ROWTERMINATOR = '\n'
  )

BULK INSERT a1705746.a1705746.[Proveedores]
  FROM 'e:\wwwroot\rcortese\Proveedores.csv'
  WITH
  (
    CODEPAGE = 'ACP',
    FIELDTERMINATOR = ',',
    ROWTERMINATOR = '\n'
  )

SET DATEFORMAT dmy -- especificar formato de la fecha

BULK INSERT a1705746.a1705746.[Entregan]
  FROM 'e:\wwwroot\rcortese\Entregan.csv'
  WITH
  (
    CODEPAGE = 'ACP',
    FIELDTERMINATOR = ',',
    ROWTERMINATOR = '\n'
  )

/* Ejercicio 2 ------------------------------------------------------------------------------------- */

/* Nuevo registro */
/* Inconsistencia: clave repetida */
INSERT INTO Materiales values(1000, 'xxx', 1000)

/* Eliminar registro */
Delete from Materiales where Clave = 1000 and Costo = 1000

/* Creación de llave primaria a través de un constraint */
ALTER TABLE Materiales add constraint llaveMateriales PRIMARY KEY (Clave)

/* Intentar insertar el mismo registro -> Violación de restricción */
INSERT INTO Materiales values(1000, 'xxx', 1000)

/* Restricciones de Materiales */
sp_helpconstraint Materiales

/* Llaves primarias */
ALTER TABLE Proveedores add constraint llaveProveedores PRIMARY KEY (RFC)
ALTER TABLE Proyectos add constraint llaveProyectos PRIMARY KEY (Numero)
ALTER TABLE Entregan add constraint llaveEntregan PRIMARY KEY (Clave, RFC, Numero, Fecha)

/* Eliminar constraint
ALTER TABLE tableName drop constraint ConstraintName  */

/* Ejercicio 3 ------------------------------------------------------------------------------------- */

SELECT * from Materiales
SELECT * from Proveedores
SELECT * from Proyectos
SELECT * from Entregan

INSERT INTO entregan values (0, 'xxx', 0, '1-jan-02', 0)
/* Eliminar registro inconsistente */
Delete from Entregan where Clave = 0

ALTER TABLE entregan add constraint cfentreganclave foreign key (Clave) references Materiales(Clave)
ALTER TABLE entregan add constraint cfentreganRFC foreign key (RFC) references Proveedores(RFC)
ALTER TABLE entregan add constraint cfentreganNumero foreign key (Numero) references Proyectos(Numero)

sp_helpconstraint Entregan

/* Ejercicio 4 ------------------------------------------------------------------------------------- */

INSERT INTO entregan values (1000, 'AAAA800101', 5000, GETDATE(), 0)
/* Borrar dato inconsistente */
Delete from Entregan where Cantidad = 0

/* No permitir cantidades nulas */
ALTER TABLE entregan add constraint cantidad check (cantidad > 0)

sp_helpconstraint Materiales
sp_helpconstraint Proyectos
sp_helpconstraint Proveedores
sp_helpconstraint Entregan