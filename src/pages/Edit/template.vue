<template>
  <div id="edit">
    <el-input
      class="title"
      type="textarea"
      :rows="1"
      v-model="title"
    >
    </el-input>
    <el-input
      type="textarea"
      :rows="1"
      placeholder="请补充文章描述"
      v-model="description">
    </el-input>
    <el-input
      type="textarea"
      class="content"
      :autosize="{ minRows: 14, maxRows: 20}"
      placeholder="请补充文章内容"
      v-model="content">
    </el-input>
    <el-button type="success" @click="onCommit">提交修改</el-button>
  </div>
</template>

<script src="./template.js"></scripts>

  <style lang="less">
    @import "../../assets/base.less";
    @import "./template.less";
  </style>

