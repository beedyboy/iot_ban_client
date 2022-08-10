<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/multi-word-component-names -->

<template>
 


<div class="container">


    <div class="med-bar">
        <!-- <h5> Patient's Treatment History </h5>  -->
        {{this.$route.path}}
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
 name: 'Records',
  
};

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