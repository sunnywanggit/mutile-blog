<template>
  <div id="detail">
    <section class="user-info">
      <div class="avatar">
        <el-avatar :size="70" :src="user.avatar"></el-avatar>
      </div>
      <h3>{{title}}</h3>
      <div class="user">
        <span class="name"><router-link :to="`/user/${user.id}`" style="color: #A4A3A4;">{{user.username}}</router-link></span>
        发布于{{friendlyDate(createdAt)}}
      </div>
    </section>
    <section class="article" v-html="markdown">

    </section>
  </div>
</template>

<script src="./template.js"></script>

<style lang="less">
  @import "../../assets/base.less";
  @import "./template.less";

</style>

