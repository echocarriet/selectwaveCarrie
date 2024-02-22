<template>
  <Navbar />
  <NavbarBackend />
  <NavbarVote />
  <div class="max-w-screen-lg mx-auto px-3">
    <div class="outline outline-1 outline-gray-3 rounded-2xl md:rounded-3xl
    py-11 px-5 mb-10">
      <div class="flex justify-between mb-7 md:mb-8 max-w-3xl mx-auto">
        <button type="button" class="px-6 py-3 flex items-center justify-center rounded-full bg-white
          text-gray-1 text-base font-medium outline outline-2 outline-gray-1
          hover:outline-primary hover:text-primary">
          換成頭像
        </button>
        <button type="button" class="px-6 py-3 flex items-center justify-center rounded-full border-2
          border-gray-1 bg-white text-gray-1 text-base font-medium hover:text-primary hover:border-primary"
          @click="$refs.DelModal.openModal()">
          刪除帳號
        </button>
      </div>
      <form class="max-w-3xl mx-auto">
        <div class="mb-4">
          <label for="name" class="block mb-2 text-base font-medium text-gray-1">名稱</label>
          <input type="text" id="name" class="bg-white border border-gray-3 text-sm rounded-full
              focus:ring-primary focus:border-primary block w-full px-3 py-4" v-model="member.name" />
        </div>
        <!-- <div class="mb-4">
          <label for="email" class="block mb-2 text-base font-medium text-gray-1">Email*</label>
          <input type="email" id="email" class="bg-white border border-gray-3 text-sm rounded-3xl
              focus:ring-primary focus:border-primary block w-full px-3 py-4" placeholder="xxx@gmail.com" required />
          <p class="mt-2 text-sm text-gray-2">信箱已驗證成功。若修改信箱，新信箱須重新驗證後才會儲存。</p>
        </div> -->
        <div class="mb-4">
          <label for="sex" class="block mb-2 text-base font-medium text-gray-1">性別</label>
          <select id="sex"
            class="bg-white border border-gray-300 text-gray-900 text-sm  rounded-full focus:ring-primary focus:border-primary block w-full px-3 py-4"
            v-model="member.gender">
            <option value="" selected>請選擇性別</option>
            <option value="male">男</option>
            <option value="female">女</option>
            <option value="x">不方便透露</option>
          </select>
        </div>
        <div class="mb-4">
          <label for="birthday" class="block mb-2 text-base font-medium text-gray-1">生日</label>
          <input type="date" id="birthday" class="bg-white border border-gray-3 text-sm rounded-full
              focus:ring-primary focus:border-primary block w-full px-3 py-4" />
        </div>
        <hr>
        <!-- ➀ 社群連結 v-for 渲染出，但data沒得就無法渲染 -->
        <div class="mb-4">
          <template v-for="(item, index) in socialMedia" :key="index">
            <div class="mb-4">
              <label for="facebookUrl" class="block mb-2 text-base font-medium text-gray-1">
                {{ socialMedia[index].type }} 社群連結
              </label>
              <input type="url" :value="socialMedia[index].type === item.type ? `${socialMedia[index].id}` : '請填入社群網址'"
                class="bg-white border border-gray-3 text-sm rounded-full
              focus:ring-primary focus:border-primary block w-full px-3 py-4 mb-2" placeholder="請填入社群網址" />
            </div>
          </template>
        </div>
        <!-- ➀ 社群連結 v-for 渲染出，但data沒得就無法渲染 -->
        <hr>
        <!-- 社群連結 label & input -->
        <div class="mb-4">
          <label for="facebookUrl" class="block mb-2 text-base font-medium text-gray-1">Facebook 社群連結</label>
          <input type="url" id="facebookUrl" class="bg-white border border-gray-3 text-sm rounded-full
              focus:ring-primary focus:border-primary block w-full px-3 py-4" placeholder="請填入社群網址" />
        </div>
        <div class="mb-4">
          <label for="instagramUrl" class="block mb-2 text-base font-medium text-gray-1">Instagram 社群連結</label>
          <input type="url" id="instagramUrl" class="bg-white border border-gray-3 text-sm rounded-full
              focus:ring-primary focus:border-primary block w-full px-3 py-4" placeholder="請填入社群網址" />
        </div>
        <div class="mb-4">
          <label for="youtubeUrl" class="block mb-2 text-base font-medium text-gray-1">YouTube 社群連結</label>
          <input type="url" id="youtubeUrl" class="bg-white border border-gray-3 text-sm rounded-full
              focus:ring-primary focus:border-primary block w-full px-3 py-4" placeholder="請填入社群網址" />
        </div>
        <div class="mb-6">
          <label for="personalUrl" class="block mb-2 text-base font-medium text-gray-1">個人網站連結</label>
          <input type="url" id="personalUrl" class="bg-white border border-gray-3 text-sm rounded-full
              focus:ring-primary focus:border-primary block w-full px-3 py-4" placeholder="請填入社群網址" />
        </div>
        <!-- 社群連結 label & input -->
        <button type="submit" class="text-white bg-gray-1 hover:bg-primary focus:ring-4
            focus:outline-none focus:ring-primary-light font-medium rounded-full
            text-base w-full sm:w-auto px-5 py-2.5 text-center">
          更新
        </button>
      </form>
    </div>
  </div>
  {{ member.gender }}
  <DelModal ref="DelModal" :delContent="delContent"></DelModal>
  <ComponentFooter></ComponentFooter>
</template>
<script>
import DelModal from '@/components/backend/DelModal.vue';
import NavbarBackend from '@/components/backend/NavbarBackend.vue';
import NavbarVote from '@/components/backend/NavbarVote.vue';
import ComponentFooter from '@/components/ComponentFooter.vue';
import Navbar from '@/components/NavbarEl.vue';

export default {
  components: {
    Navbar,
    NavbarBackend,
    NavbarVote,
    ComponentFooter,
    DelModal,
  },
  data() {
    return {
      delContent: '「此帳號後，需重新建立帳號」',
      socialMedia: [
        {
          type: 'twitter',
          id: 'johndoe',
        },
        {
          type: 'faacebook',
          id: 'Fb-johndoe',
        },
        {
          type: 'ig',
          id: '',
        },
      ],
      member: {
        follwing: [],
        followers: [],
        socialMedia: [],
        likedPolls: [],
      },
    };
  },
  methods: {
    getToken() {
      // 從 cookie 取出 token，所有 axios 請求都會加上 token
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)selectWaveToken\s*=\s*([^;]*).*$)|^.*$/,
        '$1',
      );
      this.$http.defaults.headers.common.Authorization = token;
      // 檢查用戶是否仍持續登入API
      const api = `${import.meta.env.VITE_APP_API_URL}/api/auth/check`;
      this.$http.get(api, {
        headers: {
          Authorization: token,
        },
      })
        .then((response) => {
          if (response.data.status) {
            console.log(response);
            const { _id } = response.data.result;
            const memberId = _id;
            this.getMemberInfo(memberId);
          } else {
            this.$swal({
              title: '登入失敗，請重新登入',
            });
            this.$router.push('/login');
          }
        })
        .catch((err) => {
          this.$swal({
            title: `${err.response.data.message}`,
          });
        });
    },
    getMemberInfo(id) {
      const apiUrl = `${import.meta.env.VITE_APP_API_URL}/api/member/${id}`;
      this.$http.get(apiUrl)
        .then((res) => {
          this.member = res.data.result;
          console.log(this.member);
          // this.$swal({
          //   title: `${res.data.message}`,
          // });
        })
        .catch((err) => {
          console.log(err);
          this.$swal({
            title: `${err.response.data.message}`,
          });
        });
    },
  },
  mounted() {
    this.getToken();
  },
};
</script>

<style scoped></style>
