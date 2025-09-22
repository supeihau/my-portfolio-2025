<template>
    <div class="alert-fixed-top">
      <v-alert
        v-if="state.apiStatus === 'success'"
        variant="outlined"
        title="已成功送出"
        type="success"
      ></v-alert>
      <v-alert
        v-if="state.apiStatus === 'error'"
        variant="outlined"
        title="送出失敗，請稍後再試"
        type="error"
      ></v-alert>
    </div>

    <div class="px-md-12 px-lg-16 px-7 py-16">
      <div class="text-brown text-h3-semi-bold mb-3 text-center">
          Personal Information
      </div>
      <v-row :class="isDesktop? 'mt-10': 'mt-3'">
        <v-col col="12" md="6" lg="6" class="mb-0">
          <div v-for="(value, i) in info.slice(0, 4)" :key="value.title">
            <div class="justify-start align-center d-flex flex-row mt-3">
              <div class="custom-icon-border" :class="isDesktop? 'border-size-desktop': 'border-size-phone'">
                  <img :src="value.icon" alt="school" :class="isDesktop? 'img-size-desktop': 'img-size-phone'"/>
              </div>
              <div class="text-orange ml-4 text-start"
                  :class="isDesktop ? 'text-h4-medium' : 'text-h5-medium'">
                  {{ value.title }}
              </div>
            </div>
          </div>
        </v-col>

        <v-col col="12" md="6" lg="6" class="mb-0">
          <div v-for="(value, i) in info.slice(4, 8)" :key="value.title">
            <div class="justify-start align-center d-flex flex-row mt-3">
              <div class="custom-icon-border" :class="isDesktop? 'border-size-desktop': 'border-size-phone'">
                  <img :src="value.icon" alt="school" :class="isDesktop? 'img-size-desktop': 'img-size-phone'"/>
              </div>
              <div class="text-orange ml-4 text-start"
                  :class="isDesktop ? 'text-h4-medium' : 'text-h5-medium'">
                  {{ value.title }}
              </div>
            </div>
          </div>
        </v-col>
      </v-row>

      <div class="w-100 d-flex justify-center mt-10">
        <CustomButton
          :type="'elevated'"
          :btnName="'聯絡我'"
          :class="'bg-orange text-white text-h5-medium  px-10'"
          :has-icon="false"
          @click="openDialog()"
        />
      </div>

      <v-dialog
        :model-value="state.dialog"
        max-width="600"
      >
        <v-card title="聯絡我">
          <v-card-text>
            <v-form ref="formRef">
              <v-row dense>
                <v-col cols="12" md="12" sm="12">
                  <CustomInput
                    v-model="state.form.name"
                    label="姓名"
                    :placeholder="'請輸入您的姓名'"
                    :required="true"
                    :rules="[v => !!v || '必填']"
                  />
                </v-col>

                <v-col cols="12" md="12" sm="12">
                  <CustomInput
                    v-model="state.form.company"
                    label="公司/單位"
                    :placeholder="'請輸入聯絡公司/單位'"
                    :required="false"
                  />
                </v-col>

                <v-col cols="12" md="12" sm="12">
                  <CustomInput
                    v-model="state.form.email"
                    label="Email"
                    :placeholder="'請輸入您的Email'"
                    :required="true"
                    :rules="[v => !!v || '必填']"
                  />
                </v-col>

                <v-col cols="12" md="12" sm="12">
                  <CustomInput
                    v-model="state.form.message"
                    label="訊息內容"
                    :type="'textarea'"
                    :required="false"
                  />
                </v-col>
              </v-row>
            </v-form>
            

          </v-card-text>

          <v-card-actions>
            <div class="w-100 d-flex justify-center pa-4 ga-4">
              <CustomButton
                :type="'outlined'"
                :btnName="'取消'"
                :class="'bg-white text-orange'"
                :has-icon="false"
                @click="closeDialog()"
              />
              <CustomButton
                :type="'elevated'"
                :btnName="'送出'"
                :class="'bg-orange text-white'"
                :has-icon="false"
                @click="send()"
              />
            </div>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import emailjs from '@emailjs/browser'
import useInnerWidth from '~/composables/useInnerWidth';

const { isDesktop } = useInnerWidth();

import SchoolIcon from '@/assets/icon/school.svg';
import BirthdateIcon from '@/assets/icon/birthdate.svg';
import LocationIcon from '@/assets/icon/location.svg';
import UserIcon from '@/assets/icon/user.svg';
import PhoneIcon from '@/assets/icon/phone.svg';
import EmailIcon from '@/assets/icon/email.svg';
import GitHubIcon from '@/assets/icon/github.svg';
import CustomInput from '../form/input.vue';
import CustomButton from '../form/button.vue';

const formRef = ref(null);
const info = ref([
  {
    icon: SchoolIcon,
    title: '國立彰化師範大學 資訊管理學系',
  },
  {
    icon: BirthdateIcon,
    title: '2000/02/17',
  },
  {
    icon: LocationIcon,
    title: '新北市，淡水區',
  },
  {
    icon: PhoneIcon,
    title: '0928453360',
  },
  {
    icon: UserIcon,
    title: '蘇姵華',
  },
  {
    icon: EmailIcon,
    title: 'selina240@gmail.com',
  },
  {
    icon: GitHubIcon,
    title: 'supeihau',
  },
]);

const state = reactive({
  dialog: false,
  form: {
    name: '',
    company: '',
    email: '',
    message: '',
  },
  apiStatus: null, // 'success' or 'error'
});

const openDialog = () => {
  state.dialog = true;
}
const closeDialog = () => {
  state.dialog = false;
}
const send = async () => {
  const { valid } = await formRef.value.validate()
  if (!valid) return
  state.dialog = false;
  
  try {
    await emailjs.send(
      'service_zkrm1or',
      'template_1hub09c',
      {
        name: state.form.name,
        company: state.form.company,
        email: state.form.email,
        message: state.form.message,
      },
      { publicKey: 'mmBEwcK9y3czug5Nw' }
    )
    state.apiStatus = 'success'
    // 送出成功後清空欄位
    state.form = {
      name: '',
      company: '',
      email: '',
      message: '',
    }
  } catch (err) {
    state.apiStatus = 'error'
  }

  // 3秒後alert消失
  setTimeout(() => {
    state.apiStatus = null
  }, 3000)
};
</script>

<style lang="scss" scoped>
.custom-icon-border {
  border: 2px solid #6F6C3E; 
  padding: auto; 
  border-radius: 12px; 
  display: flex; 
  align-items: center; 
  justify-content: center;
}
.border-size-desktop {
  width: 50px; 
  height: 50px; 
}
.border-size-phone {
  width: 40px; 
  height: 40px; 
}

.img-size-desktop {
  width: 32px; 
  height: 32px;
}

.img-size-phone {
  width: 24px; 
  height: 24px;
}

.alert-fixed-top {
  position: fixed;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3000;
  width: 400px;
  max-width: 90vw;
  pointer-events: none;
}


</style>