import gql from 'graphql-tag';

export const GET_ME = gql`
    {
        me {
            _id
            username
            email
            savedBooks {
                bookId
                title
                description
                image
                link
                authors
            }
        }
    }
`;
