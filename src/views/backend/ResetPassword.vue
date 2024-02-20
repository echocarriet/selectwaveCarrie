<template>
  <Navbar />
  <div class="pt-6 pb-12">
    <div class="flex calcHeight">
      <div class="basis-full  px-3">
        <div class="flex justify-center items-center h-full">
          <form class="min-w-96 mx-auto" @submit.prevent="">
            <div class="mb-6">
              <h2 class="text-2xl md:text-4xl font-bold mb-2 text-gray-1">重設密碼</h2>
            </div>
            <div class="mb-4">
              <label for="password" class="block mb-2 text-base font-medium text-gray-1">密碼</label>
              <input type="password" id="password" class="bg-white border border-gray-3 text-sm rounded-3xl
                focus:ring-primary focus:border-primary block w-full px-3 py-4" placeholder="請輸入密碼" required
                v-model="user.password" />
            </div>
            <div class="mb-6">
              <label for="confirmPassword" class="block mb-2 text-base font-medium text-gray-1">再次輸入密碼</label>
              <input type="password" id="confirmPassword" class="bg-white border border-gray-3 text-sm rounded-3xl
                focus:ring-primary focus:border-primary block w-full px-3 py-4" placeholder="請再次輸入密碼" required
                v-model="user.confirmPassword" />
            </div>
            <button type="submit" class="text-white bg-gray-1 hover:bg-primary focus:ring-4
              focus:outline-none focus:ring-primary-light font-medium rounded-3xl
              text-base w-full sm:w-auto px-5 py-2.5 text-center mb-6">
              登入
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <ComponentFooter />
</template>
<script>
import ComponentFooter from '@/components/ComponentFooter.vue';
import Navbar from '@/components/NavbarEl.vue';

export default {
  components: {
    Navbar,
    ComponentFooter,
  },
  data() {
    return {
      user: {
        password: '',
        confirmPassword: '',
      },
    };
  },
};
</script>
<style lang="css">
  .calcHeight {
    height: calc(100vh - 326.55px);
  }
  @media(min-width:768px){
    .calcHeight {
    height: calc(100vh - 390px);
  }
}
</style>
