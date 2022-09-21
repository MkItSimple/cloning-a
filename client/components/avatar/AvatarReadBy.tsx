import Image from "next/image";
import React from "react";

const AvatarReadBy = ({ user }: { user: any }) => {
  return (
    <AvatarReadByContainer>
      <div className="image_container">
        {user.avatarImage.url ? (
          <Image
            src={user.avatarImage.url}
            height="100%"
            width="100%"
            alt="hello"
            objectFit="cover"
          />
        ) : (
          <div className="name__avatar">{AvatarName(user)}</div>
        )}
        <div className="tooltip">
          Seen by {user.firstname} {user.lastname}
        </div>
      </div>
    </AvatarReadByContainer>
  );
};

export default AvatarReadBy;
import styled from "styled-components";
import { AvatarName } from "../../utils/customFunctions";
import { getNameAvatar } from "../../utils/logics";
const AvatarReadByContainer = styled.div`
  .image_container {
    height: 17px;
    width: 17px;
    position: relative;
    border: 1px solid var(--sky50);
    border-radius: 50%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(to bottom, var(--sky50), var(--sky200));
    .tooltip {
      position: absolute;
      right: 0px;
      top: 20px;
      background-color: white;
      border: 1px solid var(--gray600);
      padding: 2px 10px 4px 10px;
      font-size: 10px;
      display: none;
      width: fit-content;
      white-space: nowrap;
    }
    &:hover {
      .tooltip {
        display: block;
        z-index: 30;
      }
    }
  }
  img {
    border-radius: 50%;
  }
  .name__avatar {
    font-size: 7px;
    font-weight: 700;
    color: var(--sky700);
  }
`;
