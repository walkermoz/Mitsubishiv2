import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

export const ConnectButton = styled.img`
    display: none;

    &.active {
        display: block;
        max-width: 100%;
    }
`

export const MintContainer = styled.div`
    display: none;

    &.active {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-width: 0;
        max-width: 100%;
        max-height: 100%;
        min-height: 80%;
		
    }

    @media screen and (max-height: 800px) {
        position: absolute;
        bottom: 5px;
    }
`

export const MintButton = styled.img`
    display: block;
    width: 350px;
    max-width: 100%;
    min-width: 0;
    min-height: 0;
    max-height: 100%;

    &.active {
        display: none;

    }
`

export const QuanityContainer = styled.div`
    display: flex;
    height: auto;
    width: 100%;


`

export const QuanityButton = styled.img`
    width: 150px;
    flex-shrink: 0;
    min-width: 0;
	

`


export const AmountContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-width: 0;
	
`

export const AmountDisplay = styled.img`
    min-width: 0;

    @media screen and (max-width: 650px) {
        display: none;
    }
`

export const Amount = styled.p`
    position: absolute;
    color: white;
    font-size: 80px;
    font-family: 'Holtwood One SC';

    @media screen and (max-width: 650px) {
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: black;
    }
`

export const GifLoop = styled.img`
    width: 300px;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    min-height: 0;
	 padding-bottom: 20px;
`

export const NotWhitelisted = styled.img`
    display: none;

    &.active {
        display: block;
        max-width: 100%;
    }
`
