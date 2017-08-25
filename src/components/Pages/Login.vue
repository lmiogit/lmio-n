<template>
  <div id="Login" class="pages" data-id="Login" data-route="login">
    <div class="login">
      <div class="title">
        {{ UI.LOGIN[LANG] }}
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
            <BaseBtn btnClass="btn btn-w">{{ UI.LOGIN[LANG] }}</BaseBtn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex';
  import BaseInput from '../Lite/Inputs/BaseInput';
  import BaseBtn from '../Lite/Buttons/BaseBtn';
  import {UI} from '../../maps/UI_Maps';

  console.log(UI);

  export default {
    name: 'Login',
    components: {
      BaseInput,
      BaseBtn,
    },
    data() {
      return {
        userName: '',
        userPwd: ''
      };
    },
    computed: {
      ...mapGetters({
        LANG: 'language'
      }),
      UI: () => {
        return UI;
      }
    }
  };
</script>
