<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&family=Source+Serif+4:opsz,wght@8..60,400;8..60,500;8..60,600;8..60,700&display=swap" rel="stylesheet">

<div class="container">


   <nav>
        <div class="logo">
        <p>IotBan.</p>
        </div>
        <ul>
        <li><a href="" class="medical-history"> Medical History </a></li>
        <li><a href=""> Search Doctor </a></li>
        <li><a href=""> Profile </a></li>
        <li><a href=""> Log Out </a></li>
      
        </ul>
   </nav>


    <div class="med-bar">
        <h5> Patient's Treatment History </h5> 
    </div>
<hr>

    <div class="tab">
    <table style="width:50%">
        <tr>
            <th>Doctor</th>
            <th>Health Case</th>
            <th> Pulse (bpm) </th>
            <th>Date & Time</th>
        </tr>
        <tr>
            <td> Doctor Bello</td>
            <td> Hypertension </td>
            <td> 25 (bpm) </td>
            <td> 17-01-2022<br><br>8:35am </td>
        </tr>
        <tr>
            <td> Doctor Richard </td>
            <td>  High Blood Pressure</td>
            <td> 140/90mmHg </td>
            <td> 26-04-2022<br><br>3:25pm </td>
        </tr>
        <tr>
            <td> Doctor Hassan </td>
            <td> High Body Temperature</td>
            <td> germany</td>
            <td> 11-11-2022<br><br>11:00am </td>
        </tr>
        <tr>
            <td> Doctor Esther</td>
            <td> Diabetes </td>
            <td> 200mg/dl </td>
            <td> 07-07-2022<br><br>10:45am </td>
        </tr>
        
        

    </table>
    </div>


</div>

</template>






<script>
export default {
//  eslint-disable-next-line vue/multi-word-component-names
 name: 'Records',
}
</script>






<style>
* {
  margin: 0;
  padding: 0;
  overflow:visible;
}

.container {
  width: 96.5%;
  height: 100vh;
 
}

nav {
  width: 90%;
  height: 65px;
  line-height: 65px;
  padding: 0px 100px;
  z-index:1;
  background-color:#1424B3;
 
}

nav .logo{
  font-size: 25px;
  font-weight: 700;
  letter-spacing: 1.5px;
  color: white;
}

nav .logo p {
  float: left;
}

nav ul {
  float: right;
}

nav ul li {
  display: inline-block;
  list-style: none;
}

nav ul li a {
  color:white;
  text-decoration: none;
  font-size: 20px;
  font-weight: 400;
  padding: 0 32px;
}

nav ul li .medical-history {
  font-size: 22px;
  font-weight: 500;
}

.med-bar {
    margin-left: 40%;
    margin-top: 70px;
    margin-bottom: 20px;
    font-size: 30px;
    line-height: 5px;
}

hr {
    width: 35%;
    margin-left: 33%;
    
}


table, th, td{
    border: 2px solid #1424B3;
  border-collapse: collapse;
 
}


th, td {
  padding-top: 10px;
  padding-bottom: 20px;
  padding-left: 30px;
  padding-right: 40px;
}

.tab table {
    margin-top: 50px;
    margin-left: 350px;
}








</style>