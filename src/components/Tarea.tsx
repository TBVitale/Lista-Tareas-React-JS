type ListaTareas = {
    tarea: string
    borrarTarea: () => void
}

export const Tarea = ({ tarea, borrarTarea }: ListaTareas) => {
    return (
        <div className="task">
            <span>{tarea}</span>
            <button onClick={borrarTarea}>Borrar</button>
        </div>
    )
}