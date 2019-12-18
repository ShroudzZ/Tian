<template>
  <div class="avatar" :class="{avatar__selected:!!selected}">
    <div class="avatar-face">
      <img src="../assets/logo.png" alt="face">
    </div>
    <h2 class="avatar-name">Hello,{{name}}</h2>
    <p class="avatar-tips">
      Looks like feed good. <br>
      You have {{ todayTasks.length }}  tasks to do today
    </p>
    <p class="avatar-date">
      TODAY：{{today | dateString}}
    </p>
  </div>  
</template>

<script>
import {mapState,mapGetters} from 'vuex'
export default {
    name:"Avatar",
    data(){
      return{
        name:"Tian",
        today:new Date()
      }
    },
    computed:{
      ...mapState(['selected']),
      ...mapGetters(['todayTasks'])
    },
    filters:{
      dateString(val){
        return val.toDateString().toUpperCase().replace(/(\s\d{4})$/,',$1')
      }
    }
}
</script>

<style lang="less">
.avatar{
  display:flex;
  padding: 0 40px;
  height: 300px;
  justify-content:flex-end;
  flex-direction: column;
  transition: all .5s ease;

  .avatar-face{
    width: 44px;
    height: 44px;
    border-radius: 100%;
    overflow: hidden;
    box-shadow: 0 5px 10px rgba(0, 0, 0, .2);

    img{
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  .avatar-name{
    margin-top: 32px;
    padding: 0 6px;
    font-size: 32px;
    letter-spacing: 1px;
    font-weight: 300;
  }

  .avatar-tips{
    margin-top: 16px;
    padding: 0 6px;
    font-size: 13px;
    font-weight: 100;
    opacity: .8;
    line-height: 1.6em;
  }

  .avatar-date{
    margin-top: 44px;
    margin-bottom:16px;
    padding:0 6px;
    font-size: 14px;
  }
}

.avatar__selected{
  transform: translate3d(0,20px,0);
  opacity: 0;
}
</style>