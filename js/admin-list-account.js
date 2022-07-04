var form = document.getElementById('addAccount');
var accountList = document.getElementById('accounts');

form.addEventListener('addAccount', addAccount);
function addAccount() {
    //var newItem = document.getElementById('item').value;
    var row = accountList.insertRow();
    var cell = row.insertCell();
    cell.innerHTML = "stt";
    cell = row.insertCell();
    cell.innerHTML = "id";
    cell = row.insertCell();
    cell.innerHTML = "tai khoan";
    cell = row.insertCell();
    cell.innerHTML = "quyen";
    cell = row.insertCell();
    cell.outerHTML = '<td><a href="admin-history-account.html"> <img class="btn-func" src="../images/history-icon.png" alt="history-account"> </a>  <img class="mx-3 btn-func" onclick="" src="../images/unlocked-icon.png" alt="unlocked-icon"> </td>';
  }

  function openPopUp(){
    const addAccountFrag = document.getElementById("addAccountFrag");
    addAccountFrag.style.display='block';
    console.log(addAccountFrag.style.width);

  }
  
  function closePopUp(){
    const addAccountFrag = document.getElementById("addAccountFrag");
    addAccountFrag.style.display='none';

  }





