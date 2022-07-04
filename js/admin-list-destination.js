var addform = document.getElementById('addDestination');
var destinationList = document.getElementById('destinations');

addform.addEventListener('addDestination', addAccount);
function addAccount() {
    //var newItem = document.getElementById('item').value;
    var row = destinationList.insertRow();
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

  function openAddFragPopUp(){
    const addDestinationFrag = document.getElementById("addDestinationFrag");
    addDestinationFrag.style.display='block';
  }
  
  function closeAddFragPopUp(){
    const addDestinationFrag = document.getElementById("addDestinationFrag");
    addDestinationFrag.style.display='none';

  }

  function openChangeFragPopUp(){
    const addDestinationFrag = document.getElementById("changeDestinationFrag");
    addDestinationFrag.style.display='block';
  }

  function closeChangeFragPopUp(){
    const addDestinationFrag = document.getElementById("changeDestinationFrag");
    addDestinationFrag.style.display='none';

  }


