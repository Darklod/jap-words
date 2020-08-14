<template>
  <div class="text--primary">
    {{text}}
    <br />
    {{translation}}
  </div>
</template>

<script>
export default {
  props: ["text", "translation"],
}
</script>
