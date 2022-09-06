<template>
    <div class="backdrop">
      <div class="form-container">

    <span 
  
    type="submit" class="close"> &times; 
</span>
      
  <form class="form-page" @submit="submit">
    <div class="form-control">
        <label> First Name </label>
        <input 
         v-model="firstname"
         type="text"
         name="text"
         />
    </div>
    <div class="form-control">
        <label> Last Name </label>
        <input 
        v-model="lastname"
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

    <div class="save-form">
          <button type="submit"> 
            {{ sending ? 'saving...' : 'Save Form '}}
        </button>
    </div>
  </form>
  
    </div>
    </div>
</template>


<script>
export default {
    name: "ProfileForm",

    data() {
        return {
            firstName: "",
            lastName: "",
            age: "",
            address: "",
            gender: "",
            sending: false,
        };
    },
    methods : {
        async submit(e) {
            e.preventDefault();
            if (this.firstName === "" || this.lastName === "" || this.age === "" || this.address === "" || this.gender) {
                alert("Please enter your details correctly")
            }else{
                this.sending = true
                const newProfile =  {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    age: this.age,
                    address: this.address,
                    gender: this.address,
                };
                console.log (newProfile)
                
                const response =   ({
                method: 'PUT REQUEST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`,
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(newProfile)
                })
                const data = await response.json();
                {
                console.log({ data })
                alert(data.message)
                }
            }
            
        }
        
    }
   
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
        /* padding-top:5%; */
        align-items: center;
        text-align: center;
        background: #e8ecf5;
        width: 30%;
        height: 80%;
        border-radius: 20px;
       
      }
    
    .close {
        color: red;
        /* border: 5px solid red; */
        float: right;
        font-size: 50px;
        font-weight:bolder;
        margin-right: 5%;
        }

        .close:hover,
        .close:focus {
        color: #000;
        text-decoration: none;
        cursor: pointer;
        }
 

      .form-page {
          width: 70%;
          margin: 15px auto; 
          /* border: 5px solid red; */
          margin-top: 15%;
         
      }
      
      .form-control {

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

        button {
        width: 45%;
        height: 50px;
        margin-top: 20px;
        /* margin-bottom: 30px; */
        background-color: #1424b3;
        border-radius: 10px;
        color: white;
        text-align: center;
        font-size: 20px;
        font-weight: 200;
        }
      
      
</style>