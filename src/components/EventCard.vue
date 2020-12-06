<template>
  <div class="card card-standard shadow mb-3">
    <img src="https://via.placeholder.com/400x250" class="card-img-top">
    <div class="card-body">
      <h3 class="card-title text-primary font-weight-bold">Card title</h3>
      <p
        class="card-text"
      >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn">Light button</a>
    </div>
    <div class="card-footer border-top-0 p-0 text-left overflow-hidden">
      <a href="#" class="d-block bg-light text-decoration-none">
        <div :class="btnClasses">Test</div>
      </a>
    </div>
  </div>
</template>

<style>
.card-standard .card-footer .btn-block {
  padding: 10px 12px;
}
</style>


<script>
export default {
  props: {
    btnStyle: {
      type: String,
      default: "btn-warning"
    },
    useBlockBtn: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    btnClasses() {
      let classes = ["btn", this.btnStyle];

      if (this.useBlockBtn) {
        classes.push("btn-block rounded-0 font-weight-bold");
      } else {
        classes.push("m-2");
      }

      classes.push("headings-font-family");

      return classes;
    }
  }
};
</script>
