<template>
  <Navbar />
  <NavbarBackend />
  <NavbarVote />
  <div class="max-w-screen-lg mx-auto px-3">
    <div class="outline outline-1 outline-gray-3 rounded-2xl md:rounded-3xl
    pt-5 pb-10 md:pt-4 md:pb-16 px-3.5 md:px-5 mb-10">
      <div class="flex justify-between mb-7 md:mb-8">
        <div class="relative">
          <button type="button" class="px-6 py-3 flex items-center justify-center rounded-full bg-white
          text-gray-1 text-base font-medium outline outline-2 outline-gray-1
          hover:outline-primary hover:text-primary" @click="collapseModal.toggle()">
            篩選
          </button>
          <!-- Dropdown menu -->
          <div ref="flowbiteCollapse"
            class="absolute top-14 z-10 hidden font-normal bg-white divide-y rounded-2xl shadow-lg w-44 animate-fade-down animate-once animate-ease-in-out">
            <ul class="py-3 text-sm text-gray-700">
              <li>
                <a href="#" class="block px-7 py-2 hover:bg-gray-100">所有投票</a>
              </li>
              <li>
                <a href="#" class="block px-7 py-2 hover:bg-gray-100">投票狀態：私人</a>
              </li>
              <li>
                <a href="#" class="block px-7 py-2 hover:bg-gray-100">投票狀態：公開</a>
              </li>
              <li>
                <a href="#" class="block px-7 py-2 hover:bg-gray-100">投票進行中</a>
              </li>
              <li>
                <a href="#" class="block px-7 py-2 hover:bg-gray-100">投票已結束</a>
              </li>
            </ul>
          </div>
        </div>
        <button type="button" class="px-6 py-3 flex items-center justify-center rounded-full bg-gray-1
          text-white text-base font-medium hover:bg-primary" @click="openModal">
          建立新投票
        </button>
      </div>
      <!-- table -->
      <table class="w-full text-base text-center text-gray-1">
        <thead class="text-gray-2 uppercase">
          <tr class="border-b">
            <th scope="col" class="px-6 py-3 font-medium">
              投票標題
            </th>
            <th scope="col" class="px-6 py-3 font-medium  hidden lg:table-cell">
              投票狀態
            </th>
            <th scope="col" class="px-6 py-3 font-medium  hidden lg:table-cell">
              參與人數
            </th>
            <th scope="col" class="px-6 py-3 font-medium  hidden lg:table-cell">
              開始日期
            </th>
            <th scope="col" class="px-6 py-3 font-medium  hidden lg:table-cell">
              結束日期
            </th>
            <th scope="col" class="px-6 py-3 font-medium  hidden lg:table-cell">
              分享
            </th>
            <th scope="col" class="px-6 py-3 font-medium">
              編輯
            </th>
          </tr>
        </thead>
        <tbody>
          <template v-for="item in polls" :key="item.id">
            <tr class="bg-white border-b hover:bg-primary-light">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-left
            lg:text-center">
                <p>{{ item.title }}</p>
                <p class="block lg:hidden">狀態：{{ item.isPrivate ? '公開' : '隱藏' }}</p>
                <p class="block lg:hidden">人數：{{ item.totalVoters }}</p>
                <p class="block lg:hidden">開始：{{ turnDate(item.startDate) }}</p>
                <p class="block lg:hidden">結束：{{ turnDate(item.endDate) }}</p>
              </th>
              <td class="px-6 py-4 hidden lg:table-cell">
                {{ item.isPrivate ? '公開' : '隱藏' }}
              </td>
              <td class="px-6 py-4 hidden lg:table-cell">
                {{ item.totalVoters }}
              </td>
              <td class="px-6 py-4 hidden lg:table-cell">
                {{ turnDate(item.startDate) }}
                <!-- {{ turnDate(this.getDate) }} -->
              </td>
              <td class="px-6 py-4 hidden lg:table-cell">
                {{ turnDate(item.endDate) }}
              </td>
              <td class="px-6 py-4 hidden lg:table-cell">
                <button type="button" class="hover:text-primary" @click="$refs.ShareModal.openModal">
                  <i class="bi bi-share w-full text-xl"></i>
                </button>
              </td>
              <td class="px-6 py-4 flex flex-col justify-center
            lg:justify-between lg:flex-row">
                <button type="button" class="hover:text-primary lg:hidden mb-3.5 lg:mb-0"
                  @click="$refs.ShareModal.openModal">
                  <i class="bi bi-share w-full text-xl"></i>
                </button>
                <button type="button" class="hover:text-primary mb-3.5 lg:mb-0" @click="$refs.DelModal.openModal">
                  <i class="bi bi-trash3 w-full text-xl"></i>
                </button>
                <button type="button" class="hover:text-primary mb-3.5 lg:mb-0" @click="$refs.EditPullModal.openModal">
                  <i class="bi bi-pencil w-full text-xl"></i>
                </button>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
    <!-- 頁碼 -->
    <nav>
      <ul class="inline-flex -space-x-px text-base h-10 w-full justify-center">
        <li>
          <a href="#" class="pagination-w flex items-center justify-center p-2 leading-tight
          text-gray-1 bg-white border border-gray-4 rounded-lg
          hover:bg-primary-light hover:text-primary-dark mr-1.5">
            <span class="sr-only">回到第一頁</span>
            <i class="bi bi-chevron-double-left text-sm"></i>
          </a>
        </li>
        <li>
          <a href="#" class="pagination-w flex items-center justify-center p-2 leading-tight
          text-gray-1 bg-white border border-gray-4 rounded-lg
          hover:bg-primary-light hover:text-primary-dark mr-1.5">
            <span class="sr-only">Previous</span>
            <i class="bi bi-chevron-left text-sm"></i>
          </a>
        </li>
        <li>
          <a href="#" class="pagination-w flex items-center justify-center p-2 leading-tight
          text-gray-1 bg-white border border-gray-4 rounded-lg
          hover:bg-primary-light hover:text-primary-dark mr-1.5">
            1
          </a>
        </li>
        <li>
          <a href="#" class="pagination-w flex items-center justify-center p-2 leading-tight
          text-gray-1 bg-white border border-gray-4 rounded-lg
          hover:bg-primary-light hover:text-primary-dark mr-1.5">
            2
          </a>
        </li>
        <li>
          <a href="#" class="pagination-w flex items-center justify-center p-2 leading-tight
          text-gray-1 bg-white border border-gray-4 rounded-lg
          hover:bg-primary-light hover:text-primary-dark mr-1.5">
            <span class="sr-only">Next</span>
            <i class="bi bi-chevron-right text-sm"></i>
          </a>
        </li>
        <li>
          <a href="#" class="pagination-w flex items-center justify-center p-2 leading-tight
          text-gray-1 bg-white border border-gray-4 rounded-lg
          hover:bg-primary-light hover:text-primary-dark">
            <span class="sr-only">到最後一頁</span>
            <i class="bi bi-chevron-double-right tex-sm"></i>
          </a>
        </li>
      </ul>
    </nav>
  </div>
  <!-- <AddPullModal ref="AddPullModal" @click="addPoll" /> -->
  <AddPullModal ref="AddPullModal"
  :addPollData="addPollData"
  :optionsData="addPollData.optionsData"
  :selectedTagsProps="addPollData.tags"
  :allTags="allTags"
  @update-poll="updateNewPoll" />
  <EditPullModal ref="EditPullModal" />
  <DelModal ref="DelModal" :delContent="delContent"></DelModal>
  <shareModal ref="ShareModal"></shareModal>
  <ComponentFooter></ComponentFooter>
</template>
<script>
import { mapActions } from 'pinia';
import AddPullModal from '@/components/backend/AddPullModal.vue';
import DelModal from '@/components/backend/DelModal.vue';
import EditPullModal from '@/components/backend/EditPullModal.vue';
import NavbarBackend from '@/components/backend/NavbarBackend.vue';
import NavbarVote from '@/components/backend/NavbarVote.vue';
import ShareModal from '@/components/backend/ShareModal.vue';
import ComponentFooter from '@/components/ComponentFooter.vue';
import Navbar from '@/components/NavbarEl.vue';
import CollapseMixin from '@/mixins/CollapseMixin';
import dateStore from '@/stores/date';

export default {
  mixins: [CollapseMixin],
  components: {
    Navbar,
    ComponentFooter,
    DelModal,
    ShareModal,
    NavbarBackend,
    NavbarVote,
    AddPullModal,
    EditPullModal,
  },
  data() {
    return {
      collapseModal: null,
      delContent: '「xxx投票」',
      polls: [],
      addPollData: {
        title: '',
        description: '',
        imageUrl: 'https://i.imgur.com/D3hp8H6.png',
        tags: [],
        startDate: '',
        endDate: '',
        isPrivate: false,
        optionsData: [
          {
            title: '',
            imageUrl: 'https://imgur.com/TECsq2J.png',
          },
        ],
        status: 'active',
      },
      allTags: [],
    };
  },
  methods: {
    getPolls() {
      const apiUrl = `${import.meta.env.VITE_APP_API_URL}/api/poll/`;
      this.$http.get(apiUrl)
        .then((res) => {
          if (res.status === 200) {
            console.log(res.data.polls);
            this.polls = res.data.polls;
            this.allTags = this.polls.flatMap((poll) => poll.tags);
            console.log(this.allTags);

            // this.$swal({
            //   title: `${res.data.message}`,
            // });
          }
        })
        .catch((err) => {
          console.log(err);
          this.$swal({
            title: `${err.response.data.message}`,
          });
        });
    },
    openModal() {
      this.addPollData = {
        imageUrl: 'https://i.imgur.com/D3hp8H6.png',
        optionsData: [
          {
            title: '',
            imageUrl: 'https://imgur.com/TECsq2J.png',
          },
        ],
      };
      this.$refs.AddPullModal.openModal();
    },
    updateNewPoll() {
      console.log(this.addPollData);
      this.$refs.AddPullModal.hideModal();
    },
    ...mapActions(dateStore, ['turnDate']),
  },
  mounted() {
    this.getPolls();
  },
};
</script>

<style scoped>
.pagination-w {
  width: 32px;
  height: 32px;
}
</style>
