import styled from '@emotion/styled';

export const ProfileWrapper = styled.div`
  max-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Img = styled.img`
  max-height: 50px;
  max-width: 50px;
  border-radius: 50%;
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  gap: 8px;
  padding-left: 0px;
`;

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  padding: 16px;
  width: 45px;
  height: 45px;
`;
