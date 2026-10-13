import { styled, css } from 'styled-components';

const TabbedContentStyled = styled.div`
  ${({ theme }) => {
    return css`
      width: 100%;

      .tabbed-content__title {
        ${theme.typeStyles.h4};
        margin-bottom: 24px;
      }

      .tabbed-content__tabs {
        display: flex;
        border-bottom: 1px solid #d9d9d9;
      }

      .tabbed-content__tab {
        ${theme.typeStyles.body};

        background: transparent;
        border: none;
        border-bottom: 3px solid transparent;
        padding: 16px 24px;
        cursor: pointer;
        color: var(--semantic-type-primary);
        transition: all 0.2s ease;

        &:hover {
          color: var(--semantic-link-primary);
        }

        &.tabbed-content__tab--active {
          border-bottom: 3px solid var(--semantic-link-primary);
          font-weight: bold;
        }
      }

      .tabbed-content__content {
        padding-top: 24px;
      }

      .tabbed-content__panel {
        display: none;

        &.tabbed-content__panel--active {
          display: block;
        }
      }

      .tabbed-content__text {
        line-height: 1.6;
      }
    `;
  }}
`;

export default TabbedContentStyled;
