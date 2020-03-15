function toggleSidebar(directive) {
  let sidebarWidth = 250;
  const sidebar = document.getElementById("sidebar");
  const menuButtons = document.getElementsByClassName("menu-button");

  if (!sidebar || !menuButtons) {
    return;
  }

  if (sidebar.offsetWidth < sidebarWidth && directive != "close") {
    openSidebar();
  } else {
    closeSidebar();
  }

  function openSidebar() {
    sidebar.style.width = `${sidebarWidth}px`;
    sidebar.style.padding = "20px 20px 40px";
    for (menuButton of menuButtons) {
      menuButton.innerText = "close";
    }
  }

  function closeSidebar() {
    sidebar.style.width = "0";
    sidebar.style.padding = "0";
    for (menuButton of menuButtons) {
      menuButton.innerText = "menu_open";
    }
  }
}

function toggleModal(modalType) {
  let modals = document.getElementsByClassName("profile-modal");
  if (modalType == "message") {
    toggleMessageModal();
    return;
  }
  if (!modals) {
    return;
  }

  for (modal of modals) {
    if (modal.style.visibility == "hidden" || modal.style.visibility == "") {
      modal.style.visibility = "visible";
      modal.style.opacity = "1";
    } else {
      modal.style.visibility = "hidden";
      modal.style.opacity = "0";
    }
  }
}

function toggleMessageModal() {
  const modals = document.getElementsByClassName('message-modal');
  if (modals) {
    for (modal of modals) {
      modal.remove();
      return;
    }
  }

  const main = document.getElementById('main');
  main.insertAdjacentHTML(
    "afterend",
    `
  <div class="modal message-modal">
    <div class="modal-content">
      <div>
        <a href="javascript:void(0)" class="close-button" onclick="toggleModal('message')">
          <i class="material-icons">
            close
          </i></a>
      </div>
      <i class="material-icons logo">
        message
      </i>
      <input type="text" value="Placeholder Name" /> <br />
      <input type="text" value="Message" /> <br />
      <button type="submit" onclick="sendEmail()">Send</button>
    </div>
  </div>
  `
  );
}

function sendEmail() {
  const logo = document.getElementsByClassName("logo")
  logo[0].style.transform = "rotate(-2deg) translateX(180px)"
  logo[0].style.opacity = 0;
  setTimeout(() => toggleModal('message'), 800);
}
