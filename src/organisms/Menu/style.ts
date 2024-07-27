import styled from 'styled-components';

export const MenuList = styled.ul`


    margin-left: auto;
    color: var(--primary-color);
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const ItemList = styled.li`

    display: inline-block;
    font-size: 1rem;
    font-weight: 500;

    a {
        color: var(--primary-color);
       
        
    }

    &:hover {

        a {
            color: var(--border-color);
        }

    }

    a {
        transition: all 0.2s linear;
    }

`;