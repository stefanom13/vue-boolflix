<template>
  <div class="hello">
    <header class="headerSearch">
      <div class="container">
        <input type="text" v-model="value" placeholder="cerca qui...">
        <button @click="getValue">Search</button>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name:'MyHeader',
  data(){
    return {
      value:"",
    }
  },
  methods: {
    getValue(){
      this.$emit("getEmettiValore",this.value);
    }
  }
  
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.headerSearch{
  display:flex;
  align-items:center;
  justify-content:center;
  background-color:greenyellow;
  min-height:100px;

  .container{
    
    input{
      width:300px;
      border:2px solid red;
     
    }
  }

}

</style>
