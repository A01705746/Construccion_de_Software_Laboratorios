/* Creación de tablas */
CREATE TABLE Materiales
(
  Clave numeric(5),
  Descripcion varchar(50),
  Costo numeric(8,2)
)

CREATE TABLE Proveedores
(
  RFC char(13),
  RazonSocial varchar(50),
)

CREATE TABLE Proyectos
(
  Numero numeric(5),
  Denominacion varchar(50),
)

CREATE TABLE Entregan
(
  Clave numeric(5),
  RFC char(13),
  Numero numeric(5),
  Fecha datetime,
  Cantidad numeric(8,2)
)

/* Ayuda */
sp_help materiales

/* Borrado de tablas */

drop table Materiales
drop table Proveedores
drop table Proyectos
drop table Entregan

/* Verificación de la existencia de las tablas */
select * from sysobjects where xtype='U'