import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Card } from 'Common'
import {
	Wrapper,
	Grid,
	Item,
	FlexWrapper,
	PhotoWrapper,
	TextWrapper,
	Image,
} from './styles'

const mediumCDNUrl = `https://cdn-images-1.medium.com/max/150/`
const MEDIUM_URL = `https://www.medium.com`

export const Blog = () => {
	const {
		allMediumPost: { edges },
	} = useStaticQuery(graphql`
		query {
			allMediumPost(limit: 5, sort: { fields: [createdAt], order: DESC }) {
				edges {
					node {
						id
						title
						uniqueSlug
						author {
							name
						}
						virtuals {
							previewImage {
								imageId
							}
						}
					}
				}
			}
		}
	`)
	console.log(edges)
	return (
		<Wrapper as={Container} id="blog">
			<h2>Blog Posts</h2>
			<Grid>
				{edges.map(({ node }) => (
					<Item
						key={node.id}
						as="a"
						href={`${MEDIUM_URL}/@${node.author.name}/${node.uniqueSlug}`}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Card>
							<FlexWrapper>
								<PhotoWrapper>
									<Image
										src={`${mediumCDNUrl}/${node.virtuals.previewImage.imageId}`}
										alt={node.title}
									/>
								</PhotoWrapper>
								<TextWrapper>
									<h4>{node.author.name}</h4>
									<p>{node.title}</p>
								</TextWrapper>
							</FlexWrapper>
						</Card>
					</Item>
				))}
			</Grid>
		</Wrapper>
	)
}
