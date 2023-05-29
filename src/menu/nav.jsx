import React from 'react'
import styled from 'styled-components'
import Image from 'next/image';
import Logo from '../../public/assets/logo.svg'
import Link from 'next/link';
import IonIcon from '@reacticons/ionicons';


const StyledNav = styled.nav`
    
    padding: 3.2rem 2.7rem 0 3.5rem;


    ul{
        margin-top: 6rem;
        list-style: none;

        display: grid;
        gap: 3.6rem;

        min-width: 13.5rem;
    }

    a{
        color: #CAB3FF;
        
        display: flex;
        align-items: center;
        gap: 1.6rem;

        font-weight: 500;
    }

    a.active,
    a:hover{
        color: #fff;
        font-weight: 700;
    }

    a:first-child{
        font-size: 2rem;
    }

`;

export default function Nav() {
    return (
        <StyledNav>
            <Image src={Logo} alt="Logo do site" />
            <ul>
                <li>
                    <Link href="#" className='active'>
                        <IonIcon name='tablet-portrait' />
                        Boards
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <IonIcon name='people' />
                        Equipes
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <IonIcon name='document-text' />
                        Relatórios
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <IonIcon name='cog' />
                        Ajustes
                    </Link>
                </li>

            </ul>

        </StyledNav>
    )
}
