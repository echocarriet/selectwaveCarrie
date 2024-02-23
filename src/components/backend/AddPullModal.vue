<template>
  <!-- Main modal -->
  <div ref="flowbiteModal"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-2xl max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-2xl shadow">
        <!-- Modal header -->
        <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t-2xl bg-white sticky top-0">
          <h3 class="text-xl font-semibold text-gray-900">
            建立新投票
          </h3>
          <button type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            @click.prevent="modal.hide()">
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <div class="p-4 md:p-5 space-y-4">
          <p class="mb-4 text-center">請點選「單選題」或「複選題」按鈕來新增投票。</p>
          <!-- 新增按鈕, 投票內容出現按鈕消失 -->
          <div class="flex justify-center">
            <button class="px-6 py-3 mr-6 rounded-full bg-gray-1 text-white hover:bg-primary">
              <i class="bi bi-ui-radios"></i>
              單選題
            </button>
            <button class="px-6 py-3 rounded-full bg-gray-1 text-white hover:bg-primary">
              <i class="bi bi-check-square"></i>
              複選題
            </button>
          </div>
          <!-- 投票內容/單選 -->
          <form>
            <div class="mb-4">
              <label for="title" class="block mb-2 text-base font-medium text-gray-1">標題</label>
              <input type="text" id="title"
                class="bg-white border border-gray-3 text-sm rounded-full focus:ring-primary focus:border-primary block w-full px-3 py-4">
            </div>
            <div class="mb-4">
              <p class="mb-2 text-base font-medium text-gray-1">選項內容</p>
              <ul class="text-sm font-medium text-gray-1 rounded-lg">
                <li class="w-full border-gray-200">
                  <div class="flex items-center ps-3">
                    <input id="list-radio-license" type="radio" value="" name="list-radio"
                      class="w-4 h-4 text-primary bg-gray-100 border-gray-300 focus:ring-primary-light focus:ring-2">
                    <label for="list-radio-license" class="w-full py-3 ms-2 text-sm font-medium">Driver License
                    </label>
                  </div>
                </li>
                <!-- <li class="w-full border-gray-200">
                  <div class="flex items-center ps-3">
                    <input id="list-radio-id" type="radio" value="" name="list-radio"
                      class="w-4 h-4 text-primary bg-gray-100 border-gray-300 focus:ring-primary-light focus:ring-2">
                    <label for="list-radio-id"
                      class="w-full py-3 ms-2 text-sm font-medium">State ID</label>
                  </div>
                </li> -->
              </ul>
            </div>
            <div class="mb-4">
              <label for="label" class="block mb-2 text-base font-medium text-gray-1">標籤</label>
              <p class="mb-2 text-sm text-gray-2">最多可新增三個標籤</p>
              <input id="label" list="label-tag"
                class="bg-white border border-gray-3 text-sm rounded-full focus:ring-primary focus:border-primary block w-full px-3 py-4">
              <datalist id="label-tag">
                <option value="電視節目">電視節目</option>
                <option value="晚餐">晚餐</option>
                <option value="2024">2024</option>
              </datalist>
              <!-- 此區域會顯示所選標籤 -->
              <template></template>
            </div>
            <div class="mb-4">
              <label for="cover" class="block mb-2 text-base font-medium text-gray-1">上傳封面照</label>
              <input
                class="block mb-2 w-full text-base text-gray-900 border border-gray-300 rounded-full cursor-pointer bg-gray-50 focus:outline-none"
                id="cover" type="file">
              <img
                src="/images/loginCover.png"
                class="rounded-3xl object-cover object-center"
                alt="封面照" style="width: 150px; height: 150px;">
            </div>
            <div class="mb-4">
              <label for="message" class="block mb-2 text-base font-medium text-gray-1">投票說明</label>
              <textarea id="message" rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary focus:border-primary"
                placeholder="請在此寫下投票說明.."></textarea>
              <hr>

            </div>
            <div class="mb-4">
              <p class="mb-2 text-base font-medium text-gray-1">投票有效日</p>
              <div class="flex items-center justify-between mb-2">
                <div class="flex w-4/5">
                  <span
                    class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-full">
                    開始日期
                  </span>
                  <input type="date" id="vote-start"
                    class="rounded-none rounded-e-full bg-gray-50 border text-gray-900 focus:ring-primary focus:border-primary block flex-1 min-w-0 w-full text-sm border-gray-300 px-3 py-4">
                </div>
                <div class="flex items-center w/1/5">
                  <input id="checked-checkbox" type="checkbox" value=""
                    class="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary-light focus:ring-2">
                  <label for="checked-checkbox" class="ms-2 text-sm font-medium text-gray-900">立即開始</label>
                </div>
              </div>
              <div class="flex">
                <span
                  class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-full">
                  結束日期
                </span>
                <input type="date" id="vote-end"
                  class="rounded-none rounded-e-full bg-gray-50 border text-gray-900 focus:ring-primary focus:border-primary block flex-1 min-w-0 w-full text-sm border-gray-300 px-3 py-4">
              </div>
            </div>
            <div class="mb-4">
              <p class="mb-2 text-base font-medium text-gray-1">投票狀態</p>
              <ul class="text-sm font-medium text-gray-1 flex">
                <li class="border-gray-200">
                  <div class="flex items-center ps-3">
                    <input id="open" type="radio" name="list-radio"
                      class="w-4 h-4 text-primary bg-gray-100 border-gray-300 focus:ring-primary-light focus:ring-2">
                    <label for="open" class="w-full py-3 ms-2 text-sm font-medium">公開</label>
                  </div>
                </li>
                <li class="border-gray-200">
                  <div class="flex items-center ps-3">
                    <input id="hide" type="radio" name="list-radio"
                      class="w-4 h-4 text-primary bg-gray-100 border-gray-300 focus:ring-primary-light focus:ring-2">
                    <label for="hide" class="w-full py-3 ms-2 text-sm font-medium">隱藏</label>
                  </div>
                </li>
              </ul>
            </div>
          </form>
        </div>
        <!-- Modal footer -->
        <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b-2xl bottom-0 bg-white sticky">
          <button type="button"
            class="text-white bg-primary hover:bg-primary-dark focus:ring-4 focus:outline-none focus:ring-primary-light font-medium rounded-full text-base px-6 py-3 text-center">
            儲存
          </button>
          <button type="button"
            class="px-6 py-3 ms-3 text-base font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 focus:z-10 focus:ring-4 focus:ring-gray-100 hover:text-white hover:bg-gray-3"
            @click.prevent="modal.hide()">取消</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ModalMixin from '@/mixins/ModalMixin';

export default {
  mixins: [ModalMixin],
  data() {
    return {
      modal: null,
    };
  },
};
</script>
