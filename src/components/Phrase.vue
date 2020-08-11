<template>
  <div class="text--primary">
    {{text}}
    <br />
    {{translation}}
  </div>
</template>

<script>
export default {
  name: "Phrase",
  props: ["text", "translation"],
}
</script>
