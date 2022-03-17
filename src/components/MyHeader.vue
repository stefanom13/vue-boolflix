<template>
  <div class="hello">
    <header class="headerSearch">
      <div class="container">

        <div class="cont-img">
          <figure>
            <img width="130px" src="../assets/Myimg/Boolflix.svg" alt="">
         </figure>
        </div>

        <div class="cont-input"> 
          <input type="text" v-model="value" placeholder="Inserisci qui il titolo/serietv">
          <button @click="getValue">Search</button>
        </div>
      

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
  
  background-color:rgb(17, 16, 16);
  min-height:80px;

  .container{
      display:flex;
      align-items: center;
      justify-content: space-between;
      flex-grow:1;

      
      h1{
        text-align:center;
      }
      .cont-input{
      padding: 0px 10px;
      display:flex;
      flex-direction:column;
      align-items: center;
      gap: 5px;

        input{
          max-width:300px;
          border:2px solid red;
          padding:8px;
          border-radius:999px;
        }

        button{
          width:100px;
          border-radius: 50px;
        }

      }
      figure{
        display:flex;
        justify-content:center;
        align-items:center;

        img{
          padding:10px;
        }
      }
     
  }

}

</style>
