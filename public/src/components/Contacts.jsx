import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function Contacts({ contacts, changeChat }) {
  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [currentUserImage, setCurrentUserImage] = useState(undefined);
  const [currentSelected, setCurrentSelected] = useState(undefined);
  useEffect(async () => {
    const data = await JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
    );
    setCurrentUserName(data.username);
    setCurrentUserImage(data.avatarImage);
  }, []);
  const changeCurrentChat = (index, contact) => {
    setCurrentSelected(index);
    changeChat(contact);
  };
  return (
    <>
      {currentUserImage && currentUserImage && (
        <Container>
          <div className="brand">
            <h3>chatbook</h3>
          </div>
          <div className="contacts">
            {contacts.map((contact, index) => {
              return (
                <div
                  key={contact._id}
                  className={`contact ${
                    index === currentSelected ? "selected" : ""
                  }`}
                  onClick={() => changeCurrentChat(index, contact)}
                >
                  <div className="avatar">
                    <img
                      src={`data:image/svg+xml;base64,${contact.avatarImage}`}
                      alt=""
                    />
                  </div>
                  <div className="username">
                    <h3>{contact.username}</h3>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="current-user">
            <div className="avatar">
              <img
                src={`data:image/svg+xml;base64,${currentUserImage}`}
                alt="avatar"
              />
            </div>
            <div className="username">
              <h2>{currentUserName}</h2>
            </div>
          </div>
        </Container>
      )}
    </>
  );
}
const Container = styled.div`
  display: grid;
  grid-template-rows: 15% 75% 10%;
  overflow: hidden;
  background-color: #080420;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 2rem;
    }
    h3 {
      background: linear-gradient(90deg, #fcff9e 0%, #fffcf7 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-transform: uppercase;
      font-size: 2.8vw;
      font-weight: 400;
    }
  }
  @media (max-width: 666px) {
    grid-template-rows: 15% 75% 10%;

    .brand {
      display: flex;
      width: 100%;
      h3 {
        text-transform: uppercase;
        font-size: 4vw;
        padding-top: 4vh;
      }
    }
  }
  .contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    gap: 0.8rem;
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: #e87575c8;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    @media (max-width: 666px) {
      .contacts {
        overflow: auto;
      }
    }
    .contact {
      background-color: #ffffff34;
      min-height: 5rem;
      cursor: pointer;
      width: 100%;
      border-radius: 0.2rem;
      padding: 0.4rem;
      display: flex;
      gap: 1rem;
      align-items: center;
      transition: 0.5s ease-in-out;
      .avatar {
        img {
          height: 3rem;
        }
      }
      .username {
        h3 {
          background: linear-gradient(90deg, #a8feb5 0%, #7ba4eb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-transform: uppercase;
          font-size: 1.1vw;
        
        }
      }

      @media (max-width: 680px) {
        gap: 0.1rem;
        display: grid;
        margin-right: 0%;
        width: 90px;
        border-radius: 10px;
        overflow: hidden;
        text-align: center;

        .avatar {
          img {
            height: 1.5rem;
          }
        }
        .username {
          h3 {
            font-size: 3vw;
          }
        }
      }
      @media (max-width: 300px) {
        gap: 0.1rem;
        display: grid;
        margin-left: 20%;
        width: 100%;
        .avatar {
          img {
            height: 1.5rem;
          }
        }
        .username {
          h3 {
            color: white;
            font-size: 10px;
          }
        }
      }
      .selected {
        background-color: #9a86f3;
      }
    }
  }

  .current-user {
    background-color: #0d0d30;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    background: linear-gradient(90deg, #a8feb5 0%, #7ba4eb 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-transform: uppercase;
    .avatar {
      img {
        height: 4rem;
        max-inline-size: 100%;
      }
      margin-left: 0px;
          
          font-size:2vw;
          color: white;
          
    }
    @media screen and (min-width: 1080px) {
      gap: 0.5rem;

      .username {
        h2 {
          font-size: 2vw;
          
        }
      }
    }

    @media screen and (min-width: 120px) and (max-width: 1080px) {
      gap: 0.5rem;

      .username {
        h2 {
          font-size: 2vw;
          color: white;
        }
      }
    }
    @media (max-width: 560px) {
      .current-user {
        background-color: #0d0d30;
        display: grid;

        justify-content: center;
        align-items: center;
        gap: 0.2rem;
        padding: 5px 0px ;
      }
      .username {
        width: 100%;
        h2 {
          font-size: 3.0vw;
          text-align: center;
          padding-bottom: 15px;
        }
      }
    }
  }
  @media (max-width: 560px) {
    .current-user {
      display: grid;

      .avatar {
        margin: 0 auto;
        img {
          height: 3rem;
          max-inline-size: 100%;
        }
        margin-left: 0px;
      }
    }
  }
`;
