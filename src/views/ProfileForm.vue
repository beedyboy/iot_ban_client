<template>
    <div class="backdrop">
      <div class="form-container">
  <form class="form-page" @submit="submit">
    <div class="form-control">
        <label> First Name </label>
        <input 
         v-model="first_name"
         type="text"
         name="text"
         />
    </div>
    <div class="form-control">
        <label> Last Name </label>
        <input 
        v-model="last_name"
        type="text"
        name="Last"
        />
    </div>
    <div class="form-control">
          <label>Age  </label>
          <input 
        v-model="age"
         type="text"
         name="text"
         />
        </div>
    <div class="form-control">
        <label> Address </label>
        <input 
        v-model="address"
        type="text"
        name="text"
        />
    </div>
    <div class="form-control">
        <label> Gender </label>
        <input 
        v-model="gender"
        type="text"
        name="text"
        />
    </div>
    <div class="create">
          <button type="submit">
   
          </button>
        </div>
  </form>
  
    </div>
    </div>
</template>


<script>
export default {
    
}
</script>


<style scoped>

    * {
        margin: 0;
        padding: 0;
        overflow: visible;
      
      }
      
      .backdrop {
        top: 0;
        position: fixed;
        background: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100%;
    }

      .form-container {

        margin: 100px auto;
        /* border: 5px solid red; */
        padding: 10px;
        padding-top:5%;
        align-items: center;
        text-align: center;
        background: #e8ecf5;
        width: 30%;
        height: 70%;
        border-radius: 20px;
       
      }
      .form-page {
          width: 70%;
          margin: 15px auto;
          /* overflow-y: scroll; */
      }
      
      .form-control {
          /* margin: 15px 0; */
            display:flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
      }
      
      .form-control label {
          
          margin-right: 30%; 
          font-size: 25px;
          
      } 
      
      .form-control input {
          
          width :60%;
          height: 30px;
          border-radius: 10px;
          padding: 5px;
          border: 2px solid #1424B3;
          
      
      }

        
      
</style>