<template>
  <form class="was-validated">
    <h1>Register</h1>
    <div class="buttons">
      <b-button variant="primary" @click="addPerson">Add</b-button>
    </div>
    <div v-for="(person, index) in register" :key="index" class="person">
      <b-form-input class="form-control is-invalid" v-model="person.name" placeholder="Name" required/>
      <b-form-input class="form-control is-invalid" v-model.number="person.age" type="number" placeholder="Age" style="width: 20%" required/>
      <b-button variant="danger" @click="deletePerson(index)">x</b-button>
    </div>
    <div class="buttons">
      <b-button @click="resetRegister">Reset</b-button>
      <b-button variant="success" @click="saveRegister">Save</b-button>
    </div>
  </form>
</template>

<script>
import { fetchRegister, saveRegister } from './api';

export default {
  data() {
    return {
      register: []
    };
  },
  created() {
    this.loadRegister();
  },
  methods: {
    async loadRegister() {
      try {
        this.register = await fetchRegister();
      } catch (error) {
        // Handle error
      }
    },
    addPerson() {
      this.register.unshift({name: '', age: null});
    },
    async deletePerson(index) {
      this.register.splice(index, 1);
    },
    resetRegister() {
      this.loadRegister();
    },
    async saveRegister() {
      try {
        // validateFields();
        await saveRegister(this.register);
        console.log('Register saved successfully');
      } catch (error) {
        // Handle error
      }
    }
  }
};
</script>

<style scoped>
h1 {
  color: #ffffff;
}

p {
  font-size: 18px;
}

.person {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.person input {
  margin-right: 10px;
  padding: 5px;
}
.person button {
  padding: 5px 10px;
  cursor: pointer;
}
.buttons button {
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 10px 20px;
  cursor: pointer;
}

.is-invalid, .was-validated .form-control:invalid {
  border-width: 3px;
}
</style>