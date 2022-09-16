import gql from 'graphql-tag';

gql`
  query getAllUsers {
    getAllUsers {
      id
      banned
      banReason
      status
      email
      roles {
        description
        id
        value
      }
    }
  }
`;
