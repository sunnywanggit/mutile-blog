<template>
  <div id="create">
    <el-input
      type="textarea"
      class="title"
      :rows="1"
      placeholder="请输入文章标题"
      v-model="title"
      v-bind:class="{wordlimit:titleLimit}"
    >
    </el-input>
    <p>你还能输入{{countTitleNumber}}个字</p>
    <el-input
      type="textarea"
      :rows="1"
      v-bind:class="{desclimit:descLimit}"
      placeholder="请输入文章梗概"
      v-model="description">
    </el-input>
    <p>你还能输入{{countDescNumber}}个字</p>
    <el-input
      type="textarea"
      :autosize="{ minRows: 14, maxRows: 20}"
      placeholder="请输入文章内容"
      v-model="content">
    </el-input>
    <div class="foot">
      <div class="button">
        <el-button type="success" @click="onCreate" >提交文章</el-button>
      </div>
      <div class="show-to-home">
        <label v-if="value">展示到首页</label>
        <label v-if="!value">不展示到首页</label>
        <el-switch
          v-model="value"
          active-color="#13ce66"
          inactive-color="#ff4949">
        </el-switch>
      </div>
    </div>
  </div>
</template>

<script src="./template.js"></script>

<style lang="less">
  @import "../../assets/base.less";
  @import "./template.less";

</style>
