import React from 'react'
import { useForm } from "@statickit/react"

const OptInForm = () => {

    const [state, submit] = useForm("75d51957701e");

    if (state.succeeded) {
        return (
            <div className="wall-pad blue">
                <div className="smash">
                    <div className="mod-media">
                        <img src="https://media.giphy.com/media/nbFu0f51DMsdshaF4U/source.gif" width="300" className="float" />
                    </div>
                    <h4 className="centertxt">
                        Tu mensaje ha sido enviado
                    </h4>

                    <div className="pad" />
                </div>
            </div>

        );
    }
    return (
        <div className="wall-pad">
            <div className="smash">


                <form onSubmit={submit} className="inputer">
                    <p>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            className="block"
                            placeholder="Correo electrónico"
                            required
                        />
                    </p>
                    <p>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            className="block"
                            placeholder="Nombre completo"
                            required
                        />
                    </p>
                    <p>
                        <input
                            id="tel"
                            type="tel"
                            name="tel"
                            className="block"
                            placeholder="Teléfono"
                            required
                        />
                    </p>
                    <p className="centertxt">
                        <button
                            type="submit"
                            className="button-fill">
                            Enviar
                    </button>
                    </p>
                </form>
            </div>
        </div>
    )
}

const Form = () => (
    <div>

        <OptInForm />

    </div>
)

export default Form