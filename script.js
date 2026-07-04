
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");

const modalUsuario = document.getElementById("modalUsuario");
const modalLojista = document.getElementById("modalLojista");
const modalAdmin = document.getElementById("modalAdmin");
const modalProduto = document.getElementById("modalProduto");

function openMenu(){
menu.classList.add("active");
overlay.classList.add("active");
}

function closeMenu(){
menu.classList.remove("active");
overlay.classList.remove("active");
}

function openModal(type){
closeMenu();

if(type==="usuario") modalUsuario.classList.add("active");
if(type==="lojista") modalLojista.classList.add("active");
}

function closeModal(){
modalUsuario.classList.remove("active");
modalLojista.classList.remove("active");
}

/* USUÁRIO */
function salvarUsuario(){
alert("Usuário salvo!");
closeModal();
}

/* LOJISTA */
function salvarLojista(){
alert("Lojista salvo!");
closeModal();
}

/* ADMIN */
function abrirAdmin(){
closeMenu();
modalAdmin.classList.add("active");
}

function fecharAdmin(){
modalAdmin.classList.remove("active");
}

function verificarAdmin(){
if(senhaAdmin.value === "graciele123"){
alert("Bem-vinda!");
}else{
alert("Senha incorreta!");
}
senhaAdmin.value="";
}

/* PRODUTO */
function abrirProduto(){
closeMenu();
modalProduto.classList.add("active");
}

function fecharProduto(){
modalProduto.classList.remove("active");
}

function salvarProduto(){
if(p_senha.value !== "1234"){
alert("Senha incorreta!");
return;
}

alert("Produto salvo!");
fecharProduto();
}
