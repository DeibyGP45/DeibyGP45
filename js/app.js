export function app() {
    console.log("Enlazado")

    let btnGit = document.querySelector(".btn_git")

    btnGit.addEventListener('click', onClick)

    function onClick() {
        console.log("OK")
        window.location.href="https://github.com/DeibyGP45/cursos_web"
    }



}