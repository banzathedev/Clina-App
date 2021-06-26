<template>
  <div class="reserves">
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
          <li><a class="dropdown-item" href="#">Caio</a></li>
          <li><a class="dropdown-item" href="#">Alterar senha</a></li>
          <li><a class="dropdown-item" href="#">Sair</a></li>
        </ul>
      </div>
    </div>
    <div class="card subHeader">
      <nav aria-label="backButtom">
        <ul class="pagination">
          <li class="btn">
            <a class="page-link custom-Btn" href="/Main" aria-label="Anterior">
              <span aria-hidden="true" class="icon-rb">&laquo; </span>
            </a>
          </li>
          <li>
            <p class="avaliableTime">Horários disponíveis para escolher</p>
          </li>
        </ul>
      </nav>
      <div name="calendar-period" class="row inputs-date-period">
        <div class="col-md-6">
          <b-form-group class="forDate" label="Dia(s) Escolhido(s)">
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
                  >Selecionado: {{ recivedPeriod }}.</b-form-select-option
                >
              </template>
            </b-form-select>
          </b-form-group>
        </div>
      </div>
    </div>
    <div class="calendar-oderInfo">
      <div class="card mainView">
        <div class="row">
          <div class="calendar-dates col-6">
            <div class="card calendars">
              <div class="dayshow1">
                <p>
                  <span class="dayStyle">0{{ roomShedule[0].dia }}</span
                  ><span class="monthStyle"> março</span>
                </p>
                <p class="inPeriod">
                  No preriodo da -
                  <span class="thePeriod">{{
                    roomShedule[0].periodos[0].p
                  }}</span>
                </p>
                <div>
                  <ul class="pagination">
                    <li class="page-item">
                      <a href="" class="page-link custom-Pgl"
                        >{{ roomShedule[0].periodos[0].hours[0] }}
                      </a>
                    </li>
                    <li class="page-item">
                      <a href="" class="page-link custom-Pgl"
                        >{{ roomShedule[0].periodos[0].hours[1] }}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="dayshow2">
                <p>
                  <span class="dayStyle">0{{ roomShedule[1].dia }}</span
                  ><span class="monthStyle"> março</span>
                </p>
                <p class="inPeriod">
                  No preriodo da -
                  <span class="thePeriod">{{
                    roomShedule[1].periodos[0].p
                  }}</span>
                </p>
                <div class="onePeriod">
                  <ul class="pagination">
                    <li class="page-item">
                      <a href="" class="page-link custom-Pgl"
                        >{{ roomShedule[1].periodos[0].hours[0] }}
                      </a>
                    </li>
                    <li class="page-item">
                      <a href="" class="page-link custom-Pgl"
                        >{{ roomShedule[1].periodos[0].hours[1] }}
                      </a>
                    </li>
                    <li class="page-item">
                      <a href="" class="page-link custom-Pgl"
                        >{{ roomShedule[1].periodos[0].hours[2] }}
                      </a>
                    </li>
                    <li class="page-item">
                      <a href="" class="page-link custom-Pgl"
                        >{{ roomShedule[1].periodos[0].hours[3] }}
                      </a>
                    </li>
                  </ul>
                </div>
                <p class="inPeriod">
                  No preriodo da -
                  <span class="thePeriod">{{
                    roomShedule[1].periodos[1].p
                  }}</span>
                </p>
                <div class="onePeriod">
                  <ul class="pagination">
                    <li class="page-item">
                      <a href="" class="page-link custom-Pgl"
                        >{{ roomShedule[1].periodos[1].hours[0] }}
                      </a>
                    </li>
                    <li class="page-item">
                      <a href="" class="page-link custom-Pgl"
                        >{{ roomShedule[1].periodos[1].hours[1] }}
                      </a>
                    </li>
                    <li class="page-item">
                      <a href="" class="page-link custom-Pgl"
                        >{{ roomShedule[1].periodos[1].hours[2] }}
                      </a>
                    </li>
                    <li class="page-item">
                      <a href="" class="page-link custom-Pgl"
                        >{{ roomShedule[1].periodos[1].hours[3] }}
                      </a>
                    </li>
                  </ul>
                </div>
                <p class="inPeriod">
                  No preriodo da -
                  <span class="thePeriod">{{
                    roomShedule[1].periodos[2].p
                  }}</span>
                </p>
                <div class="onePeriod">
                  <ul class="pagination">
                    <li class="page-item">
                      <a href="" class="page-link custom-Pgl"
                        >{{ roomShedule[1].periodos[2].hours[0] }}
                      </a>
                    </li>
                    <li class="page-item">
                      <a href="" class="page-link custom-Pgl"
                        >{{ roomShedule[1].periodos[2].hours[1] }}
                      </a>
                    </li>
                    <li class="page-item">
                      <a href="" class="page-link custom-Pgl"
                        >{{ roomShedule[1].periodos[2].hours[2] }}
                      </a>
                    </li>
                    <li class="page-item">
                      <a href="" class="page-link custom-Pgl"
                        >{{ roomShedule[1].periodos[2].hours[3] }}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="dayshow3">
                <p>
                  <span class="dayStyle">0{{ roomShedule[2].dia }}</span
                  ><span class="monthStyle"> março</span>
                </p>
                <p class="inPeriod">
                  No preriodo da -
                  <span class="thePeriod">{{
                    roomShedule[2].periodos[1].p
                  }}</span>
                </p>
                <div>
                  <ul class="pagination">
                    <li class="page-item">
                      <a href="" class="page-link custom-Pgl"
                        >{{ roomShedule[2].periodos[1].hours[0] }}
                      </a>
                    </li>
                    <li class="page-item">
                      <a href="" class="page-link custom-Pgl"
                        >{{ roomShedule[2].periodos[1].hours[1] }}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="dayshow4">
                <p>
                  <span class="dayStyle">0{{ roomShedule[3].dia }}</span
                  ><span class="monthStyle"> março</span>
                </p>
                <p class="inPeriod">
                  No preriodo da -
                  <span class="thePeriod">{{
                    roomShedule[3].periodos[2].p
                  }}</span>
                </p>
                <div>
                  <ul class="pagination">
                    <li class="page-item">
                      <a href="" class="page-link custom-Pgl"
                        >{{ roomShedule[3].periodos[2].hours[0] }}
                      </a>
                    </li>
                    <li class="page-item">
                      <a href="" class="page-link custom-Pgl"
                        >{{ roomShedule[3].periodos[2].hours[1] }}
                      </a>
                    </li>
                    <li class="page-item">
                      <a href="" class="page-link custom-Pgl"
                        >{{ roomShedule[3].periodos[2].hours[2] }}
                      </a>
                    </li>
                    <li class="page-item">
                      <a href="" class="page-link custom-Pgl"
                        >{{ roomShedule[3].periodos[2].hours[3] }}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="infoAndPurchase col-6">
            <div class="card infos">
              <p class="infoName">Nome do consultório - Sala 01</p>
              <p class="infoComodities">Comodidades da sala incluídas</p>
              <ul class="comoditiesSTYLE">
                <li>
                  <b-icon
                    icon="check-circle"
                    scale="1"
                    variant="success"
                  ></b-icon>
                  {{ roomComodities[0] }}
                </li>
                <li>
                  <b-icon
                    icon="check-circle"
                    scale="1"
                    variant="success"
                  ></b-icon>
                  {{ roomComodities[1] }}
                </li>
                <li>
                  <b-icon
                    icon="check-circle"
                    scale="1"
                    variant="success"
                  ></b-icon>
                  {{ roomComodities[2] }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="fakeFooter">
      <footer class="footerEl">
        <hr class="footerLine" />
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
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {

  data() {
    return {
      roomName: 1, //TODO receber o nome do quarto lá da main
      selected: null,
      roomPrice: 80,
      recivedPeriod: "Todos", //TODO receber Valor vindo da main
      roomComodities: ["Sofá/Divã", "Lavatório/Pia", "Impressora"], //TODO receber valor vindo do back end no created.
      
    };
  },
  methods: {
    ...mapActions(['getShedule', 'getRooms']),
  },
  computed: {
    ...mapGetters({ roominfosArrival: 'passRooms', roomSheduleArrival: 'passShedule'}),
   roomInfos(){
     return this.roominfosArrival
   },
    roomShedule() {
      return this.roomSheduleArrival
    }
  },
  created() {
    this.getShedule()
    
  }
};
</script>

<style lang="scss" scoped>
.fake-nav {
  //header style
  //TODO put all headstyles in on sccs archive
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

//subHeader
.subHeader {
  margin-left: 277px;
  width: 1366px;
  border: none;
  background-color: #fafafa;
}
.avaliableTime {
  position: relative;
  top: 42px;
  font: normal normal 600 28px/28px Poppins;
  letter-spacing: 0px;
  color: #111111;
}
.custom-Btn {
  top: 32px;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  margin-left: 4px;
  background-color: #fafafa;
}
.icon-rb {
  position: relative;
  top: 0px;
}
.subTitle {
  position: relative;
  top: 75px;
  left: 30px;
  font: normal normal normal 16px/28px Poppins;
  letter-spacing: 0px;
  color: #4f4f4f;
  opacity: 1;
}
.inputs-date-period {
  position: relative;
  top: 50px;
  left: 12px;
  width: 450px;
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
// body principal card style:
.mainView {
  margin-left: 277px;
  width: 1366px;
  top: 85px;
  border: none;
  background-color: #fafafa;
  margin-bottom: 50px;
}
.calendars {
  background-color: #fafafa;
  border: none;
}
//time list style
.list-inline {
  list-style: none;
  margin-right: 5px;
}

.list-inline > li {
  display: inline;
  margin-right: 5px;
}
.dayStyle {
  position: relative;
  left: 4px;
  font: normal normal 600 20px/28px Poppins;
  letter-spacing: 0px;
  opacity: 1;
  color: #7a35ff;
}
.monthStyle {
  position: relative;
  left: 4px;
  font: normal normal 600 20px/28px Poppins;
  letter-spacing: 0px;
  color: #111111;
}
.inPeriod {
  position: relative;
  top: 0px;
  left: 4px;
  font: normal normal normal 14px/28px Poppins;
  letter-spacing: 0px;
  color: #4f4f4f;
}
.thePeriod {
  position: relative;
  font: normal normal 600 14px/28px Poppins;
  letter-spacing: 0px;
  color: #4f4f4f;
}
.custom-Pgl {
  font: normal normal normal 14px/28px Poppins;
  letter-spacing: 0px;
  color: #4f4f4f;
  opacity: 1;
  margin-right: 5px;
  left: 4px;
  border-radius: 10px;
  width: 126px;
}
// room info and purshased style
.comoditiesSTYLE {
  list-style: none;
  text-align: left;
  font: normal normal normal 14px/28px Poppins;
  letter-spacing: 0px;
  color: #4f4f4f;
}
.infoAndPurchase {
  width: 400px;
  position: relative;
  top: 50px;
  left: 35px;
  border-radius: 20px;
}
.infoName {
  position: relative;
  top: 10px;
  left: 10px;
  text-align: left;
  font: normal normal normal 16px/28px Poppins;
  letter-spacing: 0px;
  color: #4f4f4f;
}
.infoComodities {
  position: relative;
  left: 10px;

  font: normal normal 600 16px/28px Poppins;
  letter-spacing: 0px;
  color: #4f4f4f;
}
//forter styles
.footerEl {
  position: relative;
  top: 50px;
}

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
