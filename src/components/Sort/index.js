import React from 'react'
import LeftArrow from '../../mock/icons/arrow-left.svg'
import RightArrow from '../../mock/icons/arrow-right.svg'
import { Button, SortContainer, SortSection1, SortSection2, SortSection3, SortSection4, SortSection5, SortSection6, ArrowButton, ArrowImage } from './styledSort'

export const Sort = () => {
    return (
    <SortContainer>
		<SortSection1>
			<p>16 de 32 productos</p>
		</SortSection1>
		<SortSection2>
			<p>sort by:</p>
		</SortSection2>
		<SortSection3>
			<Button>Most Recent</Button>
		</SortSection3>
		<SortSection4>
			<Button>Lowest price</Button>
		</SortSection4>
		<SortSection5>
			<Button>Higesth price</Button>
		</SortSection5>
		<SortSection6>
			<ArrowButton><ArrowImage src={LeftArrow} alt=''></ArrowImage></ArrowButton>
            <ArrowButton><ArrowImage src={RightArrow} alt=''></ArrowImage></ArrowButton>
		</SortSection6>				
	</SortContainer>
    )
}
