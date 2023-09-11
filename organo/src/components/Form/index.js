import './Form.css'

import TextInput from "../TextInput/TextInput";
import ListSuspended from '../ListSuspend';

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

    return (
        <section className="form">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextInput label="Nome" placeholder="Digite seu nome..." />
                <TextInput label="Cargo" placeholder="Digite seu cargo..." />
                <TextInput
                    label="Imagem"
                    placeholder="Digite o endereço da imagem..."
                />
                <ListSuspended label='Time' itens={teams} />
            </form>
        </section>
    );
}

export default Form;