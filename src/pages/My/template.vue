<template>
  <div>
    <div class="my" >
      <!--    <div class="figure">-->
      <!--      <el-avatar :size="60" class="img" :src="user.avatar"></el-avatar>-->
      <!--      <figcaption class="name">{{user.username}}</figcaption>-->
      <!--    </div>-->
      <section v-for="blog in blogs" class="blogs">
        <div class="blog">
          <h3 class="title"><router-link :to="`/detail/${blog.id}`">{{blog.title}}</router-link></h3>
          <span class="year">{{splitDate(user.createdAt).year}}年{{splitDate(user.createdAt).month}}月{{splitDate(user.createdAt).date}}日</span>
          <span class="month"></span>
          <span class="day"></span>
          <p><router-link :to="`/detail/${blog.id}`">{{blog.description}}</router-link></p>
        </div>
        <div class="btns">
          <router-link :to="`/edit/${blog.id}`" style="color:#69bb3c;">编辑</router-link>
          <a href="#" @click.prevent="onDelete(blog.id)" style="color:red;">删除</a>
        </div>
      </section>
    </div>
    <section>
      <el-pagination
        @current-change="onPageChange"
        :current-page="page"
        layout="prev, pager, next"
        :total="total">
      </el-pagination>
    </section>
  </div>

</template>

<script src="./template.js"></script>

<style lang="less">
@import "../../assets/base.less";
@import "./template.less";
</style>
