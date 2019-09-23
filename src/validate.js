import Vue from 'vue';
import VeeValidate from 'vee-validate';
import zh_CN from 'vee-validate/dist/locale/zh_CN'
Vue.use(VeeValidate);

// 简单配置
VeeValidate.Validator.localize('zh_CN', {
  messages: zh_CN.messages,
  // 如果希望某个属性是中文的，请以键值对进行修改
  attributes: {
    phone: '手机号',
    code: '短信验证码',
    name: '用户名',
    pwd: '密码',

  }
});
VeeValidate.Validator.extend('phone', {
  getMessage: () => `请输入正确的手机号码`,
  validate: (value) => {
    // const reg = /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
    return /[1]\d{10}/.test(value)
  }
});
VeeValidate.Validator.extend('code', {
  getMessage: () => `请输入正确的短信验证码`,
  validate: (value) => {
    // const reg = /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
    return /\d{6}/.test(value)
  }
});
VeeValidate.Validator.extend('pwd', {
  getMessage: () => `请输入六位以上密码`,
  validate: (value) => {
    // const reg = /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
    return /^\d{6,}$/.test(value)
  }
});
VeeValidate.Validator.extend('email', {
  getMessage: () => `请输入正确的邮箱地址`,
  validate: (value) => {
    // const reg = /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
    return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(value)
  }
});

















// var dict = {
//   zh_CN: {
//     messages: {
//       required: function (field) {
//         return '请输入' + field;
//       },
//       confirmed: function (field) {
//         return '两次输入的密码不一致';
//       }
//     },
//     attributes: {
//       OldPassword: '旧密码',
//       NewPassword: '新密码',
//       ConfirmNewPassword: '确认密码',
//     }
//   }
// };
// VeeValidate.Validator.localize('zh_CN', dict.zh_CN)