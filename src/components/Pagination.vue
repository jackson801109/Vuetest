<template>
  <div>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li
          @click.prevent="previousPage()"
          :class="{ disabled: !pagination.has_pre }"
          class="page-item"
        >
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li
          class="page-item"
          v-for="(page, key) in pagination.total_pages"
          @click.prevent="currentPage(page)"
          :key="key"
          :class="{ active: pagination.current_page == page }"
        >
          <a class="page-link" href="#">{{ page }}</a>
        </li>
        <li
          @click.prevent="nextPage()"
          :class="{ disabled: !pagination.has_next }"
          class="page-item"
        >
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  data() {
    return {
      pagination: {},
    };
  },
  methods: {
    previousPage() {
      if (this.pagination.current_page != 1) {
        this.pagination.current_page = this.pagination.current_page - 1;
      }
      this.$emit('passFunction', this.pagination.current_page);
    },
    nextPage() {
      if (this.pagination.current_page < this.pagination.total_pages) {
        this.pagination.current_page = this.pagination.current_page + 1;
      }
      this.$emit('passFunction', this.pagination.current_page);
    },
    currentPage(currentPage) {
      this.pagination.current_page = currentPage;
      this.$emit('passFunction', this.pagination.current_page);
    },
  },
  created() {
    const vm = this;
    this.$bus.$on("page:change", function (pagination) {
       vm.pagination = pagination;
    });
  },
};
</script>