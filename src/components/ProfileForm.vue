<template>

    <div class="form-container">


        <form class="form-page" @submit="submit">
            <div class="form-control">
                <label> First Name </label>
                <input v-model="firstName" type="text" name="text" />
            </div>

            <div class="form-control">
                <label> Last Name </label>
                <input v-model="lastName" type="text" name="Last" />
            </div>
            <div class="form-control">
                <label>Age</label>
                <input v-model="age" type="text" name="text" />
            </div>
            <div class="form-control">
                <label> Address </label>
                <input v-model="address" type="text" name="text" />
            </div>
            <div class="form-control">
                <label> Gender </label>
                <input v-model="gender" type="text" name="text" />
            </div>

            <div class="save-form">
                <button type="submit">
                    {{ $store.state.account.updating ? 'saving...' : 'Save Form '}}
                </button>
            </div>
        </form>

    </div>
    <!-- </div> -->
</template>


<script>
    import { useStore } from 'vuex';
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
    setup() {
    const store = useStore()
    const updateProfile = (payload) => store.dispatch('account/updateProfile', payload)
    return {
      updateProfile
    }
    },
    methods: {
        async submit(e) {
            e.preventDefault(); 
            if (this.firstName === "" || this.lastName === "" || this.age === "" || this.address === "" || this.gender === "") {
                this.$toast.warning("Please enter your details correctly!");
            } else {
                this.sending = true
                const newProfile = {
                    firstname: this.firstName,
                    lastname: this.lastName,
                    age: this.age,
                    address: this.address,
                    gender: this.gender,
                };
                this.updateProfile(newProfile);
                // console.log(newProfile)
                // const response = await fetch('https://ban-iot.herokuapp.com/api/profile', {
                //     method: 'PUT',
                //     headers: {
                //         'Authorization': `Bearer ${localStorage.getItem("token")}`,
                //         'Content-type': 'application/json',
                //     },
                //     body: JSON.stringify(newProfile)
                // })
                // const data = await response.json();
                // if (response.status === 200) {
                //     console.log({ data });
                //     this.$toast.success(data.message);
                //     this.firstName = "";
                //     this.lastName = "";
                //     this.age = "";
                //     this.address = "";
                //     this.gender = "";
                // } else {
                //     this.$toast.error("Error registering user");
                // }
                // this.sending = false;
            }

        }

    }

}

</script>


<style scoped>  
.form-container { 
    margin: 20px 50px; 
    /* padding: 10px; */ 
    align-items: center;
    text-align: center;
    background: #e8ecf5;
    width: calc(100% - 100px);
    /* width: 80%; */
    /* height: 90%; */
    border-radius: 20px;

} 

.form-page {
    width: 70%;
    margin: 15px auto;
    /* margin-top: 15%; */
    padding-bottom: 15%;

}

.form-control {

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
}

.form-control label {

    /* border: 5px solid yellow; */
    margin-right: 53%;
    font-size: 28px;


}

.form-control input {

    width: 70%;
    height: 30px;
    border-radius: 10px;
    padding: 5px;
    border: 2px solid #1424B3;


}

button {
    width: 45%;
    height: 50px;
    margin-top: 40px;
    /* margin-bottom: 30px; */
    background-color: #1424b3;
    border-radius: 10px;
    color: white;
    text-align: center;
    font-size: 20px;
    font-weight: 200;
}
</style>