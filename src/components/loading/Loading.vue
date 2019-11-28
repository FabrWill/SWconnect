<template>
    <div>
      <v-row>
        <div v-if="!condition" class="center">
            <v-progress-circular
                indeterminate
                color="primary mx-auto"
            />
        </div>
        <div v-if="condition">
            <slot />
        </div>
      </v-row>
    </div>
</template>

<script>
    export default {
        name: 'Loading',
        props: {
            condition: { type: Boolean, required: true },
        },
    };
</script>

<style scoped>

  .v-progress-circular {
    height: 32px;
    width: 32px;
    flex: 1;
    margin: 0 auto;
    max-width: 32px;
    max-height: 32px;
  }

  .center {
    width: 100%;
    height: 100%;
    display: flex;
    margin: 20%;
    align-items: center;
  }

</style>
