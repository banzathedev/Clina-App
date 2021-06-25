<template>
  <div class="login">
    <div name="card login" class="">
      <div name="card">
        <div class="card-body loginCard">
          <img
            src="../assets/img/marca-clina-positivo.svg"
            alt=""
            class="LoginImgStyle"
          />
          <p class="loginTitle">Bem-vindo de volta!</p>
          <p class="loginMail">Endereço de email</p>

          <input
            type="email"
            class="form-control email"
            id="1"
            placeholder="name@example.com"
          />
          <p class="loginPassword">Senha</p>
          <input type="password" class="form-control password" id="2" />
          <button class="btnEnter" @click="goToMain">
            <span>Entrar</span>
          </button>
          <a href="" class="link">Esqueci minha senha</a>
        </div>
      </div>
      <div name="Sign in" class="">
        <div></div>
        <p class="signIn">
          Novo na plataforma?
          <span href="" class="signInLink">Cadastre-se</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      loginData: {
        email: "",
        senha: "",
      },
    };
  },
  methods: {
    goToMain() {
      this.$router.push("main");
    },
  },
};
</script>

<style lang="scss" scoped>
// login styles
//TODO se der retirar essa cod para um css separado e importar dps.
.loginCard {
  margin-top: 106px;
  margin-left: 750px;
  width: 420px;
  height: 497px;
  background: #ffffff;
  box-shadow: 0px 4px 6px #00000014;
  border: 1px solid #cfcfcf;
  border-radius: 8px;
  opacity: 1;
}
.LoginImgStyle {
  position: absolute;
  top: 154px;
  left: 777px;
  width: 161px;
  height: 48px;
}
.loginTitle {
  position: absolute;
  top: 200px;
  left: 777px;
  width: 254px;
  height: 33px;
  text-align: left;
  font: normal normal bold 24px/28px Poppins;
  letter-spacing: 0px;
  color: #111111;
  opacity: 1;
}
.loginMail {
  position: absolute;
  top: 234px;
  left: 777px;
  width: 160px;
  height: 23px;
  text-align: left;
  font: normal normal 600 16px/28px Poppins;
  letter-spacing: 0px;
  color: #4f4f4f;
  opacity: 1;
}
.email {
  position: absolute;
  top: 284px;
  left: 777px;
  width: 372px;
  height: 44px;
  background: #ffffff;
  border: 1px solid #cfcfcf;
  border-radius: 4px;
  opacity: 1;
}
.loginPassword {
  position: absolute;
  top: 325px;
  left: 777px;
  width: 52px;
  height: 23px;
  text-align: left;
  font: normal normal 600 16px/28px Poppins;
  letter-spacing: 0px;
  color: #4f4f4f;
  opacity: 1;
}
.password {
  position: absolute;
  top: 375px;
  left: 777px;
  width: 372px;
  height: 44px;
  background: #ffffff;
  border: 1px solid #cfcfcf;
  border-radius: 4px;
  opacity: 1;
}
.btnEnter {
  position: absolute;
  top: 455px;
  left: 777px;
  width: 372px;
  height: 44px;
  background: #7a35ff;
  box-shadow: none;
  border-radius: 4px;
  border-block-style: none;
  opacity: 1;
  font: normal normal bold 16px/26px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
}
.link {
  position: fixed;
  top: 535px;
  left: 890px;
  width: 160px;
  height: 20px;
  text-align: center;
  text-decoration: underline;
  font: normal normal 600 14px/28px Poppins;
  letter-spacing: 0px;
  color: #212e89;
  opacity: 1;
}

//  sign in styles

.signIn {
  position: absolute;
  padding-top: 5px;
  left: 760px;
  text-align: left;
  font: normal normal normal 14px/28px Poppins;
  letter-spacing: 0px;
  color: #4f4f4f;
  opacity: 1;
}
.signInLink {
  text-align: center;
  font: normal normal 600 14px/28px Poppins;
  letter-spacing: 0px;
  color: #212e89;
  opacity: 1;
}
</style>
