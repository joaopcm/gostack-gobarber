import styled from 'styled-components';
import { darken } from 'polished';
import colors from '~/styles/colors';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 2px solid rgb(37, 36, 44);
      border-radius: 4px;
      height: 50px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;
      transition: border 0.2s;

      &::placeholder {
        color: ${colors.grey};
      }

      &:focus {
        border: 2px solid ${colors.primary};
      }
    }

    span {
      color: ${colors.primary};
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    hr {
      border: 0;
      height: 1px;
      background: ${colors.grey};
      margin: 10px 0 20px;
    }

    button {
      margin: 5px 0 0;
      height: 50px;
      background: ${colors.primary};
      font-weight: bold;
      color: ${colors.white};
      border: 0;
      border-radius: 4px;
      font-size: 16px;

      &:hover {
        background: ${darken(0.03, colors.primary)};
      }
    }
  }

  > button {
    width: 100%;
    margin: 10px 0 0;
    height: 50px;
    background: ${colors.error};
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;

    &:hover {
      background: ${darken(0.03, colors.primary)};
    }
  }
`;
