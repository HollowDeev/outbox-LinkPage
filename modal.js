const modal = document.getElementById('modal')


const modificarModal = (acao) => {
    switch (acao) {
        case "abrir":
            modal.showModal()
            modal.style.display = "flex"
            break

        case "fechar":
            modal.style.display = "none"
            modal.close()
            break
    }
}

modal.onload(
    setTimeout(() => {
        modificarModal("abrir")
      }, 1500)
)

