<template>
  <div>
    用户列表
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class UserList extends Vue {
  data={}

  async fetch () {
    const res = await this.$http.get('user')
    this.data = res.data
  }

  created() {
    this.fetch()
  }
}
</script>