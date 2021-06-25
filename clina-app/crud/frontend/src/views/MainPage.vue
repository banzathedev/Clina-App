<template>
  <div class="main">
    <div class="card fake-nav">
      <img
        src="../assets/img/marca-clina-positivo.svg"
        alt=""
        class="logoStyle"
      />
      <img
        src="../assets/img/iconfinder_clock_226587.svg"
        alt=""
        class="headerIcon"
      />
      <p class="headerText">Salas disponiveis</p>
      <div class="userAvatar">
        <img src="../assets/img/bx-user.svg" alt="" class="userImage" />
      </div>
      <!-- <img src="../assets/img/Icon ionic-md-arrow-dropdown.svg" alt="" class=" btn userDropdown" />
          <div name="dropdown ?" class="userDropdown"> 
            <a href="#" class="btn btn-sm disabled" tabindex="-1" role="button" aria-disabled="true"> </a>
          </div> -->
      <div class="dropdown userDropdown">
        <a
          class="btn dropdown-toggle"
          href="#"
          role="button"
          id="dropdownMenuLink"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
        </a>

        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
    </div>
    <div name="Main-card" class="card sheetModal justify-content-center">
      <div class="card-body">
        <p class="titles">Nossas salas dispoíveis agora.</p>
        <div name="sub-title">
          <img src="../assets/img/pin.svg" alt="" class="pin" />
          <p class="subTitle">
            Todas as nossas salas estão localizadas em São Paulo - Bela Vista,
            rua Itapeva, 490 Sala 68 - CEP: 01332-000.
          </p>
        </div>
        <div name="calendar-period" class="row inputs-date-period">
          <div class="col-md-6">
            <b-form-group class="forDate" label="Precisa para quais Dias ?">
              <b-form-input
                type="date"
                class="form-control form-control-sm"
                placeholder="De 02 de mar. a 05 de mar."
              >
              </b-form-input>
            </b-form-group>
          </div>
          <div class="col-md-6">
            <b-form-group class="period" label="Período">
              <b-form-select
                class="form-control form-control-sm"
                v-model="selected"
              >
                <template>
                  <b-form-select-option :value="null" disabled
                    >-- Please select an option --</b-form-select-option
                  >
                </template>
                <b-form-select-option value="morning"
                  >Manhã</b-form-select-option
                >
                <b-form-select-option value="afternoon"
                  >Tarde</b-form-select-option
                >
                <b-form-select-option value="night">Noite</b-form-select-option>
              </b-form-select>
            </b-form-group>
          </div>
        </div>
        <!-- aqui a quandidade de salas encontradas seria interpoladas -->
        <p class="avaliableRooms">Encontramos 30 salas disponíveis</p>
      </div>
    </div>
    <div class="products-display">
      <div>
        <b-card-group columns>
          <b-card class="product mb-4">
            <div class="row">
              <div name="roomInfos" class="col-6">
                <div class="row">
                  <img
                    src="../assets/img/Retângulo 2692.png"
                    alt="Imagem Consultorio 01"
                    class="roomPhoto col-6"
                  />
                  <b-card-text class="col-6">
                    <h1 class="roomName">Nome do consultório - Sala 01</h1>
                    <h2 class="roomLocation">Em Bela Vista, SP.</h2>
                  </b-card-text>
                </div>
              </div>
              <div class="roomPrice col-3">
                <p class="priceInfo1">A partir de</p>
                <p class="currency">R$ {{roomInfos[0].price}} /h</p>
              </div>
              <div class="roomButtom col-3">
                <button class="btnProduct" @click.stop="pushRoomId(1)">
                  <span>Reservar</span>
                </button>
              </div>
            </div>
          </b-card>

          <b-card class="product mb-4">
            <div class="row">
              <div name="roomInfos" class="col-6">
                <div class="row">
                  <img
                    src="../assets/img/Retângulo 2692-1.png"
                    alt="Imagem Consultorio 01"
                    class="roomPhoto col-6"
                  />
                  <b-card-text class="col-6">
                    <h1 class="roomName">Nome do consultório - Sala 02</h1>
                    <h2 class="roomLocation">Em Bela Vista, SP.</h2>
                  </b-card-text>
                </div>
              </div>
              <div class="roomPrice col-3">
                <p class="priceInfo1">A partir de</p>
                <p class="currency">R$ {{roomInfos[1].price}} /h</p>
              </div>
              <div class="roomButtom col-3">
                <button class="btnProduct"><span>Reservar</span></button>
              </div>
            </div>
          </b-card>

          <b-card class="product mb-4">
            <div class="row">
              <div name="roomInfos" class="col-6">
                <div class="row">
                  <img
                    src="../assets/img/Retângulo 2692.png"
                    alt="Imagem Consultorio 01"
                    class="roomPhoto col-6"
                  />
                  <b-card-text class="col-6">
                    <h1 class="roomName">Nome do consultório - Sala 03</h1>
                    <h2 class="roomLocation">Em Bela Vista, SP.</h2>
                  </b-card-text>
                </div>
              </div>
              <div class="roomPrice col-3" >
                <p class="priceInfo1">A partir de</p>
                <p class="currency" >R$ {{roomInfos[2].price}} /h</p>
              </div>
              <div class="roomButtom col-3">
                <button class="btnProduct"><span>Reservar</span></button>
              </div>
            </div>
          </b-card>
        </b-card-group>
      </div>
    </div>
    <div class="Pagination bt">
      <nav aria-label="Pagination">
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <a class="page-link linkSyle" href="#" aria-label="Anterior">
              <span aria-hidden="true">&laquo; </span>
              <span class="sr-only">Anterior</span>
            </a>
          </li>
          <li class="page-item linkSyle">
            <a class="page-link linkSyle" href="#">1</a>
          </li>
          <li class="page-item linkSyle">
            <a class="page-link linkSyle" href="#">2</a>
          </li>
          <li class="page-item linkSyle">
            <a class="page-link linkSyle" href="#">3</a>
          </li>
          <li class="page-item">
            <a class="page-link linkSyle" href="#" aria-label="Próximo">
              <span class="sr-only">Próximo</span>
              <span aria-hidden="true"> &raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
      <div class="fakeFooter">
        <hr class="footerLine" />
        <footer class="footerEl">
          <div class="footerSyle copyrights">
            <p>© 2021 Clina. Todos os direitos reservados</p>
          </div>
          <div class="footerSyle useTerms">
            <p>Termos de uso</p>
          </div>
          <div class="footerSyle privacy">
            <p>Políticas de privacidade</p>
          </div>
        </footer>
      </div>
    </div>
    
  </div>
</template>

<script>
import { mapActions, mapGetters} from "vuex";
export default {
  data() {
    return {
      roomId: null,
      selected: null,
      options: [
        { value: "A", text: "Option A (from options prop)" },
        { value: "B", text: "Option B (from options prop)" },
      ],
    };
  },
  methods: {
    ...mapActions(['getShedule', 'getRooms']),
    pushRoomId(payload) {
      const selectedRoom = payload;
      this.roomId = selectedRoom;
      this.getShedule()
      this.goToReserve();
    },
    goToReserve() {
      console.log(this.roomId); //fazer a chamada para dispatch no Vuex
      this.$router.push("/Reservar");
      this.roomId = null;
    },
    // rr(){
    //   let chegouRooms = this.$store.getters.passRooms
    //   return this.cc(chegouRooms)
    // }
  },
  
  computed: {
    ...mapGetters({ roominfosArrival: 'passRooms'}),
   roomInfos(){
     return this.roominfosArrival
   }
    
  },
  created() {
    this.getRooms()
    // setTimeout(() => {
    //   this.rr()
    

    // }, 2000)
  }
};
</script>

<style lang="scss" scoped>
//Main Card Styles
//header
.fake-nav {
  margin-left: 277px;
  width: 1366px;
  border: none;
  height: 80px;
}
.logoStyle {
  position: absolute;
  left: 15px;
  height: 60px;
  width: 134px;
  padding-top: 20px;
}
.headerIcon {
  position: absolute;
  left: 200px;
  padding-top: 32px;
}
.headerText {
  position: absolute;
  top: 27px;
  left: 226px;
  height: 23px;
  text-align: left;
  font: normal normal normal 16px/28px Poppins;
  letter-spacing: 0px;
  color: #7a35ff;
}
.userAvatar {
  position: absolute;
  top: 25px;
  left: 1206px;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  background: #eeeeee;
}
.userImage {
  top: 30px;
  left: 1206px;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  background: #eeeeee;
}
.userDropdown {
  position: absolute;
  top: 25px;
  left: 1240px;
  width: 5px;
  height: 5px;
}
.sheetModal {
  width: 1366px;
  margin-left: 277px;
  height: 250px;
  background-color: #fafafa;
  border: none;
}

// card  of the body, syles
.titles {
  position: absolute;
  top: 40px;
  font: normal normal bold 28px/28px Poppins;
  letter-spacing: 0px;
  color: #111111;
  opacity: 1;
}
.pin {
  position: absolute;
  top: 80px;
  left: 15px;
  width: 13px;
  height: 16px;
}
.subTitle {
  position: absolute;
  top: 75px;
  left: 30px;
  font: normal normal normal 16px/28px Poppins;
  letter-spacing: 0px;
  color: #4f4f4f;
  opacity: 1;
}
.inputs-date-period {
  position: absolute;
  top: 115px;
}
.forDate {
  font: normal normal 600 16px/28px Poppins;
  letter-spacing: 0px;
  color: #4f4f4f;
}
.dateInput {
  width: 220px;
}
.period {
  font: normal normal 600 16px/28px Poppins;
  letter-spacing: 0px;
  color: #4f4f4f;
}
.avaliableRooms {
  position: absolute;
  top: 200px;
  left: 15px;
  text-align: left;
  font: normal normal normal 16px/28px Poppins;
  letter-spacing: 0px;
  color: #4f4f4f;
  opacity: 1;
}
//card display rooms.

.product {
  margin-left: 277px;
  width: 1366px;
}
.roomName {
  margin-top: 60px;
  width: 400px;
  font: normal normal 600 24px/28px Poppins;
  letter-spacing: 0px;
  color: #111111;
  opacity: 1;
}
.roomLocation {
  font: normal normal normal 14px/28px Poppins;
  letter-spacing: 0px;
  color: #898989;
  opacity: 1;
}
.priceInfo1 {
  position: relative;
  left: 180px;
  top: 45px;
  font: normal normal normal 14px/20px Poppins;
  letter-spacing: 0px;
  color: #898989;
  opacity: 1;
}
.currency {
  position: relative;
  left: 160px;
  top: 60px;
  font: normal normal 600 24px/28px Poppins;
  letter-spacing: 0px;
  opacity: 1;
}

.btnProduct {
  position: relative;
  top: 80px;
  left: 10px;
  width: 250px;
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
.roomPhoto {
  height: 218px;
  width: 272px;
}

//pagination style
.linkSyle {
  font: normal normal normal 14px/28px Poppins;
  letter-spacing: 0px;
  color: #7a35ff;
}
//footer style
.footerSyle {
  display: inline-block;
}
.copyrights {
  margin-right: 755px;
  margin-left: 277px;
  font: normal normal normal 14px/28px Poppins;
  letter-spacing: 0px;
  color: #898989;
}
.useTerms {
  margin-right: 30px;
  font: normal normal normal 14px/28px Poppins;
  letter-spacing: 0px;
  color: #898989;
}
.privacy {
  margin-right: 273px;
  font: normal normal normal 14px/28px Poppins;
  letter-spacing: 0px;
  color: #898989;
  opacity: 1;
}
</style>
