<template>
  <div id="app">    
     
  <nav >  
  <b-row class="d-flex flex-row" >
    <b-col md="1" class=" d-flex text-center  flex-column">
    </b-col>
    <b-col md="2" >
      <img alt="Vue logo" src="./assets/amaris.png">
    </b-col>
    <b-col md="6" class=" d-flex text-center  flex-column">
      
    </b-col>
    <b-col md="3" class=" d-flex text-center  flex-column justify-content-center">
      <div class="d-flex flex-row justify-content-center">
        <router-link to="/">Acerca</router-link> &nbsp;&nbsp;|
        <router-link to="/Empleados">&nbsp; Empleados</router-link> &nbsp;&nbsp;
      </div>
    </b-col>
    </b-row>
  </nav>
  <router-view/>
 
  <footer class="d-flex justify-content-center align-items-center footer">
    <div class="container">
      <div class="row">      
        <div class="col-md-4">
          <h4>Realizado por:</h4>
          <p>Juan steven Sanchez Castro</p>
        </div>
        <div class="col-md-4">
          <h4>Correo:</h4>  
          <p>steven.jssc@gmail.com</p>  
        </div>
        <div class="col-md-4">
          <h4>Celular</h4>
          <p>3122057069</p>        
        </div>
      </div>
    </div>
  </footer> 

  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Arial;
  color: #070707;
}

nav {
  padding: 20px;
  background-color: #816474a2;
  background-color: rgb(40, 39, 117);

  a {
    font-weight: bold;
    color: #ffffff;
    &.router-link-exact-active {
      color: rgb(206, 201, 201);
    }
  }
}

footer {
  padding: 20px;
  background-color: rgb(40, 39, 117);
  color: rgb(206, 201, 201);
}

</style>
