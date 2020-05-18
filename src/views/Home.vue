<template>
  <div class="home">
    <CCVLogo size="xl" />
    <Icon name="instagram" />
    <button class="button is-yellow-lighter">Button</button>
  </div>
</template>

<script>
import CCVLogo from '@/components/logos/CCVLogo.vue';
import Icon from '@/components/Icon.vue';

export default {
  name: 'Home',
  components: {
    Icon,
    CCVLogo
  }
};
</script>
