<template>
  <svg :class="svgClass" xmlns="http://www.w3.org/2000/svg">
    <use :xlink:href="iconName" xmlns:xlink="http://www.w3.org/1999/xlink" />
  </svg>
</template>

<script>
import { computed, toRefs } from "vue";
export default {
  name: "SvgIcon",
  props: {
    iconClass: {
      type: String,
      required: true,
    },
    className: {
      type: String,
    },
  },
  setup(props) {
    const { iconClass, className } = toRefs(props);
    // computed 生成iconName svgClass
    const iconName = computed(() => {
      return `#icon-${iconClass.value}`;
    });
    const svgClass = computed(() => {
      if (className.value) {
        return "svg-icon " + className.value;
      } else {
        return "svg-icon";
      }
    });

    return {
      iconName,
      svgClass,
    };
  },
};
</script>

<style scoped>
.svg-icon {
  width: 14px;
  height: 14px;
  vertical-align: -3px;
  fill: currentColor;
  overflow: hidden;
}
</style>
