# **Blanqueria Oeste**
---

## **_Descripcion_**
---

Este repositorio contiene el proyecto desarrollado por Laura Romero, durante el curso de `React JS` de `Coderhouse`.

La aplicación consiste en un ecommerce en el cual se puede filtrar los productos de acuerdo a categorías, y acceder a ver el detalle de cada producto. Los mismos pueden ser agregados al carrito, con la opcion de eliminar cada uno de los productos escogidos, vaciar el carrito o finalizar la "compra". En caso de querer concretar el pedido, debera completar un formulario con sus datos, simulando un proceso de compra exitoso. Con lo que obtendra un Codigo de la compra.


Puede visitarse el deploy del proyecto (realizado en Vercel) a traves del siguiente link:

https://react-laurabe18.vercel.app/

![](./React%20App.gif)

Se puede correr el proyecto de manera local, siguiendo los siguientes pasos:

* Descargá el proyecto de este repositorio.
* Abrí el directorio del proyecto en tu editor de código favorito.
* Corré el comando **_npm start_**.
* Abrí http://localhost:3000 para verlo en tu navegador.

## **_Librerías utilizadas_**
---

* **React-router-dom:** Paquete para implementar routing dinámico en una web app. En este proyecto, se ha utilizado para el routing. Puedes añadirlo a tu proyecto con **_npm add react-router-dom_**.

* **Bootstrap:** Framework que facilita el proceso de desarrollo de los sitios web responsivos y orietados a los dispositivos moviles, consta de script basados en  HTML, CSS y JS. Aqui la he utilizado (entre otro lugares) en las primeras cards de productos y orden de la compra. Puedes añadirlo a tu proyecto de la siguiente manera:
    * CSS only, en el head:  `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">`*
    *  Antes de cerrar la etiqueta body: `<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>`*

* **Formik:** Librería utilizada para la validación y funcionamiento del forms. En este proyecto, se implemento en el form de envío de pedido (checkout). Añadilo a tu proyecto con **_npm add formik_**.

* **MaterialUI:** Se incursiono en esta librería de componentes para agilizar el proceso de desarrollo y estilado de la aplicación (ya que en lo personal siempre he utilizado Bootstrap). En este proyecto lo utilice para el navegador(Navbar), card (detalle de los productos), carrito con los productos seleccionados y pie de pagina (footer). Añade a tu proyecto:
    * *npm install @mui/material @emotion/react @emotion/styled*
    * *npm install @mui/material @mui/styled-engine-sc styled-components*
    * *npm install @mui/icons-material*
    * *`<link
      rel="stylesheet"
      href="https://fonts.googleapis.com/icon?family=Material+Icons"/>`*
* **Firebase:** En Firebase se almacenaron, el listado de los productos y las órdenes generadas de las compras(pedidos).
* **LocalStorage:** Se utilizó para mantener el carrito de los usuarios en sus dispositivos, en el caso de que no hayan finalizado su compra, a fin de mejorar la experiencia de uso.
