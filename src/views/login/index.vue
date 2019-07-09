<template>
    <div class="login">
<van-nav-bar
    title="登录"
/>
<van-cell-group>
  <van-field
    v-model="user.mobile"
    required
    clearable
    label="手机号"
    placeholder="请输入手机号"
  />

  <van-field
    v-model="user.code"
    type="password"
    label="验证码"
    placeholder="请输入验证码"
    required
  />
</van-cell-group>
<div class="login-btn">
    <van-button class="btn" type="info">登录</van-button>
</div>

    </div>
</template>

<script>
export default {
  name: 'Applogin',
  data () {
    return {
      user: {
        mobile: '',
        code: ''
      }
    }
  }
}

</script>

<style lang="less" scoped>
.van-nav-bar  {
    background-color: rgb(63, 167, 252)
}
.van-icon {
    width: 20px;
    height: 20px;
}
.login-btn {
    padding:35px;
    .btn {
        width: 100%
    }
}
</style>
