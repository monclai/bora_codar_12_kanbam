import React from 'react'
import styled from 'styled-components'
import Image from 'next/image';
import Pencil from '../../public/assets/pencil.svg'
import IonIcon from '@reacticons/ionicons';
import Kanban from '../Kanban/Kanban';
import Cards from '../Kanban/Cards';

const StyledBody = styled.main`

    padding-top: 0.8rem;

    .inner{
        height: 100%;
        background-color: #FBFAFF;
        border-top-left-radius: 3.2rem;
        padding: 4.8rem 3.2rem;
    }

    /* Section Title + Avatar */
    .title-avatar{
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 1.1rem 2.4rem;
    }

    .title-avatar > img{
        width: 6.4rem;
        height: 6.4rem;
        border-radius: 50%;
    }

    h1{
        display: flex;
        align-items: center;
        gap: 1.2rem;

        font-size: 3.2rem;
        color: #403937;
    }

    /* Section Filter */

    .filter{
        margin-top: 3.2rem;
        padding: 2.4rem;

        display: flex;
        gap: 1.2rem;
    }

    .filter button{
        padding: 1.2rem 3.2rem;
        border: none;
        background: #7C3AED;
        border-radius: 5px;
        color: #fff;

        display: flex;
        align-items: center;
        gap: .8rem;
    }

    .filter button span{
        text-shadow: 0px 4px 16px rgba(22, 22, 22, 0.1);
        font-size: 1.4rem;
    }

    .filter svg{
        font-size: 2.4rem;
    }

    .input-wrapper{
        display: flex;
        align-items: center;
        gap: 1rem;
        background: #fff;
        border: 0.7px solid #E3E3E3;

        box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.1);
        border-radius: .8rem;

        padding: 0 2.4rem;

        flex: 1;
    }


    .input-wrapper svg{
        font-size: 2.4rem;
        color: #505059;
    }

    .input-wrapper input{
        border: none;
        width: 100%;
        outline: none;
    }

    .input-wrapper:has(:focus){
        outline: .2rem black solid;
    }

    .input-wrapper input::placeholder{
        font-size: 16px;
        color: #7C7C8A;
    }

    .kanban{
        display: flex;
        gap: 4.8rem;

        padding-top: 3.2rem;

    }

    .kanban > * {
        flex: 1;
    }
`;

export default function Body() {

    const url = "https://github.com/monclai.png";

    return (
        <StyledBody>
            <div className="inner">
                <section className="title-avatar">
                    <h1>
                        Meu Kanban
                        <Image src={Pencil} />
                    </h1>
                    <img src={url} alt="avatar" />
                </section>

                <section className="filter">
                    <button>
                        <IonIcon name="filter-outline" />
                        <span>Filtrar</span>
                    </button>
                    <div className="input-wrapper">
                        <IonIcon name="search-outline" />
                        <input type="text" placeholder='Busque por cards, assuntos ou responsáveis...' />
                    </div>
                </section>
                <section className='kanban'>
                    <Kanban titulo="A fazer">
                        <Cards
                            titulo="#boraCodar um Kanban 🧑‍💻"
                            corpo="Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban."
                            tags={["rocketseat", "desafio"]}
                        />
                        <Cards
                            titulo="Manter a ofensiva 🔥"
                            corpo="Manter minha atividade na plataforma da Rocketseat para não perder a ofensiva"
                            tags={["rocketseat"]}
                        />
                        <Cards
                            titulo="Almoçar 🥗"
                            corpo="Me alimentar, aproveitando um momento de descanso para recarregar minhas energias durante o almoço"
                            tags={["autocuidado"]}
                        />
                    </Kanban>
                    <Kanban titulo="Fazendo">
                        <Cards
                            titulo="Conferir o novo desafio 🚀 "
                            corpo="Conferir o novo projeto do #boraCodar para fazê-lo da melhor maneira possível"
                            tags={["rocketseat", "desafio"]}
                        />
                        <Cards
                            titulo="Ser incrível 😎"
                            corpo="Sempre me lembrar de manter minha autenticidade e espalhar amor"
                            tags={["autocuidado"]}
                        />
                    </Kanban>
                    <Kanban titulo="Feito">
                        <Cards
                            titulo="#boraCodar uma página de login 🧑‍💻"
                            corpo="Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban."
                            tags={["rocketseat", "desafio"]}
                        />
                        <Cards
                            titulo="#boraCodar uma página de clima 🧑‍💻"
                            corpo="Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban."
                            tags={["rocketseat", "desafio"]}
                        />
                        <Cards
                            titulo="#boraCodar um conversor 🧑‍💻"
                            corpo="Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban."
                            tags={["rocketseat", "desafio"]}
                        />
                    </Kanban>
                </section>


            </div>
        </StyledBody>
    )
}
