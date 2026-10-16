import styled from 'styled-components';

export const MapCardStyled = styled.div`
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  .map-card__title {
    padding: 1rem 1.5rem;
    margin: 0;
  }

  .map-card__map {
    width: 100%;
    height: 400px;
  }
`;

export default MapCardStyled;
