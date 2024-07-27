import styled from 'styled-components';

export const Container = styled.div`

    display: flex;
    padding: 0 1.25rem;
    padding-top: 5.875rem;
    

   > div {
    width: 50%;
   }

   h1 {
    color: var(--primary-color);
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 140%;
    margin-bottom: 1.25rem;
   }

   h5 {
    color: var(--support-text);
    font-weight: 400;
    font-size: 1rem;
    line-height: 150%; 
    margin-bottom: 3rem;
    max-width: 405px;
   }

`;