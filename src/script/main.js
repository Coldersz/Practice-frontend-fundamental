import moment from "moment";

function main() {
  
  const baseUrl = "https://covid19.mathdro.id/api"

  async function getLocal() {
    try {
      const response = await fetch(`${baseUrl}/countries/idn`, {
        method: "GET"
      });
      const responseJson = await response.json();
      renderLocal(responseJson)
    } catch (error) {
      console.error(error);
    }
  }
  
  async function getGlobal() {
    try {
      const response = await fetch(`${baseUrl}`);
      const responseJson = await response.json();
      renderGlobal(responseJson)
    } catch (error) {
      console.error(error);
    }
  }

  const renderLocal = (param) => {
    const localElement = document.querySelector('#local');
    localElement.innerHTML = `
    <div class="jumbotron">
      <h2>Indonesia</h2>
      <hr>
      <div class="mx-auto">
        <div class="card-deck">
          <div class="card shadow mb-3">
            <div class="card-body">
              <span class="card-title text-muted">Total Kasus</span>
              <h3 class="card-text display-4">${param.confirmed.value}</h3>
            </div>
          </div>
          <div class="card shadow mb-3">
            <div class="card-body">
              <span class="card-title text-muted">Pasien Sembuh</span>
              <h3 class="card-text text-success display-4">${param.recovered.value}</h3>
            </div>
          </div>
          <div class="card shadow mb-3">
            <div class="card-body">
              <span class="card-title text-muted">Pasien Meninggal</span>
              <h3 class="card-text text-danger display-4">${param.deaths.value}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
  }

  const renderGlobal = (param) => {
    const globalElement = document.querySelector('#global');
    globalElement.innerHTML = `
    <div class="jumbotron">
      <h2>Global</h2>
      <hr>
      <div class="mx-auto">
        <div class="card-deck">
          <div class="card shadow mb-3">
            <div class="card-body">
              <span class="card-title text-muted">Total Kasus</span>
              <h3 class="card-text display-4">${param.confirmed.value}</h3>
            </div>
          </div>
          <div class="card shadow mb-3">
            <div class="card-body">
              <span class="card-title text-muted">Pasien Sembuh</span>
              <h3 class="card-text text-success display-4">${param.recovered.value}</h3>
            </div>
          </div>
          <div class="card shadow mb-3">
            <div class="card-body">
              <span class="card-title text-muted">Pasien Meninggal</span>
              <h3 class="card-text text-danger display-4">${param.deaths.value}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
  }

  const displayTime = () => {
    moment.locale("id");
    const nowMoment = moment();
    const displayMoment = document.querySelector('#date');
    displayMoment.innerHTML = nowMoment.format('dddd, MMMM Do YYYY, HH:mm:ss')
  }

  const updateTime = () => {
    displayTime();
    setTimeout(updateTime, 1000);
  }

  document.addEventListener("DOMContentLoaded", () => {
    getGlobal();
    getLocal();
    updateTime();
  })

}

export default main;