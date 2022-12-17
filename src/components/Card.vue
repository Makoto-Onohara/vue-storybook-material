<template>
  <div class="card">
    <div class="media" :style="mediaBg" v-if="mediaHref"></div>
    <h4 class="title">{{ title }}</h4>
    <small class="secondary-text">{{ subHeader }}</small>
    <p class="supporting-text">{{ supportingText }}</p>
    <div v-if="buttonText">
      <a class="material-button">{{ buttonText }}</a>
    </div>
    <InputText />
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: String,
    subHeader: String,
    mediaHref: String,
    supportingText: String,
    buttonText: String,
  },
  computed: {
    mediaBg() {
      return {
        backgroundImage: `url(${this.mediaHref})`,
      };
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Quicksand&display=swap");
.card {
  background-color: #fff;
  border-radius: 0.2rem;
  box-shadow: rgb(150, 150, 150) 0px 1px 5px;
  width: 350px;
  padding: 0.8rem;
}
.media {
  height: 150px;
}

.title {
  margin-bottom: 0%;
}

.material-button {
  color: rgb(79, 7, 140);
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  padding: 0.5rem;
  font-weight: bold;
  transition: 0.3s all linear;
}

.material-button:hover {
  background-color: rgb(20, 0, 100);
}
</style>
