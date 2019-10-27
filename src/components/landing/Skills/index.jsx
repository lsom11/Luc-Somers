import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'Common'
import dev from 'Static/illustrations/skills.svg'
import { Wrapper, SkillsWrapper, Details, Thumbnail, Item } from './styles'

export const Skills = () => (
	<Wrapper id="about">
		<SkillsWrapper as={Container}>
			<Thumbnail>
				<img
					src={dev}
					alt="I’m Luc and I’m a Software Engineer & aspiring Data Scientist!"
				/>
			</Thumbnail>
			<Details>
				<h1>About me</h1>
				<p>
					I'm a Canadian Software Engineer working in the industry for just over
					two years. I work mostly with Javascript (React, Node), but lately
					I've been working with Python and Java as well! I'm currently working
					at a startup in São Paulo, Brazil.
				</p>
				<p>
					If you want to see what I've worked with and what languages I know
					check out my{' '}
					<Item
						key="linkedInHyperlink"
						as="a"
						href="https://www.linkedin.com/in/luc-somers/"
						target="_blank"
						rel="noopener noreferrer"
					>
						LinkedIn!
					</Item>
				</p>
				<Button as={AnchorLink} href="#contact">
					Hire me
				</Button>
			</Details>
		</SkillsWrapper>
	</Wrapper>
)
