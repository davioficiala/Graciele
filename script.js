/* MENU */
function openMenu(){
menu.classList.add("active");
overlay.classList.add("active");
}

function closeMenu(){
menu.classList.remove("active");
overlay.classList.remove("active");
}

/* MODAIS */
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

const dados = {
nome:u_nome.value,
email:u_email.value,
telefone:u_tel.value
};

console.log("Usuário:",dados);

alert("Usuário salvo!");

u_nome.value="";
u_email.value="";
u_tel.value="";

closeModal();
}

/* LOJISTA */
function salvarLojista(){

const dados = {
nome:l_nome.value,
empresa:l_empresa.value,
telefone:l_tel.value,
email:l_email.value,
endereco:l_endereco.value
};

console.log("Lojista:",dados);

alert("Lojista salvo!");

l_nome.value="";
l_empresa.value="";
l_tel.value="";
l_email.value="";
l_endereco.value="";

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
alert("Bem-vinda Admin Graciele!");
window.location.href = "admin.html";
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

const produto = {
nome:p_nome.value,
preco:p_preco.value,
imagem:p_img.value
};

console.log("Produto:",produto);

alert("Produto salvo com sucesso!");

p_nome.value="";
p_preco.value="";
p_img.value="";
p_senha.value="";

fecharProduto();
}
