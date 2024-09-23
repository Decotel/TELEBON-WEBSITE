import { gql } from 'graphql-request'
import { graphQLClient } from './graphql-client'
import { PostResponse } from '@/screens/posts/interfaces'

export const getPostById = async (id: string): Promise<PostResponse> => {
	const query = gql`
		query getPost($id: ID!) {
			post(id: $id) {
				data {
					id
					attributes {
						title
						description
						pages {
							__typename
							... on ComponentPageHero {
								title
								description
								background {
									data {
										attributes {
											url
											alternativeText
											width
											height
										}
									}
								}
								background_mobile {
									data {
										attributes {
											url
											alternativeText
											width
											height
										}
									}
								}
								phone {
									data {
										attributes {
											url
											alternativeText
											width
											height
										}
									}
								}
								sideImage {
									data {
										attributes {
											url
											alternativeText
											width
											height
										}
									}
								}
							}
							... on ComponentPageCard {
								title
								description
								image {
									data {
										attributes {
											url
											alternativeText
											width
											height
										}
									}
								}
								button
								view
							}

							... on ComponentPageAllInclusive {
								image {
									data {
										attributes {
											url
											alternativeText
											width
											height
										}
									}
								}
							}
							... on ComponentPageFaq {
								Faq_card {
									id
									Question
									Answer
								}
							}
						}
					}
				}
			}
		}
	`

	const variables = { id }
	return await graphQLClient.request<PostResponse>(query, variables)
}

export const getPostByIdForWhom = async (id: string): Promise<PostResponse> => {
	const query = gql`
		query getPostForWhom($id: ID!) {
			forWhom(id: $id) {
				data {
					id
					attributes {
						title
						description
						pages {
							__typename
							... on ComponentPageHero {
								title
								description
								background {
									data {
										attributes {
											url
											alternativeText
											width
											height
										}
									}
								}
								background_mobile {
									data {
										attributes {
											url
											alternativeText
											width
											height
										}
									}
								}
								phone {
									data {
										attributes {
											url
											alternativeText
											width
											height
										}
									}
								}
								sideImage {
									data {
										attributes {
											url
											alternativeText
											width
											height
										}
									}
								}
							}
							... on ComponentPageCard {
								title
								description
								image {
									data {
										attributes {
											url
											alternativeText
											width
											height
										}
									}
								}
								button
								view
							}

							... on ComponentPageAllInclusive {
								image {
									data {
										attributes {
											url
											alternativeText
											width
											height
										}
									}
								}
							}
							... on ComponentPageFaq {
								Faq_card {
									id
									Question
									Answer
								}
							}
						}
					}
				}
			}
		}
	`

	const variables = { id }
	return await graphQLClient.request<PostResponse>(query, variables)
}
