<template>
<div class="">
  <Navigation/>
  <div class="container" id="mainContent">
    <nuxt/>
  </div>
  <FooterInfo/>
</div>
</template>

<script>
import Navigation from '~/components/utils/navigation'
import FooterInfo from '~/components/utils/footerInfo'
export default{
  components: {
    Navigation,
    FooterInfo
  }
}
</script>

<style>
#mainContent{
  padding-top: 50px;
  padding-bottom: 50px;
}
</style>
