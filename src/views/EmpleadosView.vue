<template>
  <div class="container ">

    <h2 class="my-4">Busqueda de Empleados</h2> 

   <div class="mb-3 row align-items-center">
      <label for="employee" class="col-sm-3 col-form-label">Consulta empleado por ID:</label>
      <div class="col-sm-6">
        <input type="text" class="form-control border-left-4 border-primary" id="employeeId" v-model="employeeId" placeholder="Ingrese el ID del empleado">
      </div>
      <div class="col-sm-3">
        <button class="btn btn-primary w-100" @click="buscar">Consultar</button>
      </div>
    </div>

    <div class="table-responsive" v-if="employees.length > 0">
      <h2 class="my-4">Detalles de  la  Busqueda</h2>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Salario</th>
            <th>Salario anual</th>
            <th>Años</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="employee in employees" :key="employee.id">
            <td>{{ employee.id }}</td>
            <td>{{ employee.employee_name }}</td>
            <td>{{ employee.employee_salary }}</td>
            <td>{{ employee.employee_salary_anual }}</td>
            <td>{{ employee.employee_age }}</td>
          </tr>
        </tbody>
      </table>
    </div>

</div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      employees: [],
      employeeId: '',
      modalActivo: false 
   
    };
  },
  methods: {
    buscar() {
      if (!isNaN(this.employeeId) && this.employeeId >= 1 && this.employeeId <= 24) {
        this.fetchEmployee();
      }  else {
        this.fetchEmployees();
    } 
    },
    fetchEmployees() {
      axios.get('http://localhost:8080/empoyee/buscar-empoyees')
        .then(response => {
          this.employees = response.data.data; // La propiedad 'data' contiene la lista de empleados
        })
        .catch(error => {
          alert('Espera a que el servidor procese los datos y intentar de nuevo');
          console.error('Error al obtener los empleados:', error);
        });
    },
    fetchEmployee() {
      axios.get(`http://localhost:8080/empoyee/buscar-empoyee?parametro=${this.employeeId}`)
        .then(response => {
          this.employees = [response.data];    
        })
        .catch(error => {
          alert('Espera a que el servidor procese los datos y intentar de nuevo');     
          console.error('Error al obtener los empleados:', error);
        });
    },

  },
};
</script>


<style>


</style>