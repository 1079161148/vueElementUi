<template>
  <div class="wrap_box">
    <p class="tip">Collapse折叠面板组件以及其常用属性方法</p>
    <p class="tip" style="color: red">第一种:可同时展开多个面板，面板之间不影响</p>
    <div class="box1">
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="折叠一" name="1">
          <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
          <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
        </el-collapse-item>
        <el-collapse-item title="折叠二" name="2">
          <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
          <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
        </el-collapse-item>
        <el-collapse-item title="折叠三" name="3">
          <div>简化流程：设计简洁直观的操作流程；</div>
          <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
          <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
        </el-collapse-item>
        <el-collapse-item title="折叠四" name="4">
          <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
          <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
        </el-collapse-item>
      </el-collapse>
    </div>
    <p class="tip" style="color: red">第二种:自定义面板标题除了可以通过 title 属性以外，还可以通过具名 slot 来实现自定义面板的标题内容，以实现增加图标等效果。</p>
    <div class="box1">
      <el-collapse accordion>
        <el-collapse-item>
          <template slot="title">
            折叠带图标<i class="header-icon el-icon-info"></i>
          </template>
          <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
          <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
        </el-collapse-item>
        <el-collapse-item title="折叠一">
          <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
          <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
        </el-collapse-item>
        <el-collapse-item title="折叠二">
          <div>简化流程：设计简洁直观的操作流程；</div>
          <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
          <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
        </el-collapse-item>
        <el-collapse-item title="折叠三">
          <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
          <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
        </el-collapse-item>
      </el-collapse>
    </div>
    <div class="box1">
        <el-button type="primary" @click="goCarousel">去跑马灯组件</el-button>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      activeNames: ['1']
    }
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
    goCarousel(){
        this.$router.push({name:carousel})
    }
  }
}

</script>
<style lang="scss" scoped>
.wrap_box {
  width: 100%;
  .tip {
    padding: 10px 50px;
  }
  .box1 {
    padding: 20px 50px;
  }
}

</style>
