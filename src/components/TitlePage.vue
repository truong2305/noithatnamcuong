<template>
  <h2 class="pb-3 mb-3"><slot></slot> {{firstTitle}}  <span class="orange-text">{{lastTitle}}</span></h2>
</template>

<script>
export default {
props : ['firstTitle', 'lastTitle']
}
</script>
<style lang="scss" scoped>
h2 {
    font-size: 3rem;
    font-weight: 700;
    line-height: 3.25rem;
    @media (max-width: 767.9px) {
        font-size: 2rem;
    } 
  }
  .orange-text, i {
    color: #f28123;
  }

</style>