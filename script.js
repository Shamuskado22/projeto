//função para mudar para light e dark
function toggle() {
  //variável que recebe o elemento html
  const html = document.documentElement
  //quando clicar no botão o elemento html recebe a class light
  html.classList.toggle("light")

  //variável que recebe o seletor da imagem do avatar
  const img = document.querySelector("#profile img")

  //condicional para mudar entre as imagens do avatar de light para dark e vice-versa
  // if (html.classList.contains("light")) {
  //   img.setAttribute("src", "./assets/avatar-light.png")
  //   img.setAttribute("alt", "Imagem para a versão light")
  // } else {
  //   img.setAttribute("src", "./assets/avatar.png")
  //   img.setAttribute("alt", "Imagem para a versão dark")
  // }
}
