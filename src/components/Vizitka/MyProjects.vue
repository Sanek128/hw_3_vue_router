<template>

    <div id = "toDo">
      <h3 style="text-align: center"> MY TO DO LIST </h3>
      <ol>
        <li 
          v-for="(myToDo, index) in toDo" :key="index">
          <button @click="delToDo(index)" style="margin-top: 2px"> Выполено </button>
          {{ myToDo }}
        </li>
      </ol>
      <div>
        <button @click="newToDo" :class="none" style="margin-right: 3px"> Добавить задачу </button>
        <h2 v-if="x" style = "background-color: red; text-align: center"> !!!  Слишком много задач, выполни что-то  !!! </h2>
        <input v-model = "addToDo" type = "text" style="width: 300px" placeholder = "Новая задача">
      </div>
    </div>

</template>

<script>

export default {
  name: 'MyProjects',
  
  data() {
    return {
      message: 'Test message',

      toDo: ['Отжаться от пола 100 раз за день','Сделать домашку по vue', 
            'Посмотреть пропущенный урок английского','Пробежать 5 км вечером' ],
      // addToDo: '',
      x: false,
    }
  },

  methods: {

    delToDo (index)
    {
      this.toDo.splice (index, 1)
      if (this.toDo.length < 10) 
      this.x = false;
    },
    
    newToDo() {
      if (this.addToDo.length > 0)
        {
          this.toDo.push (this.addToDo)
          this.addToDo = '';
        }
      if (this.toDo.length >= 10) 
      this.x = true;
    }
  },

  computed: {

    none() {
      if (this.toDo.length >= 10)
        {
          return 'none'; 
        }
          else 
          { return ''}
    }
  }
}

</script>

<style>

.none {display: none}

#toDo {
  width: 500px;
  box-shadow: 0 3px 20px #0f0f0f23;
  padding: 10px;
  margin: 20px 0 0 20px;
}

</style>