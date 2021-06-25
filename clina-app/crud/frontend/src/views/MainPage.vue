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
          <b-card
            img-src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:a601c197-0a04-4832-a53f-f7db72599c83;revision=0?component_id=f944001e-d91d-4734-9e40-725b0d263500&api_key=CometServer1&access_token=1624586709_urn%3Aaaid%3Asc%3AUS%3Aa601c197-0a04-4832-a53f-f7db72599c83%3Bpublic_89582edb0e4f7a6091771238c9605e175d8ba5dc"
            img-alt="Image"
            img-left
            class="product mb-4"
          >
            <b-card-text> </b-card-text>
          </b-card>

          <b-card
            img-src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:a601c197-0a04-4832-a53f-f7db72599c83;revision=0?component_id=80810b2e-2359-4c0a-a1bf-0679814d17de&api_key=CometServer1&access_token=1624586709_urn%3Aaaid%3Asc%3AUS%3Aa601c197-0a04-4832-a53f-f7db72599c83%3Bpublic_89582edb0e4f7a6091771238c9605e175d8ba5dc"
            img-alt="Image"
            img-left
            class="product mb-4"
          >
          </b-card>

          <b-card
            img-src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:a601c197-0a04-4832-a53f-f7db72599c83;revision=0?component_id=f944001e-d91d-4734-9e40-725b0d263500&api_key=CometServer1&access_token=1624586709_urn%3Aaaid%3Asc%3AUS%3Aa601c197-0a04-4832-a53f-f7db72599c83%3Bpublic_89582edb0e4f7a6091771238c9605e175d8ba5dc"
            img-alt="Image"
            img-left
            class="product mb-4"
          >
          </b-card>
        </b-card-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
      options: [
        { value: "A", text: "Option A (from options prop)" },
        { value: "B", text: "Option B (from options prop)" },
      ],
    };
  },
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

.product{
  margin-left: 277px;
  width: 1366px;
}
</style>
