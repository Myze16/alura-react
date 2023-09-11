import './Form.css'

import TextInput from "../TextInput/TextInput";
import ListSuspended from '../ListSuspend';
import Button from '../Button'

function Form() {
    const teams = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const save  = (event) => {
        event.preventDefault()
        console.log('Foi salvo')
    }

    return (
        <section className="form">
            <form onSubmit={save}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextInput required="true" label="Nome" placeholder="Digite seu nome..." />
                <TextInput required={true} label="Cargo" placeholder="Digite seu cargo..." />
                <TextInput required={false}
                    label="Imagem"
                    placeholder="Digite o endereço da imagem..."
                />
                <ListSuspended required={true} label='Time' itens={teams} />
                <Button>Criar card</Button>
            </form>
        </section>
    );
}

export default Form;