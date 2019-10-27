import React from 'react'
import { Layout, SEO } from 'Common'
import { Intro, Skills, Contact, Projects, Blog } from 'Components/landing'

export default () => (
	<Layout>
		<SEO />
		<Intro />
		<Skills />
		<Projects />
		<Blog />
		<Contact />
	</Layout>
)
