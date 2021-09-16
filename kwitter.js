function adduser(){
    name_ = document.getElementById("username").value;
    localStorage.setItem("name",name_);
    window.location = "kwitter_room.html";
}