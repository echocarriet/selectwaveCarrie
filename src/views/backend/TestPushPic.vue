<template>
  <div class="container py-4">
    <h2>測試圖片上傳</h2>

    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="avatar-layout">Upload file</label>
    <input ref="fileInput"
      class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
      id="avatar-layout" type="file" @change="uploadFile">
    <hr>
    <img :src="imgUrl" class="rounded-3xl object-cover object-center" alt="封面照" style="width: 150px; height: 150px;">
    <hr>
    <!-- 測試 -->
    <label for="datePicker">選取日期：</label>
    <input type="date" id="datePicker" v-model="selectedDate" @input="updateDateText">
    <!-- <p>選取的日期：{{ dateText }}</p> -->
    {{ selectedDate }}
    <!-- 測試, 刪 -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      members: {
        result: {},
      },
      imgUrl: '',
      // 測試, 刪
      selectedDate: null,
      // dateText: '',
    };
  },
  methods: {
    // 測試, 刪
    updateDateText() {
      // 格式化日期文字，這裡可以使用你喜歡的日期格式庫，比如 date-fns 或者 dayjs
      // if (this.selectedDate) {
      //   const formattedDate = new Date(this.selectedDate).toLocaleDateString();
      //   this.dateText = formattedDate;
      // } else {
      //   this.dateText = '';
      // }

      console.log(this.selectedDate);
    },
    uploadFile() {
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)selectWaveToken\s*=\s*([^;]*).*$)|^.*$/,
        '$1',
      );
      this.$http.defaults.headers.common.Authorization = token;
      const authoToken = {
        headers: {
          Authorization: token,
        },
      };

      const uploadFile = this.$refs.fileInput.files[0];
      const formData = new FormData();
      formData.append('file-to-upload', uploadFile);
      console.log(uploadFile);

      const api = `${import.meta.env.VITE_APP_API_URL}/api/imgur/upload`;
      this.$http.post(api, formData, authoToken)
        .then((res) => {
          console.log(res);
          this.imgUrl = res.data.result;
          this.$swal({
            title: `${res.data.message}`,
          });
        })
        .catch((err) => {
          this.$swal({
            title: `${err.response.data.message}`,
          });
        });
    },
    getMembers() {
      const api = `${import.meta.env.VITE_APP_API_URL}/api/member/`;
      this.$http.get(api)
        .then((res) => {
          console.log(res);
          this.members.result = res.data.result;
          // this.$swal({
          //   title: `${res.data.message}`,
          // });
        })
        .catch((err) => {
          this.$swal({
            title: `${err.response.data.message}`,
          });
        });
    },
  },
  mounted() {
    this.getMembers();
  },
};
</script>
