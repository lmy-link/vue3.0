<template>
  <div class="hello">字体</div>
  <svg-icon icon-class="call"></svg-icon>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  font-size: 20px;
}
</style>
