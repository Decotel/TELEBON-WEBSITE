import { gql } from 'graphql-request'
import { graphQLClient } from './graphql-client'
import { PostResponse } from '@/screens/posts/interfaces'
import { PostResponseBaza } from '@/screens/baza/interfaces'

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

export const getBazaById = async (id: string): Promise<PostResponse> => {
	const query = gql`
    query getBaza($id: ID!) {
      baza(id: $id) {
        data {
          id
          attributes {
            url
            title
            description
            header
            pages {
              __typename
              ... on ComponentBazaText {
                Text
              }
              ... on ComponentBazaImage {
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
              ... on ComponentBazaVideo {
                video {
									data {
										attributes {
											url
											width
											height
										}
									}
								}
              }
            }
          }
        }
      }
    }
  `;

	const variables = { id };
	return await graphQLClient.request<PostResponse>(query, variables);
};

export const getBazasQuery = gql`
  query getBaza {
    bazas {
      data {
        id
        attributes {
          url
          title
          description
          header
          pages {
            __typename
            ... on ComponentBazaText {
              Text
            }
          }
        }
      }
    }
  }
`;