<template>
  <div id="Login" class="pages" data-id="Login" data-route="login">
    <div class="login">
      <div class="title">
        登录
      </div>
      <div class="content">
        <div class="form-row">
          <div class="input-row">
            <label for="userNameInput" class="left"><i class="fa fa-user-circle-o"></i></label>
            <div class="right">
              <BaseInput>
                <input id="userNameInput" type="text" :modal="userName">
              </BaseInput>
            </div>
          </div>
        </div>
        <div class="form-row">
          <div class="input-row">
            <label for="userPwdInput" class="left">
              <i class="fa fa-lock"></i>
            </label>
            <div class="right">
              <BaseInput>
                <input id="userPwdInput" type="password" :modal="userPwd">
              </BaseInput>
            </div>
          </div>
        </div>
        <div class="form-row">
          <div class="submit-row">
            <button>登录</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import BaseInput from '../Lite/Inputs/BaseInput';

  export default {
    name: 'Title',
    components: {
      BaseInput
    },
    data() {
      return {
        userName: '',
        userPwd: ''
      };
    }
  };
</script>
