import styled from '@emotion/styled';

export const FriendItem = styled.div`
  width: 50px;
  height: 40px;
`;

export const OneFriend = styled.li`
  display: flex;
  align-items: center;
  border: 1px solid green;
  border-radius: 8px;
  width: 140px;
`;

export const FriendStatus = styled.span`
  margin-left: 12px;
  margin-right: 12px;
  background-color: ${props => (props.status ? 'green' : 'red')};
  width: 12px;
  height: 12px;
  border-radius: 50%;
  /* border-radius: ${props => props.theme.accent}; */
`;

export const AllFriends = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const Image = styled.img`
  margin-right: 16px;
  width: 24px;
  height: 24px;
`;

export const Name = styled.p`
  font-weight: 600;
`;
