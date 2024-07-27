import styled from "styled-components";

export const Container = styled.button`

    width: 130px;
    border-radius: 0.25rem;
    border: 1px solid var(--border-color);
    color: var(--border-color);
    font-size: 0.875rem;
    font-weight: 500;
    margin-left: 3.125rem;
    cursor: pointer;
    

    &:hover {
        color: var(--background-color);
        background-color: var(--border-color);
        transition: all 0.2s linear;
    }

`;

