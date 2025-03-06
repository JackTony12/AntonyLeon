import React from "react"

const InfoSong = ({ uploadSong, musicData, songIndex }) => {
  return (
    <div>
      <ul>
        <li>
          <span>
            <svg
              stroke='currentColor'
              fill='white'
              strokeWidth='0'
              viewBox='0 0 24 24'
              height='1em'
              width='1em'
            >
              <path fill='none' d='M0 0h24v24H0z'></path>
              <path d='M18.41 5.8 17.2 4.59c-.78-.78-2.05-.78-2.83 0l-2.68 2.68L3 15.96V20h4.04l8.74-8.74 2.63-2.63c.79-.78.79-2.05 0-2.83zM6.21 18H5v-1.21l8.66-8.66 1.21 1.21L6.21 18zM11 20l4-4h6v4H11z'></path>
            </svg>
          </span>
          Nombre:
          <span>
            {uploadSong ? uploadSong.name : musicData[songIndex].songName}
          </span>
        </li>
      </ul>
      <ul>
        <li>
          <span>
            <svg
              stroke='currentColor'
              fill='white'
              strokeWidth='0'
              viewBox='0 0 448 512'
              height='1em'
              width='1em'
            >
              <path d='M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z'></path>
            </svg>
          </span>
          Artista:
          <span>{uploadSong ? "?" : musicData[songIndex].artist}</span>
        </li>
      </ul>
      <ul>
        <li>
          <span>
            <svg
              stroke='currentColor'
              fill='white'
              strokeWidth='0'
              viewBox='0 0 24 24'
              height='1em'
              width='1em'
            >
              <path fill='none' d='M0 0h24v24H0z'></path>
              <path d='M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z'></path>
            </svg>
          </span>
          Lanzamiento:
          <span>{uploadSong ? "?" : musicData[songIndex].date}</span>
        </li>
      </ul>
      <ul>
        <li>
          <span>
            <svg
              stroke='currentColor'
              fill='white'
              strokeWidth='0'
              viewBox='0 0 512 512'
              height='1em'
              width='1em'
            >
              <path d='M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z'></path>
            </svg>
          </span>
          Duración:
          <span>{uploadSong ? "?" : musicData[songIndex].duration}</span>
          min
        </li>
      </ul>
      <ul>
        <li>
          <span>
            <svg
              stroke='currentColor'
              fill='white'
              strokeWidth='0'
              viewBox='0 0 512 512'
              height='1em'
              width='1em'
            >
              <path d='M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM199.4 312.6c-31.2-31.2-31.2-81.9 0-113.1s81.9-31.2 113.1 0c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9c-50-50-131-50-181 0s-50 131 0 181s131 50 181 0c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0c-31.2 31.2-81.9 31.2-113.1 0z'></path>
            </svg>
          </span>
          CopyRight:
          <span>{uploadSong ? "?" : musicData[songIndex].copyRight}</span>
        </li>
      </ul>
    </div>
  )
}

export default InfoSong
