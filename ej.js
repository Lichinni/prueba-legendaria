const descargar = (contenido, nombre) => {
    const link = document.createElement("a")
    const archivo = new Blob(["vidio.mp4"], { type: 'application/octet-stream' })
    link.href = URL.createObjectURL(archivo)
    link.download = nombre
    link.click()
    URL.revokeObjectURL(link.href)
}